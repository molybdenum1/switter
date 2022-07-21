import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import classes from '../css/Post.module.css';

export default function Post({postProps, getPosts}) {
  const [isOpened, setIsOpened] = useState(false);
  const [changeMode, setChangeMode] = useState(false);

  const [post, setPost] = useState({
    _id: postProps._id,
    author: postProps.author,
    content: postProps.content,
    title: postProps.title
  })

  function toggle(){
    setIsOpened(wasOpened => !wasOpened);
  }
  function openForm(){
    setChangeMode(wasOpened => !wasOpened);
  }

  async function deletePost() {
    //console.log(post);
    await axios.delete(`http://localhost:5001/main/${post._id}`)
    .then(res=> console.log(res.data));
    getPosts();
  }
  async function updatePost(e) {
    e.preventDefault();
    //console.log(post);
    await axios.put(`http://localhost:5001/main/`, post)
    .then(res=> console.log(res.data));
    setChangeMode(false);
    getPosts();
  }

  return (
    <div className={classes.post}>
      <div 
      onClick={toggle}
      className={classes.post_menu}>
      {
        !isOpened ? <span>...</span>
        :  <div>
          <button onClick={deletePost}>Delete Post</button>
          <button onClick={openForm}>Edit Post</button>
        </div> 
      }
      </div>
     {
       !changeMode ? 
        <div>
          <div className={classes.post_title}>
            {post.title}
          </div>
          <div className={classes.post_content}>
            {post.content}
          </div>
          <div className={classes.post_author}>
            {post.author}
          </div>
        </div>
        :
          <form action=""
          onSubmit={updatePost}>
            <div>
              <label>Author</label>
              <input type="text"
               onChange={ e => setPost({...post, author: e.target.value})}
               value={post.author}/>
            </div>
            <div>
              <label>Title</label>
              <input type="text"
               onChange={ e => setPost({...post, title: e.target.value})}
               value={post.title}/>
            </div>
            <div>
              <label>Content</label>
              <input type="text"
               onChange={ e => setPost({...post, content: e.target.value})}
               value={post.content}/>
            </div>
            <div>
              <button 
              type="submit">Add</button>
            </div>
          </form>
     }
    </div>
  )
}
