import React from 'react';
import Post from './Post';
import axios from 'axios';
import AddPost from './AddPost';
import { useEffect, useState } from 'react';

export default function PostPage() {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
        await axios.get('http://localhost:5001/main')
        .then(res => setPosts(res.data));
        } catch (error) {
        console.error(error.message);
        }
    }

    useEffect(() => {
        getPosts();
    },[]) 

  return (
    <div>
       <AddPost getPosts={getPosts} />
        { posts.map( post => <Post key={post._id} postProps={post} getPosts={getPosts}/>)}
    </div>
  )
}
