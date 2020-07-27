import React from 'react'
import {Flex, Text, Button, useDisclosure} from '@chakra-ui/core'
import UserTypeModal from './UserTypeModal'
import {userTypeTranslation} from '../utils/userTypeTranslation'
import {registerUser, deletePendingUser} from '../actions/usersActions'
import {connect} from 'react-redux'

// 
const PendingUser = ({user, registerUser, deletePendingUser}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    

    return(
    <>
        <Flex direction='column'>
            <Text>{user.first_name}</Text>
            <Text>{user.last_name}</Text>
            <Text>{user.email}</Text>
            <Text>{user.comments}</Text>
            <Text>{userTypeTranslation(user.type)}</Text>
            <Flex>
                <Button variant='outline' variantColor='green' onClick={onOpen}>Approve</Button>
                <Button variant='outline' variantColor='red' onClick={_ => deletePendingUser(user.id)}>Decline</Button>
            </Flex>
        </Flex>
        <UserTypeModal isOpen={isOpen} onClose={onClose} user={user} registerUser={registerUser}/>
    </>
    )
}

const mStP = state => {
    return {
        isPosting: state.isPosting,
    }
}

export default connect(mStP, {registerUser, deletePendingUser})(PendingUser)