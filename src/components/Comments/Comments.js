import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card} from 'react-bootstrap';


const Comments = (props) => {
    const {id, name, email, body} = props.comment
    const cardStyle = {
        float: 'left',
        margin: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign: 'center'
    }
    return (
        <div style = {cardStyle}>
            <Card.Body>
                    <Card.Title><h2>Comment of ID : {id}</h2></Card.Title>
                    <Card.Subtitle>Name: {name}</Card.Subtitle>
                    <br/>
                    <Card.Text> Email : {email}</Card.Text>
                    <Card.Text> Post Body : {body}</Card.Text>            
           
                </Card.Body>

        </div>
    );
};

export default Comments;