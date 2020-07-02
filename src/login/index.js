import React, { useState } from "react";
import { Stack, Input, Checkbox, Button } from "@chakra-ui/core";
import {postUser} from '../actions/usersActions';
import {connect} from 'react-redux'

const Login = props => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCheck = () => {
    setInputs({ ...inputs, rememberMe: !inputs.rememberMe });
  };

  const handleSubmit = e => {
      e.preventDefault()
        props.postUser(inputs)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3} width="40%">
        <Input
          type="text"
          name="username"
          value={inputs.username}
          placeholder="Username"
          variant="flushed"
          aria-label="username"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          value={inputs.password}
          placeholder="Password"
          variant="flushed"
          aria-label="password"
          onChange={handleChange}
        />
        <Checkbox
          name="rememberMe"
          isChecked={inputs.rememberMe}
          size="lg"
          onChange={() => handleCheck()}
          variantColor="yellow"
        >
          Remember Me?
        </Checkbox>
        {/* <Button onClick={handleSubmit} variant='outline' variantColor='yellow'>Login</Button> */}
        <Input as={Button} type='submit' variant='outline' borderColor='yellow.500' color='yellow.600' bg='yellow.50' _hover={{bg: 'yellow.100'}}>Log In </Input>
      </Stack>
    </form>
  );
};

const mStP = state => {
    return {
        isPosting: state.isPosting
    }
}

export default connect(
    mStP,
    {postUser}
)(Login)
