import React from "react"
import { Box } from "@chakra-ui/react"

const NavLink = ({ href, children }) => (
  <Box>
    <a
      rel="noreferrer"
      href={href}>
      {children}
    </a>
  </Box>
)


export default NavLink
