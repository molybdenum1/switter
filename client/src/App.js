import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import PostPage from './components/PostPage/PostPage';
import Login from './components/AuthPage/Login';
import Reg from './components/AuthPage/Reg';
import { useSelector } from 'react-redux';

function App() {
   //console.log(posts)
  const isAuth = useSelector(state => state.user.isAuth);
  
  return (
    <Router>
      <div className="App">
        <div>
          <nav>
            {
              !isAuth? 
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
                <li>
                  <Link to='/reg'>Registration</Link>
                </li>
              </ul>
              :
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/login'>Logout</Link>
                </li>
              </ul>
            }
          </nav>
        </div>
      
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
