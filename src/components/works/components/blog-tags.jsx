import { Badge, HStack } from '@chakra-ui/react';
import React from 'react'

const BlogTags = (props) => {
  return (
    <HStack
      flexWrap="wrap"
      justifyContent='start'
      marginTop={props.marginTop}
    >
      {props.tags.map((value, key) => {
        return (
          <Badge size={'md'} my={1} variant="solid" colorScheme={value.scheme} key={key}>
            {value.type}
          </Badge>
        );
      })}
    </HStack>
  );
};


export default BlogTags 
