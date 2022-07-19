import React from 'react';
import classes from './css/Post.module.css';

export default function Post({post}) {
  return (
    <div className={classes.post}>
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
