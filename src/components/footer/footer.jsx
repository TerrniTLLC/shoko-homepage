import React from "react";
import {
  Box,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import "./footer.css";
import Logo from "../atoms/logo/logo";
import NavLink from "../atoms/navlink/navlink";



export default function Footer() {
  return (
    <Box
      bg='gray.750'
      color={useColorModeValue('white', 'gray.100')}
      mt={8}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={3}
        justify={'center'}
        align={'center'}
        direction={{ base: 'column', md: 'row-reverse' }}
      >
        <Stack
          my={4}
          fontSize={{ base: "14px", md: "16px" }}
          direction={{ base: 'row', sm: 'row' }}
          spacing={4}
          align="center"
          justifyContent="center"
        >
          <NavLink href='/'>
            Home
          </NavLink>
          <NavLink href='https://github.com/ShokoTeam'>
            Github
          </NavLink>
          <NavLink href='https://boosty.to/shokoteam'>
            Donate
          </NavLink>
          <NavLink href='/privacy'>
            Privacy
          </NavLink>
        </Stack>
        <Logo className="footer__logo" />
      </Container>
    </Box>
  );
}
