import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Joao's portfolio" />
        <meta name="author" content="Joao Pereira" />
        <meta name="author" content="joaoseph" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Joao Pereira" />
        <meta name="og:title" content="Joao Pereira" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://static.vecteezy.com/system/resources/previews/008/152/576/original/pixel-art-laptop-computer-icon-illustration-free-vector.jpg" />
        <title>Joao Pereira</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container pt={14}>
        {/* <LazyVoxelDog /> */}

        {children}

        {/* <Footer /> */}
      </Container>
    </Box>
  )
}

export default Main