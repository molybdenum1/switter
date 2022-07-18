import React from 'react'
import { useState } from 'react'

export default function AddPost() {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <div>
            <form action="" method="post">
                <label>
                    author
                    <input type="text" 
                    placeholder="author"
                    />
                </label>
                <label>
                    title
                    <input type="text" placeholder="title"/>
                </label>
                <label>
                    content
                    <input type="text" placeholder="content"/>
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
  )
}
