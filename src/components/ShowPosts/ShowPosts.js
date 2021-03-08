import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import {
    Link
  } from "react-router-dom";
import Comments from '../Comments/Comments';

const ShowPosts = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const cardStyle = {
        float: 'left',
        margin: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign: 'center'
    }

    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments/?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [id])
    return (
        <div style = {cardStyle}>
            <Card.Body>
                    <Card.Title><h2>This is post detail : {id}</h2></Card.Title>
                    <Card.Subtitle>User posted : {post.id}</Card.Subtitle>
                    <br/>
                    <Card.Text> Title : {post.title}</Card.Text>
                    <Card.Text> Post Body : {post.body}</Card.Text>
                    <Card.Text> Total Comments : {comments.length}</Card.Text>
                  
                    <Link to="/home"><Button>  Back to Home </Button> </Link>
                    {
                        comments.map(comment => <Comments comment ={comment}></Comments>)
                    }
                </Card.Body>
        </div>
    );
};

export default ShowPosts;