import React from "react";
import {
  Box,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react';

import "./services.css"

import { IconContext } from 'react-icons';
import { FaDesktop } from "react-icons/fa"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"
import { MdDraw } from "react-icons/md"
import AnimHeading from "../atoms/anim-heading/AnimHeading";
import ServicesWrapper from "./services-wrapper";


//#TODO Add animation

export default function ThreeTierSevices() {
  return (
    <Box
      backgroundColor="#17173d"
      pt={12}
      mt={8}
    >
      <VStack spacing={2} textAlign="center" >
        <AnimHeading color="white" custom={2}>
          Services
        </AnimHeading>
      </VStack>
      <Flex
        direction={{ base: 'row', md: 'reverse' }}
        textAlign="center"
        justify="center"
        alignItems="center"
        flexWrap='wrap'
        gap={{ base: "7", lg: "6" }}
        py={12}
      >

        <ServicesWrapper>
          <Flex alignItems="center" justifyContent='center' >
            <Flex width="70px" justifyContent="center" mb="8">
              <IconContext.Provider
                value={{
                  className: "icons",
                  size: 85,
                  alignItems: "center",
                }}
              >
                <HiOutlineDevicePhoneMobile />
              </IconContext.Provider>
            </Flex>
          </Flex>
          <Flex
            top="35%"
            flexDir="column"
            alignItems="center"
          >
            <Text
              fontSize={24}
              fontWeight="bold"
            >
              Mobile
            </Text>
            <Text
              textAlign="center"
              maxW="80%"
              mt={4}
            >
              Mobile development is like a hobby for us, a hobby which we accomplish well.
            </Text>
          </Flex>
        </ServicesWrapper>

        <ServicesWrapper
          backgroundColor="#1D1D59"
        >
          <Flex
            alignItems="center"
            justifyContent='center'
          >
            <Flex
              width="70px"
              justifyContent="center"
              mb="8"
            >
              <IconContext.Provider
                value={{
                  className: "icons",
                  size: 85,
                  alignItems: "center",
                }}
              >
                <FaDesktop />
              </IconContext.Provider>
            </Flex>
          </Flex>
          <Flex
            top="35%"
            flexDir="column"
            alignItems="center"
          >
            <Text
              fontSize={24}
              fontWeight="bold"
            >
              Web
            </Text>
            <Text
              textAlign="center"
              maxW="80%"
              mt={4}
            >
              Website development is one of our main areas of expertise, because websites are always needed by everyone.
            </Text>
          </Flex>
        </ServicesWrapper>

        <ServicesWrapper>
          <Flex
            alignItems="center"
            justifyContent='center'
          >
            <Flex
              width="70px"
              justifyContent="center"
              mb="8"
            >
              <IconContext.Provider
                value={{
                  className: "icons",
                  size: 85,
                  alignItems: "center",
                }}
              >
                <MdDraw />
              </IconContext.Provider>
            </Flex>
          </Flex>
          <Flex
            top="35%"
            flexDir="column"
            alignItems="center"
          >
            <Text
              fontSize={24}
              fontWeight="bold"
            >
              UX / UI Design
            </Text>
            <Text
              textAlign="center"
              maxW="80%"
              mt={4}
            >
              Design is needed for all of our projects. We try to make it comfortable and pleasant for the eyes, and most importantly - functional.
            </Text>
          </Flex>
        </ServicesWrapper>
      </Flex >
    </Box >
  );
}


