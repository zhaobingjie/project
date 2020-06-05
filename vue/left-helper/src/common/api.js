import axios from 'axios'

// export const searchCookBykeyword = params => {
//     return axios.get('http://127.0.0.1/logomaker.com.cn/new/www/trunk/api.php?op=dictionary&act=get',{
//         key : params
//     })
// }
const APP_PATH = 'http://helper.com/';


var HTTP = axios.create({
    baseURL:APP_PATH, //这是基础url
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: [function (data) {
      // Do whatever you want to transform the data
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
})
//搜索菜单
export const searchCookBykeyword = function(params)  {
    return axios.get(APP_PATH+'cook/menu/'+params.search,{
        params : {page:params.page}
    })
}

//菜单详情
export const getCookDetail = function(params,func)  {
    return axios.get(APP_PATH+'cook/detail/'+params.id).then(res=>{
        if(res.status==200){
            func(res.data);
        }else{
            alert('服务器错误');
        }
    })
}

//收藏菜单
export const setCookCollect = function(params)  {
    return HTTP.post('cook/collect',{
        menu_id : params.id,title:params.title,is_collect : params.is_collect
    })
}

//获取收藏菜单
export const getCollect = function(params,func){
    return axios.get(APP_PATH+'cook/collect',{
        params : params
    }).then(res=>{
        if(res.status==200){
            func(res.data);
        }else{
            alert('服务器错误');
        }
    }) 
}

