import React from 'react'

export default function Post({post}) {
  return (
    <div>
      <div>
          {post.title}
      </div>
      <div>
          {post.content}
      </div>
      <div>
          {post.author}
      </div>
    </div>
  )
}
