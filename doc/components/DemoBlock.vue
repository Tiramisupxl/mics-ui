<template>
    <div class="demo-block">
       <div class="source">
            <slot name="source"></slot>
        </div>
        <div class="docs-demo-wrapper">
        <div :style="{height: isExpand ? 'auto' : '0'}" class="demo-container">
            <div>
                <div class="docs-demo docs-demo--expand">
                    <div class="highlight-wrapper">
                        <slot name="highlight"></slot>
                    </div>
                </div>
            </div>
        </div>
        <span
            class="demo-block-control"
            :class="{'demo-block-control--rotate' : isExpand}"
            @click="toggle"
        >{{isExpand ? '隐藏代码' : '显示代码'}}</span>
    </div>
    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DemoBlock extends Vue {
    isExpand = false;
    public toggle(): void {
        this.isExpand = !this.isExpand;
    }
}
</script>

<style lang="scss">
@import "~/style/var";
.demo-container {
    transition: max-height 0.3s ease;
    overflow: hidden;
}

.docs-demo {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 1.8;
    background-color: #ffffff;
    border-top: 1px dotted #e2ecf4;
    border-bottom: 1px solid #e2ecf4;
    border-radius: 6px 6px 0 0;

    pre code {
        font-family: Consolas, Menlo, Courier, monospace;
        line-height: 22px;
        border: none;
    }
}

.demo-block-control {
    width: 100%;
    text-align: center;
    display: inline-block;
    color: #c5d9e8;
    font-size: 12px;
    padding: 10px 0;
    background-color: #fafbfc;
    cursor: pointer;
    &:before {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 5px solid;
        border-color: #c5d9e8 transparent transparent transparent;
        vertical-align: sub;
        margin-right: 10px;
    }
    &:hover {
        color: $blue;
        &:before {
          border-color: $blue transparent transparent transparent;
        }
    }
}

.demo-block-control--rotate {
    &:before {
        vertical-align: text-top;
        transform: rotate(180deg);
    }
}


.docs-demo__code,
.highlight-wrapper,
.docs-demo__meta {
    padding: 0 20px;
    overflow-y: auto;
}

.docs-demo__code {
    border-bottom: 1px solid #eee;
}

.docs-demo.docs-demo--expand .docs-demo__meta {
    border-bottom: 1px dashed #e9e9e9;
}

.highlight-wrapper {
    display: none;

    p,
    pre {
        margin: 0;
    }

    .hljs {
        padding: 0;
    }
}

.docs-demo.docs-demo--expand .highlight-wrapper {
    display: block;
}
</style>