<template>
  <div>
    <h2 class="hi">今天想做点什么 ?</h2>
    <wv-search-bar
      :autofocus="false"
      v-model="value"
      :result="filterResult"
      @search="onSearch"
      @cancel="onCancel"
    />
    <div class="my_collect" v-if="historyTags.length>0">
      <h2>历史标签</h2>
      <p>
        <span class="tag" v-for="item in historyTags" @click="onSearchHisotry(item)">{{item}}</span>
      </p>
    </div>
    <div class="my_collect">
      <h2>我的收藏</h2>
      <ul>
        <ol v-for="item in collect" :id="item.id">
          <router-link :to="'/cookbook/detail/'+item.id">{{item.title}}</router-link>
        </ol>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCollect } from "@/common/api";
import { util } from "@/common/util";
export default {
  data() {
    return {
      value: "",
      collect: [],
      historyTagsKey: "historyTags",
      historyTagsLimit: 10,
      historyTags: [],
      defaultResult: [
        //   'Apple',
        //   'Banana',
        //   'Orange',
        //   'Durian',
        //   'Lemon',
        //   'Peach',
        //   'Cherry',
        //   'Berry',
        //   'Core',
        //   'Fig',
        //   'Haw',
        //   'Melon',
        //   'Plum',
        //   'Pear',
        //   'Peanut',
        //   'Other'
      ]
    };
  },
  created() {
    let _this = this;
    getCollect({}, res => {
      _this.collect = res.data;
    });
    this.historyTags = JSON.parse(localStorage.getItem(this.historyTagsKey));
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(value =>
        new RegExp(this.value, "i").test(value)
      );
    }
  },

  methods: {
    onSearch(val) {
      let historyTags = JSON.parse(localStorage.getItem(this.historyTagsKey)) || [];
      if (!util.in_array(this.value, historyTags)) {
        if (historyTags.length >= this.historyTagsLimit) historyTags.pop();
        historyTags.unshift(this.value);
        localStorage.setItem(this.historyTagsKey, JSON.stringify(historyTags));
      }

      this.$store.commit("changeSearch", this.value);
      this.$store.dispatch("searchCookbook");
      this.$router.push({ name: "cookList" });
    },

    onCancel() {
      // 自定义取消事件处理
    },
    onSearchHisotry(value){
      this.$store.commit("changeSearch", value);
      this.$store.dispatch("searchCookbook");
      this.$router.push({ name: "cookList" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  margin-top: 20%;
  margin-bottom: 20px;
  text-align: center;
}
.tag {
  display: inline-block;
  padding: 2px 10px;
  border: 1px solid #888888;
  text-align: center;
  margin: 5px 10px 5px 0px;
}
.my_collect {
  margin-left: 12%;
  margin-top: 50px;
}
</style>
