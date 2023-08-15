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

const about = () => {
    
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
            bgRepeat="no-repeat"
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
        <Container position="relative" height="100%" width={{base: "37ch", md: "120ch"}} maxW="120ch">
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
                                ABOUT
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
                                    words={["_"]}
                                    loop
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={500}
                                    deleteSpeed={1000}
                                    delaySpeed={2000}
                                />
                            </Heading>
                            <Heading
                                letterSpacing={{ base: "10px", md: "20px" }}
                                color={headingColor}
                                textTransform="uppercase"
                                as="h1"
                                variant="page-title"
                                fontSize={{ base: "50px", md: "100px" }}
                                mb={4}
                            >
                                Me
                            </Heading>
                        </Flex>
                        <Box textAlign="center">
                            <Text fontSize={{ base: '16px', md: '20px' }} fontFamily="Space Mono">Hello World. I am <Text color={headingColor} display="inline">Joao Pereira</Text> (pronounced Joo-ow), an aspiring Computer Science graduate, fascinated by the world of Tech and praticullarly its mind-blowing advancments.<br></br><br></br></Text>
                            <Text fontSize={{ base: '16px', md: '20px' }} fontFamily="Space Mono">My focus lies in Front-end and Back-end developing, Besides that, I'm deeply intrigued by Cloud engineering and operating systems. Learn more about me below <FontAwesomeIcon size="1x" color={headingColor} fade icon={faArrowDown}/> </Text>
                        </Box>
                    </Box>
                </Container>

                <Box pb={75}>
                    <Text pb={10} color={headingColor} fontSize={{ base: '24px', md: '34px' }} fontFamily="Space Mono">More About Me <Divider/> </Text>
                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} templateRows={{ base: "1fr 1fr", md: "auto" }} gap={6}>
                        <div data-aos="fade-right" data-aos-duration="2000"  >
                            <Image src='/assets/pawnshop.jpg' width={1000} height={1000} />
                        </div>
                        <Box>
                            <Text fontSize={{ base: '16px', md: '20px' }} >  
                                I was born in <Text color={headingColor} display="inline">Portugal</Text> however raised in <Text color={headingColor} display="inline">Wexford</Text>,
                                Ireland since 2007. Just 4 years ago I found myself living independantly in 
                                <Text color={headingColor} display="inline"> Dublin</Text>. 
                            </Text>
                            <Text fontSize={{ base: '16px', md: '20px' }}>
                                <br/>
                                Throughout my life, I've held a strong belief that work is not 
                                only a necessity but a key ingredient for personal accomplishment and 
                                growth. The past four years I have been working part-time/full-time in 
                                the service industry primarily as a bartender however I now wish to 
                                expand my career and divulge myself deeper into the field of Software 
                                Development with the use of my degree and internship.
                            </Text>
                            <Text pb={4} fontSize={{ base: '16px', md: '20px' }} >  
                                <br/>
                                I am passionate in <Text color={headingColor} display="inline">UX/UI</Text> design, <Text color={headingColor} display="inline">AWS</Text> servies and arcitecture development 
                                as well as the complexities with <Text color={headingColor} display="inline">back-end</Text> development. Otherwise I am also greatly fond 
                                of a number of activites such as film photography, cycling, producing music, 
                                the art of mixology as well as hiking/camping.
                            </Text>
                            <Text pb={5} textAlign="center" fontSize={{ base: '10px', md: '14px' }} Center>
                                <br/>
                                I am currently open for employment so feel free to look through my Resume/CV
                                and contact me if you have any questions or queries.
                            </Text>
                            <Button
                                width="100%"
                                bg="transparent"
                                color={aboutMe}
                                borderColor={aboutMe}
                                borderWidth="1px"
                                fontWeight="bold"
                                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                                // borderRadius="inherit"
                                _hover={{ bg: "transparent", borderColor: aboutMe, color: aboutMe }}
                                _active={{ bg: "transparent", borderColor: aboutMe, color: aboutMe }}
                                _focus={{ boxShadow: "none" }}
                                variant="outline"
                                onClick={handleDownload}
                            >
                                Resume
                            </Button>
                        </Box>
                    </Grid>
                </Box>

                <Box pb={75}>
                    <Text pt={20} color={headingColor} fontSize={{ base: '24px', md: '34px' }} fontFamily="Space Mono">Skills & Interests <Divider/></Text>
                    <Text pt={10} color={headingColor} fontSize={{ base: '20px', md: '28px' }} fontFamily="Space Mono">Technologies</Text>
                    <Divider pt={2} mb={5} orientation="horizontal" />
                    <SimpleGrid columns={{ base: 2, md: 8 }} spacing={10}>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/python.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Python</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/java.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Java</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/C.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>C</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/React.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>React</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/JavaScript.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>JavaScript</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/HTML.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>HTML</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/CSS.png" width={37} height={37} />
                            </Center>
                            <Center>
                                <Text>CSS</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/NEXTjs.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Next.js</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/Linux.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Linux</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/MaterialUI.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Material UI</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/chakraui.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Chakra UI</Text>
                            </Center>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                    


                    <Text pt={5} textAlign="right" color={headingColor} fontSize={{ base: '20px', md: '28px' }} fontFamily="Space Mono">AWS</Text>
                    <Divider pt={2} mb={5} orientation="horizontal" />
                    <SimpleGrid columns={{ base: 2, md: 8 }} spacing={10}>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/s3.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>S3</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/CloudFront.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>CloudFront</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/ec2.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>EC2</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/Amplify.jpg" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Amplify</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/Cognito.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Cognito</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/lambda.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Lambda</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/SES.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>SES</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/KMS.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>KMS</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/IAM.png" width={30} height={30} />
                            </Center>
                            <Center>
                                <Text>IAM</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/CloudWatch.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>CloudWatch</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/AppSync.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>AppSync</Text>
                            </Center>
                            </Flex>
                        </Box>
                    </SimpleGrid>

                    <Text pt={5} color={headingColor} fontSize={{ base: '20px', md: '28px' }} fontFamily="Space Mono">Interests</Text>
                    <Divider pt={2} mb={5} orientation="horizontal" />
                    <SimpleGrid columns={{ base: 2, md: 8 }} spacing={10}>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/film.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>35/120mm Photography</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/Mixology.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Mixology</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/Linux.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Linux</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/Cycling.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Cycling</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/Hiking.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Hiking</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/Reading.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Reading</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/Programming.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Programming</Text>
                            </Center>
                            </Flex>
                        </Box>
                        <Box textAlign="center">
                            <Flex direction="column">
                            <Center>
                                <Image src="/assets/Music.png" width={50} height={50} />
                            </Center>
                            <Center>
                                <Text>Music/Production</Text>
                            </Center>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </Container>
        </Box>
    )
}

export default about;