import React from "react";
import { Flex } from "@chakra-ui/react";

const IconsBox = ({ children }) => {
  return (
    <Flex display="flex" flexWrap="wrap" gap={4}>
      {children}
    </Flex>
  );
};
export default IconsBox;
