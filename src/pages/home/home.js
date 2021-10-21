import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Post from '../../components/post/post';
import { getPosts } from '../../services/services';

function Home(){
    const[posts,setPosts] = useState([]);
    const[page,setPage] = useState(0);
    const[limit,setLimit] = useState(12);
    const[total,setTotal] = useState(1);  

    useEffect(()=>{
        getPosts(page,limit).then(res=>{
            setPosts(res.data.data);
            setPage(res.data.page);
            setTotal(res.data.total);
            setLimit(res.data.limit); 
        })
    },[page,limit]) 

    const lastPage = Math.ceil(total/limit)

    const styleList={
        padding:"3em 0",
        display:"flex",
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent:"center",
        gap:"3em"
    }
    const styleLink={
        padding:"2em 0 1em",
        display:"flex",
        justifyContent:"center",
        fontSize:"1.5em", 
    }

    return(
    <>
    <div style={styleLink}>
        <Link to="/create" className="btn-lg">Add New Post</Link> 
    </div>
    <div style={styleList}>
        {posts.map(post=>
             <Link to={`/${post.id}`} key={post.id} > <Post key={post.id} {...post}/> </Link> 
        )} 
    </div>
    <div style={styleLink}>
        <Pagination>
            <Pagination.First onClick={()=>setPage(0)}/>
            <Pagination.Prev onClick={()=>setPage(page-1)} disabled={page===0 ? true : false}/>
            <Pagination.Item active>{page+1}</Pagination.Item>
            <Pagination.Next onClick={()=>setPage(page+1)} disabled={page===lastPage ? true : false}/>
            <Pagination.Last onClick={()=>setPage(lastPage-1)}/>    
        </Pagination> 
    </div>
    </>
    )
}

export default Home