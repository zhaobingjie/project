import axios from 'axios'

// export const searchCookBykeyword = params => {
//     return axios.get('http://127.0.0.1/logomaker.com.cn/new/www/trunk/api.php?op=dictionary&act=get',{
//         key : params
//     })
// }
//搜索菜单
export const searchCookBykeyword = function(params)  {
    //http://127.0.0.1/logomaker.com.cn/new/www/trunk/api.php?op=zbj&act=get_menu_by_keyword&keyword=%E8%A5%BF%E7%BA%A2%E6%9F%BF&page=1
    return axios.get('http://127.0.0.1/logomaker.com.cn/new/www/trunk/api.php?op=zbj&act=get_menu_by_keyword',{
        params : {keyword : params.search,page:params.page}
    })
}
//收藏菜单
export const setCookCollect = function(params)  {
    return axios.get('http://127.0.0.1/logomaker.com.cn/new/www/trunk/api.php?op=zbj&act=collect_cook',{
        params : {id : params.id,title:params.title,is_collect : params.is_collect}
    })
}
//菜单详情
export const getCookDetail = function(params,func)  {
    return axios.get('http://127.0.0.1/logomaker.com.cn/new/www/trunk/api.php?op=zbj&act=cook_detail',{
        params : {id : params.id}
    }).then(res=>{
        if(res.status==200){
            func(res.data);
        }else{
            alert('服务器错误');
        }
    })
}
export const getCollect = function(params,func){
    return axios.get('http://127.0.0.1/logomaker.com.cn/new/www/trunk/api.php?op=zbj&act=get_collect',{
        params : params
    }).then(res=>{
        if(res.status==200){
            func(res.data);
        }else{
            alert('服务器错误');
        }
    }) 
}

