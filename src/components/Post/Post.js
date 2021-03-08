import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Post = (props) => {
    const { id, title, body } = props.post;
    const cardStyle = {
        width : '30%',
        float: 'left',
        margin: '10px',
        height: '400px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign: 'center'
    }
    const history = useHistory();
    const showPosts = (id) => {
        const url = `posts/${id}`;
        history.push(url);
    }
    return (
        <div>
            <Card style = {cardStyle}>            
                <Card.Body>
                    <Card.Title><h2> Id : {id}</h2></Card.Title>
                    <Card.Subtitle>Title : {title}</Card.Subtitle>
                    <br/>
                    <Card.Text>{body}</Card.Text>
                  
                    <Button onClick ={() => {showPosts(id)}} variant="primary">Show Post & Comments</Button>
          
                </Card.Body>
            </Card>

        </div>
    );
};

export default Post;