import React from 'react'
import {Flex} from '@chakra-ui/core'
import PendingUser from './PendingUser'

const PendingUsers = ({users}) => {
    
    return(
        <Flex>
            {users.map(user => {
                return(
                    <PendingUser key={user.id} user={user}/>
                )
            })}
        </Flex>
    )
}

export default PendingUsers