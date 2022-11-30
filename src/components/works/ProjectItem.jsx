import React from 'react';
import {
  Box,
  Heading,
  Link,
  Text,
  Container,
} from '@chakra-ui/react';

import PashaImage from "../../images/StaffCats/shoshi.png"

import ProjectImage from './components/project-image';
import BlogAuthor from './components/blog-author';
import ReadMore from './components/read-more';




const ProjectItem = (props) => {
  return (
    <Container>
      <Box
        marginTop={{ base: '8', sm: '3' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          flex="1"
          position="relative"
          alignItems="center"
        >
          <Box
            zIndex="2"
            overflow="hidden"
          >
            <ProjectImage href={props.src} src={props.image} />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          textAlign="start"
          justifyContent="center"
          marginLeft={{ base: '0', sm: '5' }}
          marginTop={{ base: '2', sm: '4' }}
        >
          {props.children}
          <Heading mt={4} textAlign={{ base: "center", md: "start" }}>
            <Link
              fontWeight="bold"
              fontSize={{ base: "lg", md: "xl" }}
              color="black"
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              {props.title}
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color='black'
            fontSize={{ base: "15px", md: "18px" }}
          >
            <ReadMore text={props.info} />
          </Text>
          <BlogAuthor name="Pasha" role="Tech Lead" image={PashaImage} />
        </Box>

      </Box>
    </Container>
  );
};

export default ProjectItem;
