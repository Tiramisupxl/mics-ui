<template>
    <div class="misc-doc-nav">
        <div v-for="(item, index) in menu" :key="index">
            <div class="mics-doc-nav_group-title">{{item.name}}</div>
            <div v-for="(subItem, subIndex) in item.groups" :key="subIndex">
                <div class="mics-doc-nav__subitem">
                    <router-link :to="subItem.path">
                      {{subItem.title}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import docConfig from '../doc.config.js'
export default {
  name: 'menuList',
  data() {
    return {
      menu: docConfig.menu
    }
  },
};
</script>
<style lang="scss" scoped>
@import "~/style/var";
@import "~/style/base";

.misc-doc-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    min-width: 220px;
    max-width: 220px;
    padding: 25px 0 75px;
    overflow-y: scroll;
    background-color: #fff;
    border-right: 1px solid #f1f4f8;
    box-shadow: 0 8px 12px #ebedf0;
}
.mics-doc-nav_group-title {
    padding-left: 30px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 12px;
    line-height: 40px;
    text-align: left;
}
.mics-doc-nav__subitem {
    a {
        display: block;
        margin: 0;
        padding: 10px 0 10px 30px;
        color: #455a64;
        font-size: 14px;
        line-height: 24px;
        text-align: left;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        &.router-link-active {
            color: $black;
            font-weight: 500;
            font-size: 15px;
        }
        &:hover {
          color: $black;
        }
    }
}
@media (max-width: 1300px) {
    .mics-doc-nav {
        min-width: 220px;
        max-width: 220px;
    }
}
</style>
