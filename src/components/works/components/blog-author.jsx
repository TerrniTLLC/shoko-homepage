import React from 'react'
import { HStack, Image, Text, Flex } from '@chakra-ui/react';

const BlogAuthor = (props) => {
  return (
    <HStack
      color="black"
      mt={5}
      spacing="2"
      display="flex"
      alignItems="center"
    >
      <Image
        borderRadius="full"
        width="45px"
        src={props.image}
        alt={`Avatar of ${props.name}`}
      />
      <Flex fontSize={{ base: "14px", sm: "16px" }} flexDir="column"  >
        <Text
          fontWeight="bold"
        >
          {props.name}
        </Text>
        <Text
          fontWeight="medium"
        >
          {props.role}
        </Text>
      </Flex>
    </HStack>
  );
};


export default BlogAuthor
