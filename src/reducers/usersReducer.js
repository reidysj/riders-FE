import {
    POST_USER,
    SET_USER,
    SET_ERROR,
    FETCH_PENDING_USERS,
    SET_PENDING_USERS
} from '../actions/usersActions'

export const initialState = {
    user: '',
    isPosting: false,
    isFetching: false,
    error: '',
    pendingUsers: []
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
                error: '',
                user: action.payload
            }
        case SET_ERROR :
            return{
                ...state,
                isPosting: false,
                error: action.payload
            }
        case FETCH_PENDING_USERS:
            return{
                ...state,
                isFetching: true
            }
        case SET_PENDING_USERS:
            return{
                ...state,
                isFetching: false,
                error: '',
                pendingUsers: action.payload
            }
        default :
            return state
    }
}