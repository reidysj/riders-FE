import React from "react";
import { useHistory } from "react-router-dom";
import { Flex, Text, Button } from "@chakra-ui/core";

const BoxItem = ({ action, pushLoc, buttonText }) => {
  const history = useHistory();

  const handleClick = (loc) => {
    history.push(loc);
  };

  return (
    <Flex width="100%" align="center" direction="column">
      <Text color="white" fontSize="1.6rem" marginBottom="2.5%">
        {action}
      </Text>
      <Button
        variantColor="yellow"
        width="20%"
        onClick={() => handleClick(pushLoc)}
      >
        {buttonText}
      </Button>
    </Flex>
  );
};

export default BoxItem;
