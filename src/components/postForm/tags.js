import React, { useEffect, useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap'; 
import { getTags } from '../../services/services';
import {BsTrash} from 'react-icons/bs'

function Tags(props){ 
    const[allTags,setAllTags]=useState([]);
    useEffect(()=>{
        getTags().then(res=>{
            setAllTags(res.data.data)
        }).catch(err=>{
            console.log(err)
        }) 
    },[])
  
    
    let listItemStyle={
        display:"flex",
        justifyContent:"space-between"
    }
    return(
        <Form.Group>
            <Form.Label>Tags</Form.Label>
            <Form.Select onChange={(e)=>props.addTag(e)}>
                {allTags.map(t=><option key={t} value={t}>{t}</option>)}    
            </Form.Select> 
            <ListGroup>
                {props.tags.map(t=>
                    <ListGroup.Item key={t} style={listItemStyle}>
                         {t} <BsTrash className="icon" onClick={()=>props.removeTag(t)}/>
                    </ListGroup.Item>
                )}
            </ListGroup>
        </Form.Group>
    )
}

export default Tags;