import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import classes from '../css/AddPost.module.css';

export default function AddPost({getPosts={getPosts}}) {
    const [post, setPost] = useState({
        author: '',
        title: '',
        content: ''
    })

    const handleSubmit = e => {
      //  e.preventDefault();
        axios.post(`http://localhost:5001/main`, post)
        .then(res => console.log(res.data));
        getPosts();
    }

    return (
        <div className={classes.addPost}>
            <form action="" 
            method=""
            onSubmit={handleSubmit}
            className={classes.addPostForm}>
                <div className={classes.addPostFormDiv}>
                    <label
                    className={classes.addPostFormLabel}>
                        author
                    </label>
                    <input type="text" 
                        className={classes.addPostFormInput}
                        value={post.author}
                        onChange={ e => setPost({...post, author: e.target.value})}
                        placeholder="author"
                        />
                </div>
                <div className={classes.addPostFormDiv}>
                    <label className={classes.addPostFormLabel}>
                        title
                    </label>
                    <input type="text" 
                    className={classes.addPostFormInput}
                    value={post.title}
                    onChange={ e => setPost({...post, title: e.target.value})}
                    placeholder="title"/>
                </div>
                <div className={classes.addPostFormDiv}>
                    <label
                    className={classes.addPostFormLabel}>
                        content
                    </label>
                    <input type="text"
                    className={classes.addPostFormInput}
                    value={post.content}
                    onChange={ e => setPost({...post, content: e.target.value})} 
                    placeholder="content"/>
                </div>
                <div className={classes.addPostFormDivBtn}>
                    <button 
                    className={classes.addPostFormBtn}
                    type="submit">Add</button>
                </div>
            </form>
        </div>
  )
}
