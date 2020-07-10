import React from 'react'
import {connect} from 'react-redux'


const Dashboard = ({user}) => {
    console.log(user)
    return(
        <h1>{user.user.username}</h1>
    )
}

const mStP = (state) => {
    console.log(state)
    return{
        user: state.user
    }
}

export default connect(mStP, {})(Dashboard)