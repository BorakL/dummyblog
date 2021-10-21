import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap'; 
import { createComment, getComments } from '../../services/services'; 
import Owners from '../postForm/owners';
import Comment from './comment.js';
import "./comments.css";

function Comments(props){
    const[comments,setComments] = useState([]);
    const[total,setTotal] = useState(0);
    const[owner,setOwner] = useState("");
    const[message,setMessage] = useState("");

    useEffect(()=>{
        console.log(props.id)
        getComments(props.id).then(res=>{
            setComments(res.data.data);
            setTotal(res.data.total);
        })
    },[props.id])

    const handleSubmit = (e)=>{
        e.preventDefault();
        //funkcija za slanje komentara
        let data = {
            message: message,
            owner: owner,
            post: props.id
        }
        createComment(data).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        console.log("handle submit: ",data)
    }

    const selectOwner = (e)=>{
        setOwner(e.target.value);
    }
    
 
    return( 
        <div className="comments">
        <h2>Leave Comment</h2>
        <Form onSubmit={(e)=>handleSubmit(e)}> 
            <Owners selectOwner={selectOwner}/>
            <FloatingLabel controlId="floatingTextarea2" label="Comment">
                <Form.Control as="textarea" style={{ height: '100px' }} onChange={e=>setMessage(e.target.value)}/>
            </FloatingLabel> 
            <Button type="submit">Add Comment</Button>
        </Form> 
        <h2>Comments ({total})</h2>
        {comments.map(c=><Comment comment={c} key={c.id}/>)}
        </div>
    )
}

export default Comments;