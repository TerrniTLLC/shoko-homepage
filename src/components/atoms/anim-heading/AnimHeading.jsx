import React from 'react'
import { Flex, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"

const titleAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

const AnimHeading = ({ children, custom, color, ...props }) => {
  return (
    <Flex
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      alignItems="center"
      justifyContent='center'
      mb={4}
      {...props}
    >
      <Heading alignItems="center" as={motion.h3} variants={titleAnimation} custom={custom} color={color} fontSize={{ base: "xl", sm: "2xl" }}>
        {children}
      </Heading>
    </Flex>
  )
}

export default AnimHeading
