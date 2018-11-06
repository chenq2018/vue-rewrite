import axios from "axios"

const baseURL = "http://027xin.com:8899/"
axios.defaults.baseURL = baseURL

// 轮播数据
export const getLunboInfo = params => {
    return axios.get("api/getlunbo", params).then( res => res.data )
}
// 新闻数据
export const getNewsList = params => {
    return axios.get('api/getnewslist', params).then( res => res.data )
}
// 新闻详情
export const getNewsInfo = params => {
    return axios.get(`api/getnew/${params.newid}`).then( res => res.data )
}
// 子组件评论
export const getComments = params => {
    return axios.get(`api/getcomments/${params.artid}?pageindex=${params.pageindex}`).then( res => res.data )
}
// 提交评论
export const addComment = params => {
    return axios.post(`api/postcomment/${params.artid}`).then( res => res.data )
}

// export default {
//     getLunboInfo,
//     getNewsList,
//     getNewsInfo
// }