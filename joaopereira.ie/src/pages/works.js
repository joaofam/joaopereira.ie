// React imports
import { useState, useEffect, useRef } from "react";

// Chakra UI imports
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";

// Framer Motion imports
import { motion } from "framer-motion";

// Next.js imports
import Image from "next/image";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

// Third-party imports
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from "react-simple-typewriter";


const Icon = ({ icon, color }) => {
    const fontSize = useBreakpointValue({ base: "1.5em", md: "2em" });
    return (
      <motion.div whileHover={{ scale: 1.3 }} style={{ cursor: "pointer", color, paddingRight: "20px" }}>
        <Box fontSize={fontSize}>
          <FontAwesomeIcon icon={icon} />
        </Box>
      </motion.div>
    );
  };

const works = () => {
    
    const { colorMode } = useColorMode();

    const listItem = colorMode === 'light' ? 'black' : 'white';
    const aboutMe = colorMode === 'light' ? '#3d7aed' : '#ff63c3';
    const headingColor = colorMode === 'light' ? '#3d7aed' : '#ff63c3';

    const backgroundImage =
        colorMode === 'light' ? '/assets/blob-haikei.svg' : '/assets/about-dark-3.svg';

    const images = ["/assets/about-remove.png", "/assets/joao-3.png", "/assets/expo-joao.png"];

    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);

    const handleDownload = () => {
        const fileUrl = '/assets/Joao-Pereira-Resume.pdf';
    
        // Create a temporary link element
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", "resume.pdf");
    
        // Append the link to the document body
        document.body.appendChild(link);
    
        // Trigger the download
        link.click();
    
        // Remove the link from the document body
        document.body.removeChild(link);
    };
    
    useEffect(() => {
    AOS.init({
        duration: 2000,
        once: true, // Only animate elements once
    });
    }, []);

    return (

                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
                    <Text                                 
                        letterSpacing={{ base: "10px", md: "20px" }}
                        color={headingColor}
                        textTransform="uppercase"
                        as="h1"
                        variant="page-title"
                        fontSize={{ base: "25px", md: "50px" }}
                        mb={4}>
                        In Progess...
                    </Text>
                </Box>

    )
}

export default works;