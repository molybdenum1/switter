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
   },[]) 

   //console.log(posts)


  return (
    <div className="App">
      <AddPost getPosts={getPosts} />
      { posts.map( post => <Post key={post._id} postProps={post} getPosts={getPosts}/>)}
    </div>
  );
}

export default App;
