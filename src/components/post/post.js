import React from 'react';
import { Badge} from 'react-bootstrap';
import {AiOutlineLike} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { formatDateTime } from '../../utilities/utilities'; 
import './post.css'

function Post(props){
    let owner = `${props.owner.title} ${props.owner.firstName} ${props.owner.lastName}`;
    let data = formatDateTime(props.publishDate);
    return(
    <div className="post"> 
        <div className="postTitle">
            <div className="ownerImg">
                <img src={`${props.owner.picture}`}/>
            </div>
            <div className="ownerNameData">
                <div>{owner}</div>
                <div className="data">{data}</div>
            </div>
        </div>
        <div className="postMain">
            <p>{props.text}</p>
            <img src={props.image}/> 
        </div>  
        <div className="postLikes"><AiOutlineLike/> {props.likes}</div>
        <div className="postTags">{props.tags.map(t=><Badge key={t}>{t}</Badge>)}</div>
        <div className="postEdit"><Link to={`${props.id}/edit`} className="btn-lg">Edit Post</Link></div> 
    </div>
    )
}

export default Post;