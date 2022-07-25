const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

const defaultState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = defaultState, action){
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: false
            }
        default:
            return state;
    }
}

export const setUserAC = user => ({type: SET_USER, payload: user});
export const logoutAC = () => ({type: LOGOUT});