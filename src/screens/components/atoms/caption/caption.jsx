import { Heading, Tag } from '@chakra-ui/react'
import React from 'react'

const Caption = ({ children, tag }) => {
  return (
    <Heading fontSize="sm">
      {tag ? <Tag>{tag}</Tag> : null}
      {children}
    </Heading>
  )
}

export default Caption
