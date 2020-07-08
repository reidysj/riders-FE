import React from "react";
import { Flex, Heading } from "@chakra-ui/core";
import Pillars from "./Pillars";
import BoxItem from "./BoxItem";
import bike from "../assets/bike.jpg";

const Home = () => {
  return (
    <>
      <Flex
        backgroundImage={`url(${bike})`}
        height="75vh"
        width="100%"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Flex height="100%" width="100%" backgroundColor="rgba(0,0,0,0.8)">
          <Flex
            width="30%"
            height="60%"
            direction="column"
            backgroundColor="rgba(0,0,0,0.7)"
            align="center"
            justify="space-evenly"
            marginLeft="60%"
            marginTop="10vh"
          >
            <Heading as="h1" fontSize="2.9rem" color="white">
              Cherry Valley Riders
            </Heading>
            <BoxItem
              action="Already set up with an account?"
              pushLoc="/login"
              buttonText="Login"
            />
            <BoxItem
              action="Don't have an account?"
              pushLoc="/contact"
              buttonText="Contact Us"
            />
          </Flex>
        </Flex>
      </Flex>
      <Pillars />
    </>
  );
};

export default Home;
