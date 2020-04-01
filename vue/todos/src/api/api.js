import axios from 'axios'; //导入axios模块
export const getTodoList = params => { //demo ： 封装一个函数，名为getTodoList
  return axios.get(`/todo/list`, { // 请求路径 ‘/todo/list’
    params: params
  });
};
export const addTodo = params => { //demo 
  return axios.post(`/todo/addTodo`, params).then(res => res.data);
};
export const getTodoById = params => {//根据id获取todo列表
  return axios.get(`/todo/listId`,{
    params : params
  })
}
export const addRecord = params => {
  return axios.post(`/todo/addRecord`,params).then(res=>res.data);
}

export const editRecord = params => {
  return axios.post(`/todo/editRecord`, params).then(res => res.data);
};

export const editTodo = params => {
  return axios.post(`/todo/editTodo`, params).then(res => res.data);
};