import React from 'react'
import { Text } from "@chakra-ui/react"

const Paragraph = ({ children }) => {
  return (
    <Text fontSize="xs">
      {children}
    </Text>
  )
}

export default Paragraph 
