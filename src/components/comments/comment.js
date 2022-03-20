import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { formatDateTime } from '../../utilities/utilities';

function Comment(props){
    return(
        <Row className="comment">
            <Card> 
                <Card.Body> 
                    <Card.Title>{props.comment.owner.firstName} 
                        <span className="date">{formatDateTime(props.comment.publishDate)}</span>
                    </Card.Title> 
                    <Card.Text>{props.comment.message}</Card.Text>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default Comment;
