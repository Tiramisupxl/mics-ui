const path = require('path')
const utils = require('./build/utils')
const MarkdownItContainer = require('markdown-it-container')
const striptags = require('./build/strip-tags')


const vueMarkdown = {
    preprocess: (MarkdownIt, source) => {
      MarkdownIt.renderer.rules.table_open = function () {
        return '<table class="table">'
      }
      MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
  
      // ```html `` 给这种样式加个class hljs
      //  但是markdown-it 有个bug fence整合attr的时候直接加载class数组上而不是class的值上
      //  markdown-it\lib\renderer.js 71行 这么修改可以修复bug
      //  tmpAttrs[i] += ' ' + options.langPrefix + langName; --> tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
      // const fence = MarkdownIt.renderer.rules.fence
      // MarkdownIt.renderer.rules.fence = function(...args){
      //   args[0][args[1]].attrJoin('class', 'hljs')
      //   var a = fence(...args)
      //   return a
      // }
  
      // ```code`` 给这种样式加个class code_inline
      const code_inline = MarkdownIt.renderer.rules.code_inline
      MarkdownIt.renderer.rules.code_inline = function(...args){
        args[0][args[1]].attrJoin('class', 'code_inline')
        return code_inline(...args)
      }
      return source
    },
    use: [
      [MarkdownItContainer, 'demo', {
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: function(tokens, idx) {
          var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          if (tokens[idx].nesting === 1) {
            var desc = tokens[idx + 2].content;
            const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
            console.log(html)
            // 移除描述，防止被添加到代码块
            tokens[idx + 2].children = [];
  
            return `<demo-block>
                          <div slot="desc">${html}</div>
                          <div slot="highlight">`;
          }
          return '</div></demo-block>\n';
        }
      }]
    ]
  }
  


module.exports = {
    // 修改 pages 入口
    pages: {
        index: {
            entry: 'doc/main.ts', // 入口
            template: 'public/index.html', // 模板
            filename: 'index.html', // 输出文件
        }
    },
    // 扩展 webpack 配置
    chainWebpack: config => {
        // @ 默认指向 src 目录，这里要改成 doc
        // 另外也可以新增一个 ~ 指向 src
        config.resolve.alias
            .set('@', path.resolve('doc'))
            .set('~', path.resolve('src'))

        // 把 doc 和 src 加入编译，因为新增的文件默认是不被 webpack 处理的
        config.module
            .rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true,
                ...vueMarkdown
            })

        config.module
            .rule('ts')
            .include.add(/doc/).end()
            .include.add(/src/).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    }
}