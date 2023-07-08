import Link from 'next/link'
import { Text, useColorModeValue, Box  } from '@chakra-ui/react'
// import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        {/* <FootprintIcon /> */}
        <Box>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='Space Mono, monospace'
            fontWeight="bold"
            ml={3}
            letterSpacing={1}
            display="inline"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
          >
            JOAO PEREIRA
          </Text>
          <Text
            color={useColorModeValue('#3d7aed', '#ff63c3')}
            fontFamily='Space Mono'
            fontWeight="bold"
            ml={3}
            letterSpacing={0}
            display="inline"
            // bgClip="text"
          >
            .
          </Text>
        </Box>
      </LogoBox>

    </Link>)
  );
}

export default Logo