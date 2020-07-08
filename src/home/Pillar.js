import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/core";

const Pillar = ({ datum }) => {
  return (
    <Flex direction="column" width="20%" align="center">
      <Heading marginBottom="2.5%">{datum.title}</Heading>
      <Text>{datum.text}</Text>
    </Flex>
  );
};

export default Pillar;
