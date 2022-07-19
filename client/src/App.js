import './App.css';
import axios from 'axios';
import Post from './components/Post';
import AddPost from './components/AddPost';
import { useEffect, useState } from 'react';

function App() {
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
    const interval = setInterval(()=> getPosts()
                    , 10000)
     return () => clearInterval(interval)
   },[]) 

   console.log(posts)


  return (
    <div className="App">
      <AddPost />
      { posts.map( post => <Post key={post._id} post={post} />)}
    </div>
  );
}

export default App;
