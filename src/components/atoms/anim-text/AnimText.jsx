import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion"

export const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

const AnimText = ({ custom, children, ...props }) => {
  return (
    <Box
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      as={motion.div}
    >
      <Text
        as={motion.h3}
        variants={textAnimation}
        fontSize={24}
        mb={5}
        custom={custom}
        {...props}
      >
        {children}
      </Text>
    </Box>
  )
}

export default AnimText
