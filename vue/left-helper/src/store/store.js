import Vue from 'vue'
import Vuex from 'vuex';
import { searchCookBykeyword,setCookCollect } from '@/common/api';
import { Toast } from 'we-vue'
Vue.use(Vuex);

const state = {
	cook: {
		search: '',
		page: 1,
		pageSize: 10,
		selected_id: 0,
		list: []
	}
}
const mutations = {
	//菜谱搜索词
	changeSearch(state, searchContent) {
		state.cook.search = searchContent;
	},
	//菜谱页码翻页
	changePage(state, page) {
		state.cook.page++;
	},
	//重置页码
	resetPage(state) {
		state.cook.page = 1;
	},
	//选中菜谱id
	changeSelectedId(state, selected_id) {
		state.cook.selected_id = selected_id;
	},
	//菜谱列表
	changeCookbookList(state, list) {
		state.cook.list = list;
	},
	//菜谱添加下一页列表
	getMoreCookbook(state, list) {
		state.cook.list = state.cook.list.concat(list);
	},
}
const actions = {
	//关键词搜索菜谱
	searchCookbook(state, params) {
		state.commit('resetPage');
		Toast.loading({duration: 1000000,message: 'laoding'});
		return new Promise((resolve) => {
			searchCookBykeyword(state.state.cook).then(function (res) {
				Toast.close();
				if (res.status == 200) {
					if (res.data.status == 0) {
						state.commit('changeCookbookList', res.data.data);
					} else if(res.data.status==9002){
						alert('没有这个菜,换个词试试吧')
					}else {
						alert(res.data.msg)
					}
				} else {
					alert('请求链接异常');
				}
				resolve();
			})
		})
	},
	//菜谱翻页
	getMoreCookbook(state, params) {
		state.commit('changePage');
		Toast.loading({duration: 1000000,message: 'laoding'});
		return new Promise((resolve) => {
			searchCookBykeyword(state.state.cook).then(function (res) {
				Toast.close();
				if (res.status == 200) {
					if (res.data.status == 0) {
						state.commit('getMoreCookbook', res.data.data);
					} else if(res.data.status==9002){
						alert('没了,就这些了...');
					}else{
						alert(res.data.msg)
					}
				}else{
					alert('请求链接异常');
				}
				resolve();
			})
		})
	},
	//菜谱收藏
	CookCollect(state,params){
		return new Promise((resolve) => {
			setCookCollect(params).then(function (res) {
				if (res.status == 200) {
					if (res.data.status == 0) {
						Toast.success('操作成功');
					}
				}else{
					alert('请求链接异常');
				}
				resolve();
			})
		})
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
});