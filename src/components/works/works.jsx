import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import AnimHeading from "../atoms/anim-heading/AnimHeading";
import "./works.css"
import WorksTabs from "./components/tabs";
import Layout from "../atoms/layout/layout";


export default function Works() {
  return (
    <Layout>
      <Box
        pt={12}
        my={8}
      >
        <VStack spacing={2} textAlign="center" >
          <AnimHeading color="black" custom={2}>
            Projects
          </AnimHeading>
        </VStack>
        <WorksTabs />
      </Box>
    </Layout>
  );
}

