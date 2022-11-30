import React from 'react'
import { Flex } from "@chakra-ui/react"

function ServicesWrapper({ children, backgroundColor }) {
  return (
    <Flex
      maxH={440}
      py={10}
      maxW={310}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor={backgroundColor}
      borderRadius="20px"
    >
      {children}
    </Flex>
  );
}


export default ServicesWrapper
