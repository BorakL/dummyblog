import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import Comments from '../../components/comments/comments';
import Loader from '../../components/loader/loader';
import Post from '../../components/post/post';
import { getPost } from '../../services/services';

function PostPage(){ 
    
    const {id} = useParams();
    const[post,setPost]=useState({})
    const[redirect,setRedirect]=useState(false)
    const[loader,setLoader]=useState(false)

    useEffect(()=>{
        setLoader(true)
        getPost(id).then(res=>{ 
            setPost(res.data)
            setLoader(false)
        }).catch(err=>{
            console.log("Error: ",err);
            setRedirect(true);
        })
    },[id])  
    
    return(
        <>
        {redirect && <Redirect to="/"/>}
        {Object.keys(post).length!==0 && !loader ?
        <>
        <Post {...post} styleName={"page"}/>
        <Comments id={id}/>
        </>
        : <Loader/>
        }
        </>
    )
}

export default PostPage;