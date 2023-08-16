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
  Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableFooter,
    TableCaption,
    Tr,
    Td,
    Th,
    Thead,
    Tbody,
    Tfoot,

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
        <Box
            bgImage={`url('${backgroundImage}')`}
            bgPosition="left top"
            bgRepeat="repeat-y" // Change bgRepeat to 'repeat-y' for vertical repetition
            bgSize="100% 100%"
            height="100vh"
            width="100vw"
            position="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            zIndex="-1"
        >
        <Container position="relative" height="100%" width={{base: "37ch", md: "200ch"}} maxW="300ch">
            <Box height="100%">
                <Container position="relative">
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
                        <Flex>
                            <Heading
                                fontFamily="Space Mono"
                                letterSpacing={{ base: "10px", md: "20px" }}
                                color={headingColor}
                                textTransform="uppercase"
                                as="h1"
                                variant="page-title"
                                fontSize={{ base: "50px", md: "100px" }}
                                mb={4}
                            >
                                WORKS
                            </Heading>
                            <Heading
                                fontFamily="Space Mono"
                                color={listItem}
                                textTransform="uppercase"
                                as="h1"
                                variant="page-title"
                                fontSize={{ base: "50px", md: "100px" }}
                                mb={4}
                            >
                                <Typewriter
                                    words={["."]}
                                    loop
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={500}
                                    deleteSpeed={1000}
                                    delaySpeed={2000}
                                />
                            </Heading>
                        </Flex>
                        <Box textAlign="center">
                            <Text fontSize={{ base: '16px', md: '20px' }}>Below is a list of my current and previous works <FontAwesomeIcon size="1x" color={headingColor} fade icon={faArrowDown}/> </Text>
                        </Box>
                    </Box>
                </Container>
                <Box display="flex" flexDirection="column">
                    <Text                                 
                        letterSpacing={{ base: "10px", md: "20px" }}
                        color={listItem}
                        textTransform="uppercase"
                        as="h1"
                        variant="page-title"
                        fontSize={{ base: "25px", md: "50px" }}
                        mb={4}
                        pb={4}
                        >
                        IN PROGRESS
                    </Text>
                    <TableContainer pl={12} pb={6} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Table style={{borderCollapse:"separate", borderSpacing :"0 3em"}}>
                            <Thead>
                                <Tr pb={6}>
                                    <Th width="31%" color={listItem} letterSpacing={2} fontSize={{ base: "25px", md: "18px" }}>PROJECT NAME</Th>
                                    <Th width="31%" color={listItem} letterSpacing={2} fontSize={{ base: "25px", md: "18px" }}>FIELD</Th>
                                    <Th width="31%" color={listItem} letterSpacing={2} fontSize={{ base: "25px", md: "18px" }}>REPO</Th>
                                    <Th color={listItem} letterSpacing={2} fontSize={{ base: "25px", md: "18px" }}>YEAR</Th>
                                </Tr>
                            </Thead>
                            <Tbody pb={32}>
                            <Tr verticalAlign="middle">
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>PORTFOLIO WEBSITE</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>WEB DEV</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>.../joaopereira.ie</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>2023</Td>
                            </Tr>
                            <Tr>
                            <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>HOME SERVER</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>SYS ADMIN</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>.../bulbaserver</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>2023</Td>
                            </Tr>
                            <Tr>
                            <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>.DOTFILES</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>SYS CONFIG</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>.../.dotfiles</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>2022</Td>
                            </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box display="flex" flexDirection="column">
                    <Text                                 
                        letterSpacing={{ base: "10px", md: "20px" }}
                        color={listItem}
                        textTransform="uppercase"
                        as="h1"
                        variant="page-title"
                        fontSize={{ base: "25px", md: "50px" }}
                        mb={4}
                        pb={4}
                        >
                        PREVIOUS
                    </Text>
                    <TableContainer pl={12} pb={6} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Table style={{borderCollapse:"separate", borderSpacing :"0 3em"}}>
                            <Thead>
                                <Tr>
                                    <Th width="31%" color={listItem} letterSpacing={2} fontSize={{ base: "25px", md: "18px" }}>PROJECT NAME</Th>
                                    <Th width="31%" color={listItem} letterSpacing={2} fontSize={{ base: "25px", md: "18px" }}>FIELD</Th>
                                    <Th width="31%" color={listItem} letterSpacing={2} fontSize={{ base: "25px", md: "18px" }}>REPO</Th>
                                    <Th color={listItem} letterSpacing={2} fontSize={{ base: "25px", md: "18px" }}>YEAR</Th>
                                </Tr>
                            </Thead>
                            <Tbody pb={32}>
                            <Tr verticalAlign="middle">
                                <Td verticalAlign="middle" color={headingColor} fontSize={{ base: "25px", md: "25px" }} style={{ display: "flex", alignItems: "center" }}>FILEFLO</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>Decentralized</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>.../fileflo</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>2023</Td>
                            </Tr>
                            <Tr>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }} style={{ display: "flex", alignItems: "center" }}>VENATO</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>IOT/MOBILE</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>.../venato</Td>
                                <Td color={headingColor} fontSize={{ base: "25px", md: "25px" }}>2022</Td>
                            </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Container>
        </Box>
    )
}

export default works;