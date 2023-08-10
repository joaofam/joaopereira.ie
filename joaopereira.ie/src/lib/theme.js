import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/space-mono';

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#121212')(props)
    }
  })
}

const components = {
  Heading: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      letterSpacing: '0.05em',
    }),

    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },

  Text: {
    baseStyle: props => ({
      color: mode('black', 'white')(props),
      fontFamlily: 'Space Mono',
    }),
  },

  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ffb0e0')(props),
      textUnderlineOffset: 3
    })
  },

  Divider: {
    baseStyle: props => ({
      borderColor: mode('grey', '#45424b')(props),
    })
  },

  UnorderedList: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
    })
  },

  FormLabel: {
    baseStyle: props => ({
      color: mode('grey', 'white')(props),
    })
  },

  // Input : {
  //   baseStyle: props => ({
  //     color: mode('#3d7aed', '#ff63c3')(props),
  //   })
  // },

  Textarea : {
    baseStyle: props => ({
      color: mode('black', 'white')(props),
    })
  },

  Card: {
    baseStyle: {
      bg: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
    },
  },
};

const fonts = {
    body: "'Space Mono', monospace",
    heading: "'Space Mono'",
}


const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme