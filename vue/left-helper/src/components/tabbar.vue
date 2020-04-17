<template>
    <wv-tabbar fixed>
      <wv-tabbar-item to="/" :is-on="'/'==$route.path">
        <span slot="icon" style="display: inline-block; position: relative;">
          <!-- <img class="weui-tabbar__icon" src="icon.png" slot="icon" /> -->
          <!-- <wv-badge style="position: absolute;top: -2px;right: -13px;">8</wv-badge> -->
        </span>
        首页
      </wv-tabbar-item>
      <wv-tabbar-item to="/cookbook" :is-on="'/cookbook'==$route.path">
        <!-- <img class="weui-tabbar__icon" src="icon.png" slot="icon" />  -->
        菜谱
      </wv-tabbar-item>
      <wv-tabbar-item to="/cookbook1">
        <span slot="icon" style="display: inline-block; position: relative;">
          <!-- <img class="weui-tabbar__icon" src="icon.png" slot="icon" /> -->
          <!-- <wv-badge is-dot style="position: absolute;top: 0;right: -6px;">8</wv-badge> -->
        </span>
        菜谱1
      </wv-tabbar-item>
      <wv-tabbar-item to="/profile">
        <!-- <img class="weui-tabbar__icon" src="icon.png" slot="icon" />  -->
        我
      </wv-tabbar-item>
    </wv-tabbar>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar{position: fixed;}
</style>
