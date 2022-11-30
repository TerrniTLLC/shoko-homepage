import { HStack, Tag } from '@chakra-ui/react';
import React from 'react'

const BlogTools = (props) => {
  return (
    <HStack
      flexWrap="wrap"
      spacing={2}
      justifyContent={{ base: "center", sm: "start" }}
    >
      {props.tools.map((value, key) => {
        return (
          <Tag borderRadius="20px" size={'lg'} my={1} p={2} variant="outline" alignItems='center' justifyContent='center' colorScheme="gray" key={key}>
            {value.icon}
          </Tag>
        );
      })}
    </HStack>
  );
};


export default BlogTools

