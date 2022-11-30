import React from 'react'
import { useRef } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import Logo from '../logo/logo';
import NavLink from '../navlink/navlink';
import GoToButton from '../go-to-top/GoToButton';

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const topRef = useRef(null)

  return (
    <>
      <Box
        ref={topRef}
        zIndex="10"
        position="fixed"
        w="100%"
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={8}
      >
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Flex gap={4} spacing={8} alignItems='center' justifyContent="space-around">
            <Box>
              <Logo width={35} heigth={35} />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
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
            </HStack>
          </Flex>
          <GoToButton target={topRef} />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink href='/'>
                Home
              </NavLink>
              <NavLink href='https://github.com/ShokoTeam'>
                Github
              </NavLink>
              <NavLink href='https://boosty.to/shokoteam'>
                Donate
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
