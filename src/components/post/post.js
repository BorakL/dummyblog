import React from 'react';
import { Badge, Card, Image} from 'react-bootstrap';
import {AiOutlineLike} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { formatDateTime } from '../../utilities/utilities';
import "./post.css";

function Post(props){
    let owner = `${props.owner.title} ${props.owner.firstName} ${props.owner.lastName}`;
    let data = formatDateTime(props.publishDate);
    return(
    <Card className={`post ${props.styleName ? props.styleName : ""}`} >
        <Card.Body>
            <Card.Title>
                <div className="owner-img"><Image src={`${props.owner.picture}`} roundedCircle  /></div>
                <div className="ownerName-data">
                    <div>{owner}</div>
                    <div className="data">{data}</div>
                </div>
            </Card.Title>
            <div className="post-main">
                <Card.Text>{props.text}</Card.Text>
                <Card.Img src={props.image} /> 
            </div>       
            <div className="post-likes"><AiOutlineLike/> {props.likes}</div>
            <div className="post-tags">{props.tags.map(t=><Badge key={t}>{t}</Badge>)}</div>
            <div className="post-edit"><Link to={`${props.id}/edit`} className="btn-lg">Edit Post</Link></div>
        </Card.Body>
    </Card>
    )
}

export default Post;