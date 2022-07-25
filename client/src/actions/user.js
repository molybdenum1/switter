import axios from 'axios';
import { setUserAC } from '../reducers/userReducer';


export const reg = async (username, password) => {
    try {
        const response = await axios.post(`http://localhost:5001/auth/reg`, {
            username:username,
            password: password
        })
        .then(res => console.log(res.data));
        console.log(response); 
    } catch (error) {
        console.log(error)
    }
}
export const login = (username, password) => {
    return async dispatch => {
        try {
            const response = axios.post(`http://localhost:5001/auth/login`, {
                username: username,
                password: password
            })
            .then(res => console.log(res.data));
            // dispatch(setUserAC(response.data.user));
            // localStorage.setItem('token', response.data.token)
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
}