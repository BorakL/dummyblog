import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useParams, Redirect } from 'react-router-dom';
import useInputState from '../../hooks/useInputState';
import { createNewPost, editPost, getPost } from '../../services/services';
import Loader from '../loader/loader';
import Owners from './owners';
import Tags from './tags';

function PostForm(){
    const {id} = useParams(); 
    const[redirect,setRedirect]=useState(false)

    const[tags,setTags] = useState([]);
    const[owner,updateOwner,resetOwner] = useInputState("");
    const[text,updateText,resetText] = useInputState("");
    const[imagePath,updateImagePath,resetImagePath] = useInputState("");
    const[likes,updateLikes,resetLikes] = useInputState(0);
    const[title,setTitle] = useState("Create Post");
    const[loader,setLoader] = useState(false); 

    useEffect(()=>{
        if(id){
            setLoader(true);
            getPost(id).then(res=>{ 
                setTags(res.data.tags);
                updateOwner(res.data.owner.id);
                updateText(res.data.text);
                updateImagePath(res.data.image);
                updateLikes(res.data.likes);
                setTitle("Edit Post");
                setLoader(false);
            }).catch(err=>{ 
                setRedirect(true);
            })
        } 
    },[id])
    

    const addTag = (e)=>{
        tags.indexOf(e.target.value)===-1 && setTags([...tags,e.target.value]); 
    }
    const removeTag = (tag)=>{ 
        let filtered = tags.filter(t=>t!==tag) 
        setTags(filtered)
    }
    const selectOwner = (e)=>{
        updateOwner(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let data={
            "text":text,
            "image":imagePath,
            "likes":likes,
            "tags":tags,
            "owner":owner  
          }
        if(id){
            //Edit post
              editPost(data,id).then(res=>{
                  console.log("Edit post: ",res);
                  setRedirect(true);
              }).catch(err=>{
                  console.log(err)
              }) 
        }
        else{
            //Add new post 
            createNewPost(data).then(res=>{
                console.log(res);
                alert("New post successfully created")
            }).catch(err=>{
                console.log(err)
            })
            setTags([]);
            resetOwner();
            resetText();
            resetImagePath();
            resetLikes(); 
        }
        
    }
 
    
    return(
        <>
        {redirect && <Redirect to="/"/>}
        {
            loader ? <Loader/>
            : 
            <Form onSubmit={e=>handleSubmit(e)} style={{maxWidth:"var(--container-max-width)", margin:"auto"}}> 
                <h2>{title}</h2>
                <Form.Group> 
                    <Form.Label>Text</Form.Label>
                    <Form.Control as="textarea" onChange={e=>updateText(e.target.value)} value={text} placeholder={text} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image path</Form.Label>
                    <Form.Control type="text" onChange={e=>updateImagePath(e.target.value)} value={imagePath} placeholder={imagePath} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Likes</Form.Label>
                    <Form.Control type="number" onChange={e=>updateLikes(e.target.value)} placeholder={likes} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>User</Form.Label>
                    <Owners selectOwner={selectOwner} disabled={id}/>
                </Form.Group>
            
                <Tags tags={tags} addTag={addTag} removeTag={removeTag}/>  
                <button className="btn-lg" type="submit">{title}</button>
            </Form> 
        }
        
        </>
    )
}

export default PostForm;