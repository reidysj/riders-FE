import React from "react";
import bike from "../assets/login.jpg";
import { Box, Image } from "@chakra-ui/core";

const Background = () => {
  return (
    <Box bg="black">
      <Image src={bike} alt="" height="100vh" width="auto" opacity=".2" />
    </Box>
  );
};

export default Background;
