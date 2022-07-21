import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PostPage from './components/PostPage/PostPage';

function App() {
   //console.log(posts)

  return (
    <Router>
      <div className="App">
        <div>Navbar</div>
      
        <Routes>
          <Route path='/' element={<PostPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/reg' element={<Reg/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
