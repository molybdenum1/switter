import './App.css';
import axios from 'axios';
import Post from './components/Post';
import AddPost from './components/AddPost';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

   useEffect(() => {
     axios.get('http://localhost:5001/main')
     .then(res => setPosts(res.data))
   },[]) 

   console.log(posts)
  return (
    <div className="App">
      <AddPost/>
      { posts.map( post => <Post key={post.id} post={post} />)}
    </div>
  );
}

export default App;
