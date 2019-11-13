# Button 按钮
## 基础用法
<div class="demo-block">
  <div>
    <m-button type="primary">主要按钮</m-button>
    <m-button type="secondary">次要按钮</m-button>
    <m-button type="danger">危险按钮</m-button>
    <m-button type="primary" icon="iconfont icon-modify">图标按钮</m-button>
    <m-button type="danger" icon="iconfont icon-delete">图标按钮</m-button>
  </div>
</div>


::: demo
```html

<m-button type="primary">主要按钮</m-button>
<m-button type="secondary">次要按钮</m-button>
<m-button type="danger">危险按钮</m-button>
<m-button type="primary" icon="iconfont icon-modify">图标按钮</m-button>
<m-button type="danger" icon="iconfont icon-delete">图标按钮</m-button>

```
:::


## 禁用状态
<div class="demo-block">
  <div>
    <m-button type="primary" disabled>主要按钮</m-button>
    <m-button type="secondary" disabled>次要按钮</m-button>
    <m-button type="secondary" disabled icon="iconfont icon-modify">主要按钮</m-button>
    <m-button type="danger" disabled icon="iconfont icon-delete">危险按钮</m-button>
  </div>
</div>

::: demo
```html

<m-button type="primary" disabled>主要按钮</m-button>
<m-button type="secondary" disabled>次要按钮</m-button>
<m-button type="secondary" disabled icon="iconfont icon-modify">主要按钮</m-button>
<m-button type="danger" disabled icon="iconfont icon-delete">危险按钮</m-button>

```
:::

## 不同尺寸
<div class="demo-block">
  <div>
    <m-button type="primary" size="large">大按钮</m-button>
    <m-button type="primary">中按钮</m-button>
    <m-button type="primary" size="small">小按钮</m-button>
  </div>
</div>

::: demo
```html
<m-button type="primary" size="large">大按钮</m-button>
<m-button type="primary">中按钮</m-button>
<m-button type="primary" size="small">小按钮</m-button>

```
:::



## Attributes
| 参数 | 说明 | 类型    | 可选值                        | 默认值    |
|------|-----|--------|------------------------------|----------|
|type  |类型  |string  |primary、secondary、danger     |-          |
|size  |尺寸  |string  |default、large、small           |-          |
|disabled|是否禁用状态|boolean | -                      | false     |
|icon  |图标  |string  | -                             |-          |
