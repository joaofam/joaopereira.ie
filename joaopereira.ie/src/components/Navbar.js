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
import { 
  faGithub,
  faLinkedin,
  faGoogle,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowCurveDownRight } from '@styled-icons/fluentui-system-filled/ArrowCurveDownRight';

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      // bg={active ? 'grassTeal' : undefined}
      // textDecoration={active ? 'underline' : 'none'}
      // color={active ? 'red' : inactiveClor}
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

  const listItem = colorMode === 'light' ? 'black' : 'white';
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
          <LinkItem href="/about" path={path}>
            <Link
              href="/about"
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
                fontSize={14}
              >
              ABOUT
              </Text>
                <Text
                  color={useColorModeValue('#3d7aed', '#ff63c3')}                fontFamily='Space Mono'
                  fontWeight="bold"
                  display="inline"
                >
                
              </Text>
              <Text
                  color={useColorModeValue('#3d7aed', '#ff63c3')}
                  fontFamily='Space Mono'
                  fontWeight="bold"
                  display="inline"
                >
                  .
                </Text>
            </Link>
          </LinkItem>
          <LinkItem href="/works" path={path}>
            <Link
              href="/works"
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
                fontSize={14}
              >
              WORKS
              </Text>
                <Text
                  color={useColorModeValue('#3d7aed', '#ff63c3')}                fontFamily='Space Mono'
                  fontWeight="bold"
                  display="inline"
                >
                
              </Text>
              <Text
                  color={useColorModeValue('#3d7aed', '#ff63c3')}
                  fontFamily='Space Mono'
                  fontWeight="bold" 
                  display="inline"
                >
                  .
                </Text>
            </Link>
          </LinkItem>
            <Menu>
              <MenuButton>
                <Text
                  color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                  fontFamily='Space Mono, monospace'
                  fontWeight="bold"
                  ml={3}
                  letterSpacing={1}
                  display="inline"
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                  fontSize={14}
                  pr="2px"
                >
                  CONTACTS
                </Text>
                <Text
                  color={useColorModeValue('#3d7aed', '#ff63c3')}
                  fontFamily='Space Mono'
                  fontWeight="bold"
                  mr={3}
                  display="inline"
                >
                  <ArrowCurveDownRight size="14" />
                </Text>
              </MenuButton>
              <MenuList
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                    color: "white",
                  }}>
                <MenuItem
                  fontFamily={'Space Mono'}
                  as="a"
                  href="https://github.com/joaofam"
                  target="_blank"
                  icon={<FontAwesomeIcon size="1x" icon={faGithub} style={{ color: listItem }} />}
                  color={listItem}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                  }}>
                  Github
                </MenuItem>
                <MenuItem
                  fontFamily={'Space Mono'}
                  as="a"
                  href="https://www.linkedin.com/in/joao-joao"
                  target="_blank"
                  icon={<FontAwesomeIcon size="1x" icon={faLinkedin} style={{ color: listItem }} />}
                  color={listItem}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                  }}>
                  LinkedIn
                </MenuItem>
                <MenuItem
                  fontFamily={'Space Mono'}
                  as="a"
                  href="mailto:joao@joaopereira.ie"
                  target="_blank"
                  icon={<FontAwesomeIcon size="1x" icon={faGoogle} style={{ color: listItem }} />}
                  color={listItem}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                  }}>
                  joao@joaopereira.ie
                </MenuItem>
                <MenuItem
                  fontFamily={'Space Mono'}
                  as="a"
                  href="https://wa.me/353833294067"
                  target="_blank"
                  icon={<FontAwesomeIcon size="1x" icon={faWhatsapp} style={{ color: listItem }} />}
                  color={listItem}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                  }}>
                  +353 (83) 329 4067
                </MenuItem>
              </MenuList>
            </Menu>
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
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
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
          <ThemeToggleButton mt={10}/>

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
                <MenuItem 
                  as={MenuLink} 
                  href="/about" 
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
                </MenuItem>
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
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
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