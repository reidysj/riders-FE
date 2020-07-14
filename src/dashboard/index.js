import React from 'react'
import {connect} from 'react-redux'
import AdminDash from './AdminDash'


const Dashboard = ({user}) => {
    
    if(user.user.user_type === 0){

        return(
            <AdminDash />
        )
    }
}

const mStP = (state) => {
    return{
        user: state.user
    }
}

export default connect(mStP, {})(Dashboard)