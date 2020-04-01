<template>
  <div class="list-item editingClass editing" v-if="!item.isDelete">
    <!-- 最外层容器-->
    <label class="checkbox">
      <!--自定义的多选框-->
      <input type="checkbox" v-model="item.checked" :disabled="allLocked" @change="onChange" />
      <!--item.checked-->
      <span class="checkbox-custom"></span>
    </label>
    <input type="text" v-model="item.text" placeholder="写点什么。。。"  :disabled='allLocked || item.checked' @keyup.enter="onChange"/>
    <!--绑定item.text-->
    <a class="delete-item" v-if="!allLocked && item.checked" @click="item.isDelete = true ; onChange()">
      <!--删除图标-->
      <span class="icon-trash"></span>
    </a>
  </div>
</template>

<script>
import {editRecord} from '@/api/api';
export default {
    props : ['id','item','allLocked','index','init'],
    methods: {
    // 用户无论删除,修改，锁定都可以利用这个方法。
    onChange() {
      editRecord({
        id: this.id, record: this.item, index: this.index
      }).then(data => {
        this.init();
        this.$store.dispatch('getTodo');
      });
    }
  }
}
</script>

<style lang="less" >
@import "../common/style/list-items.less";
</style>