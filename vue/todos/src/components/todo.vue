<template>
  <div class="page lists-show">
    <!--最外层容器-->
    <nav>
      <!--容器上半部分-->
      <div class="nav-group">
        <!--移动端的菜单图标-->
        <a class="nav-item">
          <span class="icon-list-unordered"></span>
        </a>
      </div>
      <h1 class="title-page">
        <span class="title-wrapper">{{todo.title}}</span>
        <!-- 标题-->
        <span class="count-list">{{todo.count}}</span>
        <!-- 数目-->
      </h1>
      <div class="nav-group right">
        <!-- 右边的删除，锁定图标容器-->
        <div class="options-web">
          <a class="nav-item">
            <!-- 锁定图标-->
            <span class="icon-lock" v-if="todo.locked"></span>
            <span class="icon-unlock" v-else></span>
          </a>
          <a class="nav-item">
            <!-- 删除图标-->
            <span class="icon-trash"></span>
          </a>
        </div>
      </div>

      <div class="form todo-new input-symbol">
        <!-- 新增单个代办单项输入框,监听了回车事件，双向绑定text值,监听了disabled属性，在todo.locked为true的情况下无法编辑-->
        <input
          type="text"
          v-model="text"
          placeholder="请输入"
          @keyup.enter="onAdd"
          :disabled="todo.locked"
        />
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
      <!--容器下半部分-->
			<item v-for="(item,index) in items" v-bind:key="index" v-bind:item="item"></item>
    </div>
  </div>
</template>

<script>
import item from '@/components/item'
import {getTodoById,addRecord} from '@/api/api';
export default {
  data() {
    return {
      id : '',
      // todo: {
      //   //详情内容
      //   title: "星期一",
      //   count: 13,
      //   locked: false
      // },
      // items: [
      //   //代办单项列表
      //   { checked: false, text: "新的一天", isDelete: false },
      //   { checked: false, text: "新的一天", isDelete: false },
      //   { checked: false, text: "新的一天", isDelete: false }
      // ],
      todo : {
        title : '',
        count : '',
        locked : false
      },
      items : [],
      text: "" //新增代办单项绑定的值
    };
	},
	components : {
		item
  },
  watch : {
    '$route.params.id' : function (){
      this.id = this.$route.params.id;
      this.init();
    }
  },
	methods : {
    init (){
      let id = this.$route.params.id;
      getTodoById({id:id}).then(res=>{
        let data = res.data.todo;
        this.items = data.record;
        this.todo = {
          id : data.id,
          title : data.title,
          count : data.count,
          locked : data.locked,
          isDelete :data.isDelete
        }
      })
    },
		onAdd : function(){
      console.log(this.text);
      addRecord({id : this.id,text : this.text}).then(res=>{
        console.log(res);
      })
			this.items.push({checked: false,text : this.text,isDelete: false});
      this.text = '';
      
		}
	}
};
</script>

<style lang="less" >
@import "../common/style/nav.less";
@import "../common/style/form.less";
@import "../common/style/todo.less";
</style>