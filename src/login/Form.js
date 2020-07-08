import React, { useState } from "react";
import {
  Stack,
  Input,
  Checkbox,
  Button,
  Flex,
  Heading,
  Link,
  Icon,
} from "@chakra-ui/core";
import { Link as RRLink } from "react-router-dom";
import { postUser } from "../actions/usersActions";
import { connect } from "react-redux";

const Form = (props) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postUser(inputs);
  };

  return (
    <Flex width="35vw" align="center" justify="center">
      <form onSubmit={handleSubmit} style={{ width: "70%" }}>
        <Stack spacing={10}>
          <Heading textAlign="center">Login</Heading>
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
          <Button type="submit" variantColor="yellow">
            Log In
          </Button>
          <Link as={RRLink} to="/contact" textAlign="center" color="blue.300">
            Don't have an account? Contact Us.
            <Icon name="arrow-forward" />
          </Link>
        </Stack>
      </form>
    </Flex>
  );
};

const mStP = (state) => {
  return {
    isPosting: state.isPosting,
  };
};

export default connect(mStP, { postUser })(Form);
