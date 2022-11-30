import React from "react";
import {
  Stack,
  Box,
} from "@chakra-ui/react";

import "./team.css";

import Card from "./../atoms/card/card.jsx";

import AnimHeading from "../atoms/anim-heading/AnimHeading";
import { teamInfo } from "./data";
import Layout from "../atoms/layout/layout";
import AnimText from "../atoms/anim-text/AnimText";


function Team() {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent='center'
      alignItems="center"
      h={{ sm: "auto", base: "100%", md: "100%" }}
      py={8}
      mt={8}
      color="black"
    >
      <Layout>
        <AnimText custom={2}
          fontWeight="bold"
        >
          We are ordinary people, who are united by common interests and as
          well as the desire to improve ourselvers. As we are young developer,
          we still have a lot to achieve
        </AnimText>
        <AnimText custom={3} >
          We don't know where this path would lead us to but we hope to
          achieve a lot
        </AnimText>
        <AnimHeading custom={4}>Our Team</AnimHeading>
      </Layout>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        wrap="unset"
        spacing={{ sm: "5", base: "9", lg: 3 }}
        py={12}
      >
        {teamInfo.map(props => (
          <Card
            id={props.id}
            image={props.image_url}
            name={props.name}
            job={props.job}
            github={props.github}
            telegram={props.telegram}
            youtube={props.youtube}
            vk={props.vk}
          />
        ))}
      </Stack>
    </Box >
  );
}

export default Team;
