import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { getPost } from '../../services/services';
import {GrClose} from 'react-icons/gr';
import './postPage.css';

function PostPage(data=null){  
    console.log("closePost",data.closePost)
    const {id} = useParams();
    const[post,setPost]=useState(false)
    const[redirect,setRedirect]=useState(false)  
  
    useEffect(()=>{ 
        if(!Object.keys(data).length){
            getPost(id).then(res=>{ 
                setPost(res.data) 
            }).catch(err=>{
                console.log("Error: ",err);
                setRedirect(true);
            })
        }
        else{
            console.log("ddddata",data) 
            setPost(data.post)
        } 
    },[id,data])  
    
    return(
        <div className='postModal'>
        {redirect && <Redirect to="/"/>} 
        {
            post &&
            <div>  
                <img src={post.image}/>    
                {/* {Object.keys(data).length ? <button onClick={()=>{data.closePost()}}>Close post</button> : <></>} */}
                {Object.keys(data).length ? <span onClick={()=>{data.closePost()}}><GrClose/></span> : <></>}
            </div>
        }
        </div>
    )
}

export default PostPage;