import { forwardRef } from 'react'
import NextLink from 'next/link'
import Image from 'next/image';
import Logo from './Logo'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  const { colorMode } = useColorMode();

  const menuIcon = colorMode === 'light' ? "/assets/abstractMenu2.png" : "/assets/abstractMenu3-dark.png";

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 3 }}
        >
          {/* <Link
            target="_blank"
            href="https://github.com/joaofam/joaopereira.ie/tree/main/joaopereira.ie"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            sx={{ fontFamily: 'Space Mono'}}
          >
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='Space Mono, monospace'
              fontWeight="bold"
              ml={3}
              letterSpacing={1}
              display="inline"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
              fontSize={14}
            >
            ABOUT
            </Text>
              <Text
                color={useColorModeValue('#3d7aed', '#ff63c3')}                fontFamily='Space Mono'
                fontWeight="bold"
                mr={3}
                display="inline"
              >
                
            </Text>
          </Link> */}
          <Link
            target="_blank"
            href="https://github.com/joaofam/joaopereira.ie/tree/main/joaopereira.ie"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            sx={{ fontFamily: 'Space Mono'}}
          >
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='Space Mono, monospace'
              fontWeight="bold"
              ml={3}
              letterSpacing={1}
              display="inline"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
              fontSize={14}
            >
            SOURCE
            </Text>
              <Text
                color={useColorModeValue('#3d7aed', '#ff63c3')}                
                fontFamily='Space Mono'
                fontWeight="bold"
                mr={3}
                display="inline"
              >
                {"/>"}
            </Text>
          </Link>
        </Stack>

        <Box flex={1} align="right" >
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                variant="outline"
                aria-label="Options"
                borderColor={
                  useColorModeValue('rgba(0, 0, 0, 0.12)', 'rgba(255, 255, 255, 0.12)')
                }              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Image position="absolute" width={25} height={25} src={menuIcon} alt="Menu Icon" />
                </Box>
              </MenuButton>

              <MenuList 
                backgroundColor="rgba(255, 255, 255, 0.06)" backdropFilter= "blur(20px)"
                border= "1px solid rgba(255, 255, 255, 0.1)"
                boxShadow= "20px 20px 22px rgba(0, 0, 0, 0.2)"
                borderRadius= "10px">
                {/* <MenuItem 
                  as={MenuLink} 
                  href="/" 
                  backgroundColor="rgba(255, 255, 255, 0)" color={useColorModeValue('black', 'white')}
                >
                  <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='Space Mono, monospace'
                    fontWeight="bold"
                    ml={3}
                    letterSpacing={1}
                    display="inline"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                    fontSize={14}
                  >
                  ABOUT
                  </Text>
                    <Text
                      color={useColorModeValue('#3d7aed', '#ff63c3')}                
                      fontFamily='Space Mono'
                      fontWeight="bold"
                      mr={3}
                      display="inline"
                    >
                    .
                  </Text>
                </MenuItem> */}
                <MenuItem
                  as={Link}
                  href="https://github.com/joaofam/joaopereira.ie/tree/main/joaopereira.ie"
                  backgroundColor="rgba(255, 255, 255, 0.0)"
                  color={useColorModeValue('black', 'white')}
                >
                  <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='Space Mono, monospace'
                    fontWeight="bold"
                    ml={3}
                    letterSpacing={1}
                    display="inline"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                    fontSize={14}
                  >
                  SOURCE
                  </Text>
                    <Text
                      color={useColorModeValue('#3d7aed', '#ff63c3')}                
                      fontFamily='Space Mono'
                      fontWeight="bold"
                      mr={3}
                      display="inline"
                    >
                    {"/>"}
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar