import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import classes from '../css/AddPost.module.css';

export default function Reg() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = e => {
        //  e.preventDefault();
        //   axios.post(`http://localhost:5001/main`, post)
        //   .then(res => console.log(res.data));
        //   getPosts();
      }

  return (
    <div className={classes.addPost}>
            <form action="" 
            method=""
            onSubmit={handleSubmit}
            className={classes.addPostForm}>
                <div className={classes.addPostFormDiv}>
                    <label
                    className={classes.addPostFormLabel}>
                        username
                    </label>
                    <input type="text" 
                        className={classes.addPostFormInput}
                        value={user.username}
                        onChange={ e => setUser({...user, username: e.target.value})}
                        placeholder="username"
                        />
                </div>
                <div className={classes.addPostFormDiv}>
                    <label className={classes.addPostFormLabel}>
                        password
                    </label>
                    <input type="password" 
                    className={classes.addPostFormInput}
                    value={user.password}
                    onChange={ e => setUser({...user, password: e.target.value})}
                    placeholder="password"/>
                </div>
                <div className={classes.addPostFormDivBtn}>
                    <button 
                    className={classes.addPostFormBtn}
                    type="submit">Reg</button>
                </div>
            </form>
        </div>
  )
}
