import {
    POST_USER,
    SET_USER,
    SET_ERROR
} from '../actions/usersActions'

export const initialState = {
    user: '',
    isPosting: false,
    error: ''
}

export const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case POST_USER :
            return{
                ...state,
                isPosting: true
            }
        case SET_USER :
            return{
                ...state,
                isPosting: false,
                user: action.payload
            }
        case SET_ERROR :
            return{
                ...state,
                isPosting: false,
                error: action.payload
            }
        default :
            return state
    }
}