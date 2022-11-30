import { Image, Link } from '@chakra-ui/react'
import React from 'react'

const ProjectImage = (props) => {
  return (

    <Link href={props.href} alt="project" >
      <Image
        m={0}
        borderRadius="xl"
        objectFit="contain"
        alt="some good alt text"
        src={
          props.src
        }
        transition="0.5s ease-in-out"
        _hover={{
        }}
      />
    </Link>
  )
}

export default ProjectImage
