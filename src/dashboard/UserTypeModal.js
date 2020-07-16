import React, {useState, useEffect} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    RadioGroup,
    FormLabel,
    Button,
    Radio,
    FormControl
  } from "@chakra-ui/core";


const UserTypeModal = ({isOpen, onClose, user, registerUser}) => {
    const parsed = `${user.last_name.toLowerCase()}${user.first_name.substring(0, 3).toLowerCase()}`
    const [userData, setUserData] = useState({
        username: parsed,
        password: parsed,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        user_type: 9,
    })

    const handleChange = e => {
        setUserData({...userData, user_type: e.target.value})
        console.log(userData)
    }

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>What Type of User is This?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl as='fieldset'>
                        <FormLabel>Select User Type:</FormLabel>
                        <RadioGroup onChange={handleChange}>
                            <Radio value='9'>Limited Priveleges</Radio>
                            <Radio value='0'>Admin Priveleges: User can add new users.</Radio>
                        </RadioGroup>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={_ => registerUser(userData)}>Submit</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default UserTypeModal