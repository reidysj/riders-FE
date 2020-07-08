import React from "react";
import { Flex } from "@chakra-ui/core";
import Pillar from "./Pillar";
import { data } from "./data";

const Pillars = () => {
  return (
    <Flex justify="space-around" marginTop="2.5%" lineHeight="1.8">
      {data.map((datum) => {
        return <Pillar datum={datum} />;
      })}
    </Flex>
  );
};

export default Pillars;
