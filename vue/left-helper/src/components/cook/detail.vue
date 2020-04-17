<template>
  <div>
    <span class="goback" @click="$router.go(-1)">< 返回</span>
    <span v-if="is_collect" class="doCollect on" @click="doCollect">已收藏</span>
    <span v-else class="doCollect" @click="doCollect">收藏</span>
    <div v-if="detail.id" class="detail">
      <h1 class="title">{{detail.title}}</h1>
      <img :src="detail.albums[0]" class="weui-article-img" alt />
      <p class="panel">简介 : {{detail.imtro}}</p>
      <p class="panel">准备 : {{detail.burden}}</p>
      <div v-for="item in detail.steps">
        <p>{{item.step}}</p>
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { getCookDetail } from "@/common/api";
export default {
  data() {
    return {
      detail: {},
      is_collect: false
    };
  },
  created() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.$store.commit("changeSelectedId", this.$route.params.id);
    this.getDetail();
  },
  methods: {
    getDetail() {
      let _this = this;
      let data = null;
      for (let index = 0; index < this.$store.state.cook.list.length; index++) {
        if (
          this.$store.state.cook.list[index].id ==
          this.$store.state.cook.selected_id
        ) {
          this.detail = this.$store.state.cook.list[index];
          break;
        }
      }
      if (!data) {
        getCookDetail({ id: this.$store.state.cook.selected_id }, function(
          res
        ) {
					if(!res.data[0]){alert("该内容已不存在"); return} 
          _this.detail = res.data[0];
        });
      }
    },
    doCollect() {
      let id = this.detail.id;
      this.is_collect = !this.is_collect;
      this.$store.dispatch("CookCollect", {
        id: id,
        title: this.detail.title,
        is_collect: this.is_collect
      });
    }
  }
};
</script>

<style scoped>
.title {
  padding: 50px 0 20px;
}
.detail {
  margin-left: 15%;
  padding-right: 20px;
}
.panel {
  margin: 10px 0;
}
.goback {
  display: inline-block;
  padding-left: 20px;
  padding-top: 10px;
}
.doCollect {
  /* display: inline; */
  float: right;
  padding: 4px 12px;
  margin-right: 20px;
  margin-top: 10px;
  border: 1px solid #0638341c;
}
.on {
  background-color: #42b983;
}
</style>