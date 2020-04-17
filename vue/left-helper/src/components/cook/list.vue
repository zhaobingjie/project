<template>
  <div>
    <wv-search-bar class="top_search"
      :autofocus="false"
			v-model="search"
      @search="onSearch"
      @cancel="onCancel"
    />
		<p class="hr-44"></p>
    <wv-panel :title="value" v-if="list.length>0">
      <wv-media-box v-for="(item,index) in list" :key="index" :title="item.title" :thumb="item.albums[0]" :description="item.imtro" :to="'/cookbook/detail/'+item.id"></wv-media-box>
      <!-- <wv-media-box :thumb="thumb" title="标题二" :description="description" to="/"></wv-media-box> -->

      <wv-cell title="查看更多" is-link slot="ft" @click="getMore"></wv-cell>
    </wv-panel>
  </div>
</template>

<script>
import {searchCookBykeyword} from '@/common/api';
import { Toast } from 'we-vue'
export default {
  data() {
    return {
			search : '',
    };
  },
  created() {
		
  },
  computed: {
    value(){
			return this.$store.state.cook.search
		},
		list : {
			get : function(){
				return this.$store.state.cook.list
			},
			set :function(){
			}
		},
  },

  methods: {
		getMore(){
			this.$store.dispatch("getMoreCookbook");
		},
    onSearch(val) {
      this.$store.commit("changeSearch", this.search);
      this.$store.dispatch("searchCookbook");
    },

    onCancel() {
      // 自定义取消事件处理
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  margin-top: 20%;
  margin-bottom: 20px;
}
.top_search{
	position: fixed;
	z-index: 500;
	top: 0;
	width: 100%;
	background-color: #f7f7fa;
}
.hr-44{height: 45px;}
</style>
