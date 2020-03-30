<template>
  <!--菜单容器-->
  <div class="list-todos">
    <!--单个菜单容器-->
    <a v-on:click="getList(item.id)" class="list-todo activeListClass list" v-for="(item,index) in items" v-bind:key="index" :class="{'active' : item.id==todoId}">
      <!--锁的图标-->
      <span class="icon-lock" v-if="item.locked"></span>
      <!--数字-->
      <span class="count-list">{{item.count}}</span>
      <!--菜单内容-->
      {{item.title}}
    </a>
    <a class=" link-list-new" @click="addTodoList">
      <span class="icon-plus">
      </span>
      新增
    </a>
  </div>
</template>

<script>
import {getTodoList , addTodo } from '@/api/api.js'
export default {
  // data() {
  //   //data函数
  //   return {
      // items: [
      //   { title: "星期一", count: 1, locked: true }, //菜单的模拟数据
      //   { title: "星期二", count: 2, locked: true },
      //   {
      //     title: "星期三",
      //     count: 3,
      //     locked: false
      //   }
      // ]
  //     items : [],
  //     todoId :'',
  //   };
  // },
  data() {
    return {
      items: [], // 菜单数据
      todoId: '' // 默认选中id
    };
  },
  created : function(){
    getTodoList({}).then(res=>{
      const r = res.data.todos;
      this.items = r;
      this.todoId = r[1].id;
    });
  },
  methods : {
    getList : function(id){
      this.todoId = id;
    },
    addTodoList() { // 点击新增按钮时候
    // 调用新增菜单的接口，在接口调用成功在请求数据
      addTodo({}).then(data => {
        getTodoList({}).then(res => {
          const TODOS = res.data.todos;
          this.todoId = TODOS[TODOS.length - 1].id;
          this.items = TODOS;
        });
      });
    }
  },
  watch : {
    // todoId : function(){
    //   //监听到用户的点击todoId的变化在跳转路由
    //   this.$router.push( { name : "todo" , params : { id : this.todoId } } );
    // },
    'todoId'(id) {
      this.$router.push({ name: 'todo', params: { id: id } });
    }

  }
};
</script>

<style lang="less">
@import "../common/style/menu.less";
</style>