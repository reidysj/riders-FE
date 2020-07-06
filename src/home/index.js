import React from "react";
import { useHistory } from "react-router-dom";
import { Flex, Heading, Text, Button } from "@chakra-ui/core";
import bike from "../assets/bike.jpg";

const Home = () => {
  const history = useHistory();

  const handleClick = (loc) => {
    history.push(loc);
  };

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
          <Flex width="100%" align="center" direction="column">
            <Text color="white" fontSize="1.6rem" marginBottom='2.5%'>
              Already set up with an account?
            </Text>
            <Button variantColor="yellow" width="20%" onClick={() => handleClick('/login')}>
              Log In
            </Button>
          </Flex>
          <Flex width="100%" align="center" direction="column">
            <Text color="white" fontSize="1.6rem" marginBottom='2.5%'>
              Need an account?
            </Text>
            <Button variantColor="yellow" width="20%" onClick={() => handleClick('/contact')}>
              Contact Us
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Flex justify='space-around' marginTop='2.5%' lineHeight='1.8'>
        <Flex direction='column' width='20%' align='center'>
        <Heading marginBottom='2.5%'>Thing 1</Heading>
        <Text>A long, long, did I mention long? Fire road that circles Mauna Kea. Counterclockwise the descent is shorter but steeper in spots. Ride to the top and then down and link it directly into Ridegeline (with some double track). Drop in off a shallow rock slab and then whip through a few tight berms. Short and fast, with a few small jumps and some loose rocks to keep you on your toes.</Text>
        </Flex>
        <Flex direction='column' width='20%' align='center' >
        <Heading marginBottom='2.5%'>Thing 2</Heading>
        <Text>Out here you will find the most legal features including log rides, jumps and rock rolls in South Tahoe including the new jumps, berms, rollers and hips TAMBA and SBTS built in 2014. Small tree down between bottom of trail and bridge crossing. Tree is elevated, so not rideable for most. Logs are gone! When combined with Otero Upper, this trail is just crazy fast, flowy, amazingness.</Text>
        </Flex>
        <Flex direction='column' width='20%' align='center'>
        <Heading marginBottom='2.5%'>Thing 3</Heading>
        <Text>The end of the jump line trail there is a fairly steep climb to get to the next section. I've master huck to flat though! 95% dry and/or grippy. It's mostly a hike-a-bike up and then has an advanced all-mountain feel coming down. Or with only moderate climbing involved these trails can keep almost anyone interested for hours.</Text>
        </Flex>
        
    </Flex>
    </>
  );
};

export default Home;
