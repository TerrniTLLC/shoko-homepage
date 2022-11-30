import React from "react";
import {
  VStack,
  Flex
} from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <VStack
      w="100%"
      spacing={2}
      alignItems="center"
      textAlign="center"
    >
      <Flex
        maxW="1240px"
        justifyContent='center'
        alignItems="center"
        mb={10}
        flexDir="column"
      >
        {children}
      </Flex>
    </VStack>
  )
}

export default Layout
