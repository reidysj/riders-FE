import React from 'react'
import {Flex, Text} from '@chakra-ui/core'

const PendingUser = ({user}) => {

    const userTypeTranslation = userType =>{
        if(userType === 'cvr'){
            return 'Cherry Valley Riders Member'
        } else if(userType === 'or'){
            return 'Member of another Riders chapter'
        } else if(userType === 'rl'){
            return 'Cherry Valley Legionaire interested in joining the Riders'
        } else {
            return 'Other'
        }
    }

    return(
        <Flex direction='column'>
            <Text>{user.first_name}</Text>
            <Text>{user.last_name}</Text>
            <Text>{user.email}</Text>
            <Text>{user.comments}</Text>
            <Text>{userTypeTranslation(user.type)}</Text>
        </Flex>
    )
}

export default PendingUser