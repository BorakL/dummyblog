import axios from 'axios';

const config = {'headers':{'app-id':'616d98ada2239f6f8801088d'}};

export const getPosts = (page,limit)=>{
    return axios.get(`https://dummyapi.io/data/v1/post?page=${page}&limit=${limit}`, config);
}

export const getComments = (postId)=>{
    return axios.get(`https://dummyapi.io/data/v1/post/${postId}/comment`, config);
}

export const getPost = (postId)=>{
    return axios.get(`https://dummyapi.io/data/v1/post/${postId}/`, config)
}

export const getTags = ()=>{
    return axios.get(`https://dummyapi.io/data/v1/tag`,config);
}

export const getUsers = ()=>{
    return axios.get(`https://dummyapi.io/data/v1/user`,config);
}

export const createNewPost = (data)=>{
    return axios.post(`https://dummyapi.io/data/v1/post/create/`, data, config)
}

export const createComment = (data)=>{
    return axios.post(`https://dummyapi.io/data/v1/comment/create`, data, config)
}

export const editPost = (data,postId)=>{
    return axios.put(`https://dummyapi.io/data/v1/post/${postId}`, data, config)
}

