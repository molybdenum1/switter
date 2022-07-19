import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import classes from './css/Post.module.css';

export default function Post({post}) {
  const [isOpened, setIsOpened] = useState(false)

  function toggle(){
    setIsOpened(wasOpened => !wasOpened);
  }

  async function deletePost() {
    console.log(post);
    await axios.delete(`http://localhost:5001/main/${post._id}`)
    .then(res=> console.log(res.data));
  }

  return (
    <div className={classes.post}>
      <div 
      onClick={toggle}
      className={classes.post_menu}>
      {
        !isOpened ? <span>...</span>
        :  <div>
          <button onClick={deletePost}>Delete</button>
        </div> 
      }
      </div>
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
  )
}
