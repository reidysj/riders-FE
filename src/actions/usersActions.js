import axios from 'axios'

export const POST_USER = 'POST_USER'
export const SET_USER = 'SET_USER'
export const SET_ERROR = 'SET_ERROR'

export const postUser = userData => dispatch => {
    dispatch({type:POST_USER })
    axios.post('http://localhost:7000/auth/login', userData)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        dispatch({type: SET_USER, payload: res.data})
    })
    .catch(err => {
        dispatch({type: SET_ERROR, payload: err})
    })
}