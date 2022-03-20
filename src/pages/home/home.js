import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Loader from '../../components/loader/loader';
import Post from '../../components/post/post';
import { getPosts } from '../../services/services';
import PostPage from '../post/postPage';
import './home.css'


function Home(){
    const[posts,setPosts] = useState([]);
    const[page,setPage] = useState(0);
    const[limit,setLimit] = useState(12);
    const[total,setTotal] = useState(1);  
    const[loader,setLoader] = useState(false); 
    const[post,setPost] = useState(null);
    const[isPostShow,setIsPostShow] = useState(false);
    let history = useHistory();
    const[scrollPosition,setScrollPosition] = useState(0);

    useEffect(()=>{
        setLoader(true);
        getPosts(page,limit).then(res=>{
            setPosts(res.data.data);
            setPage(res.data.page);
            setTotal(res.data.total);
            setLimit(res.data.limit); 
            setLoader(false)
        })
    },[page,limit]) 

    useEffect(() => {
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener('popstate', closePost);
        return () => {
          window.removeEventListener('popstate', closePost);  
        };
      }, []);

    const lastPage = Math.ceil(total/limit)
 
    const showPost = (post)=>{ 
        if(!isPostShow){
            setPost(post); 
            setIsPostShow(true);
            setScrollPosition(window.scrollY)
            window.history.pushState(null, null, post.id);
        } 
    }
    const closePost = ()=>{
        setPost(null);
        setIsPostShow(false);
        isPostShow && window.history.back();
        window.scrollTo(0,scrollPosition)
    } 
 
    return(
    <>
    {
        loader ? <Loader/> :
        <>
        <div className={`container ${isPostShow && "hideContainer"}`}>
            <div>
                <Link to="/create" className="btn-lg">Add New Post</Link> 
            </div>
            <div className="postList">
                {posts.map(post=>
                    <div key={post.id} onClick={()=>{showPost(post)}}>
                        <Post key={post.id} {...post}/> 
                    </div> 
                )} 
            </div>
            <div className="pagination">
                <Pagination>
                    <Pagination.First onClick={()=>setPage(0)}/>
                    <Pagination.Prev onClick={()=>setPage(page-1)} disabled={page===0 ? true : false}/>
                    <Pagination.Item active>{page+1}</Pagination.Item>
                    <Pagination.Next onClick={()=>setPage(page+1)} disabled={page===lastPage ? true : false}/>
                    <Pagination.Last onClick={()=>setPage(lastPage-1)}/>    
                </Pagination> 
            </div>
        </div>
        <div>
            {post && <PostPage post={post} closePost={closePost}/> } 
        </div>
        </>
    }
    </>
    )
}

export default Home