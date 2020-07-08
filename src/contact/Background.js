import React from "react";
import { Box, Image } from "@chakra-ui/core";
import bike from "../assets/contact.jpg";

const Background = () => {
  return (
    <Box background="black" width="60vw">
      <Image src={bike} alt="" opacity=".2" height="100vh" />
    </Box>
  );
};
export default Background;
