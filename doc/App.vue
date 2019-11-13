<template>
    <div id="app">
    <menuList></menuList>
    <section class="mics-doc-container ">
      <router-view></router-view>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import menuList from "./components/menuList.vue";

@Component({
    components: {
        menuList
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./style/index";
@import "./assets/iconfont/iconfont.css";
</style>
