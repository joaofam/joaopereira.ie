import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image';

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          mt={2}
          aria-label="Toggle theme"
          // colorScheme={useColorModeValue('purple', 'orange')}
          icon={
            useColorModeValue(
              <Image src="/assets/disco-ball.png" width={25} height={25} alt="MoonIcon" boxSize="2em" />,
              <Image src="/assets/sunrise.png" width={25} height={25} alt="SunIcon" boxSize="2em" />
            )
          }
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton