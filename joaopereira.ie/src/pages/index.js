// React imports
import { useState, useEffect, useRef } from "react";

// Chakra UI imports
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  chakra,
  CloseButton,
  Collapse,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  LinkBox,
  LinkOverlay,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  SlideFade,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  Textarea,
  UnorderedList,
  useColorMode,
  useDisclosure,
  extendTheme,
  useBreakpointValue,
  useMediaQuery
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Framer Motion imports
import { motion } from "framer-motion";

// MUI imports
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Next.js imports
import Image from "next/image";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { 
  faJava, 
  faPython, 
  faReact, 
  faGitlab, 
  faJs,
  faHtml5,
  faCss3Alt,
  faAws,
  faLinux,
  faJenkins,
  faSelenium,
  faJira,
  faGithub,
  faLinkedin,
  faGoogle,
  faUbuntu,
  faNodeJs,
  faWhatsapp,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';
import { 
  faUser,
  faEnvelope,
  faMapPin,
} from '@fortawesome/free-solid-svg-icons';

// Third-party imports
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs, { init } from "emailjs-com";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useForm } from "react-hook-form";
import { Link as ScrollLink } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { keyframes } from "@chakra-ui/react";

// Local imports
import "./styles.module.css";


init('TDALnVn6n6qtBgb2N');

const theme = createTheme();

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

function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

const Page = () => {

  const images = ["/assets/profile-2.png", "/assets/joao-3.png", "/assets/expo-joao.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const backend = [
    { icon: faPython, color: "#ffd43b" },
    { icon: faJava, color: "#f89820" },
  ];
  const frontend = [
    { icon: faReact, color: "#62a0ea" },
    { icon: faNodeJs, color: "#3c873a" },
    { icon: faJs, color: "#f5c211" },
    { icon: faHtml5, color: "#e34c26" },
    { icon: faCss3Alt, color: "#264de4" },
  ];
  const tools = [
    { icon: faGithub, color: "black" },
    { icon: faGitlab, color: "#ff7800" },
    { icon: faAws, color: "#ff9900" },
    { icon: faLinux, color: "#f5c211" },
    { icon: faUbuntu, color: "#dd4814" },
    { icon: faDocker, color: "#0db7ed" },
    { icon: faJenkins, color: "#4584b6" },
    { icon: faJira, color: "#0052cc" },
  ];
  
  const [backendIndex, setBackendIndex] = useState(0);
  const [frontendIndex, setFrontendIndex] = useState(0);
  const [toolsIndex, setToolsIndex] = useState(0);
  
  useEffect(() => {
    const backendInterval = setInterval(() => {
      setBackendIndex((prevIndex) => (prevIndex + 1) % backend.length);
    }, 4000);
  
    const frontendInterval = setInterval(() => {
      setFrontendIndex((prevIndex) => (prevIndex + 1) % frontend.length);
    }, 4000);
  
    const toolsInterval = setInterval(() => {
      setToolsIndex((prevIndex) => (prevIndex + 1) % tools.length);
    }, 4000);
  
    return () => {
      clearInterval(backendInterval);
      clearInterval(frontendInterval);
      clearInterval(toolsInterval);
    };
  }, []);

  // Font Sizes
  const fontSize = useBreakpointValue({ base: 15, md: 23 });

  const fontSizeHeading = useBreakpointValue({ base: 32, md: 38 });
  const fontSizeHeadingNo = useBreakpointValue({ base: 24, md: 28 });

  // Colour Mode
  const { colorMode } = useColorMode();

  const backgroundImage =
    colorMode === 'light' ? '/assets/blob-haikei.svg' : '/assets/dark-layered-waves-haikei.svg';

  const githubIconColor = colorMode === 'light' ? 'black' : 'white';
  const listItem = colorMode === 'light' ? 'black' : 'white';
  const textColor = colorMode === 'light' ? '#3d7aed' : '#ff63c3';
  const aboutMe = colorMode === 'light' ? '#3d7aed' : '#ff63c3';
  const helloWorldOpacity = colorMode === 'light' ? '0.8' : '0.1';
  const TheWell = colorMode === 'light' ? '/assets/TheWellLight.png' : '/assets/TheWellDark-no-bg.png';
  const UO = colorMode === 'light' ? '/assets/UOLight.png' : '/assets/UO.png';
  const TheAcademy = colorMode === 'light' ?  '/assets/AcademyLight.png' : '/assets/Academy-no-bg.png';

  const zoomIn = keyframes`
    from {transform: scale(1);}
    to {transform: scale(1.1);}
  `;

  const [isIntersecting, setIntersecting] = useState(false);

  const ref = useRef();
  const onScreen = useOnScreen(ref);

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false
  };

  // COLLAPSE COMPONENT
  const [showKLAS, setShowKLAS] = useState(false);
  const [showTheWell, setShowTheWell] = useState(false);
  const [showUB, setShowUB] = useState(false);
  const [showTheAcademy, setShowTheAcademy] = useState(false);

  const handleToggleKLAS = () => setShowKLAS(!showKLAS);
  const handleToggleTheWell = () => setShowTheWell(!showTheWell);
  const handleToggleUB = () => setShowUB(!showUB);
  const handleToggleTheAcademy = () => setShowTheAcademy(!showTheAcademy);

  // EMAIL SERVICE
  const serviceId = 'service_r2wgdet';
  const templateId = 'template_olbmt4z';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [alert, setAlert] = useState({
    show: false,
    status: '',
    title: '',
    description: '',
  });

  const handleAlertClose = () => {
    setAlert({
      show: false,
      status: '',
      title: '',
      description: '',
    });
  };

  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams);
      setAlert({
        show: true,
        status: 'success',
        title: 'Success',
        description: 'Your message has been sent successfully!',
      });
      reset();
    } catch (error) {
      console.error('Failed to send the message:', error);
      setAlert({
        show: true,
        status: 'error',
        title: 'Error',
        description: 'Failed to send the message. Please try again later.',
      });
    }
  };

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
    <>
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
      // backgroundAttachment="fixed"
    >
      <Container position="relative" height="100%" width={{base: "37ch", md: "120ch"}} maxW="120ch">
        <Box height="100%">
          <Container position="relative">
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
              <Box textAlign="left" paddingLeft="20px" marginTop="-20px" whiteSpace="nowrap">
                <Heading letterSpacing={3} color={listItem} textTransform="uppercase" as="h2" variant="page-title" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}  mb={4}>
                  João Pereira
                </Heading>
                <Text fontSize={fontSize} color={listItem}>
                  <Typewriter
                    words={["Software Developer", "Full Stack Developer", "Cloud Infastructure Developer"]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={75}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </Text>
                <Box marginTop="20px">
                  <Flex alignItems="center">
                    <a href="https://github.com/joaofam" target="_blank" rel="noopener noreferrer">
                      <Icon icon={faGithub} color={githubIconColor} />
                    </a>
                    <a href="https://www.linkedin.com/in/joao-joao/" target="_blank" rel="noopener noreferrer">
                      <Icon icon={faLinkedin} color="#0077B5"/>
                    </a>
                    <a href="joaopereira2213@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Icon icon={faGoogle} color="#c71610" />
                    </a>
                    <Center height="50px">
                      <Divider orientation="vertical" />
                      <Box 
                        pl={7} 
                        display="flex"
                        justifyContent="center" 
                        alignItems="center" 
                        // w={{ base: "100px", md: "150px", lg: "200px" }}
                        // h={{ base: "100px", md: "150px", lg: "200px" }}
                      >
                        <Button
                          fontFamily="Space Mono"
                          fontSize={{ base: "sm", md: "md", lg: "xl" }}
                          bg="transparent"
                          color={aboutMe}
                          borderColor={aboutMe}
                          borderWidth="1px"
                          fontWeight="bold"
                          borderRadius="inherit"
                          _hover={{ bg: "transparent", borderColor: aboutMe, color: aboutMe }}
                          _active={{ bg: "transparent", borderColorF: aboutMe, color: aboutMe }}
                          _focus={{ boxShadow: "none" }}
                          variant="outline"
                        >
                          <ScrollLink to="about-section" smooth={true} duration={500}>
                            about me
                          </ScrollLink>
                        </Button>
                      </Box>
                    </Center>
                  <Flex flex="1" />
                  </Flex>
                </Box>
              </Box>
              <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                textAlign="center"
              >
                <Box
                  borderColor="transparent"
                  borderWidth={2}
                  borderStyle="solid"
                  w={{ base: "100px", md: "150px", lg: "200px" }}
                  h={{ base: "100px", md: "150px", lg: "200px" }}
                  display="inline-block"
                  borderRadius="full"
                  overflow="hidden"
                >
                  <Box
                    position="relative"
                    w={{ base: "100px", md: "150px", lg: "200px" }}
                    h={{ base: "100px", md: "150px", lg: "200px" }}
                    >
                  <motion.img
                    key={images[currentIndex]}
                    src={images[currentIndex]}
                    alt="Profile image"
                    borderRadius="full"
                    width="100%"
                    height="100%"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.6 }}
                  />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
          {/* ABOUT ME */}
          <div data-aos="fade-up" data-aos-duration="4000">
            <Text
              ref={ref}
              fontSize={fontSizeHeading}
              sx={{
                fontFamily: 'Space Mono',
                letterSpacing: '2px',
                paddingTop: '25%',
                paddingBottom: '20px',
              }}
              id="about-section"
              pl={5}
            >
              <Text fontSize={fontSizeHeadingNo} color={textColor} display="inline">
                1.
              </Text>
            ABOUT
          </Text>
          </div>

          <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "2000px" }} height={{ base: "100%", md: "500px" }} position="relative">
            <Image
              src='/assets/joao1.1.jpg'
              alt='Caffe Latte'
              layout='fill'
              objectFit="cover"
              borderRadius="full"
            />
          </Box>
            <Box pl={4}>
              <div data-aos="fade-down" data-aos-duration="4000">
                <Text 
                  color='#bebebe'
                  position="absolute" 
                  fontWeight="bold" 
                  fontFamily="Space Mono" 
                  opacity={helloWorldOpacity}
                  fontSize={{ base: "30px", md: "84px" }} 
                  mt={{ base: "-33px", md: "-107px" }}
                  ml={4}>
                  HELLO WORLD
                </Text>
              </div>
              <div data-aos="fade-up">
                <Text fontSize={{ base: "14px", md: "18px" }}>
                  I was born in Portugal but spent most of my formative years
                  in Ireland. Recently, I graduated with a degree in Computer
                  Applications and Software Engineering from DCU. My passion
                  lies in technology and computers, and I'm always eager to explore
                  new opportunities and make the most out of life.
                  <br></br><br></br>
                  In terms of my expertise, I consider myself a Full Stack 
                  Developer, but I'm constantly seeking to expand my skill set 
                  and stay updated with the latest technologies. I'm open to 
                  embracing new challenges and applying my knowledge to various 
                  roles. 
                </Text>
              </div>
              <SimpleGrid columns={2} spacing={5} pt={4}>
                <Box>
                  <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1000">
                    <Heading fontSize={{ base: "20px", md: "28px" }}> Name</Heading>
                    <Text fontSize={{ base: "12px", md: "16px" }}>Joao Pereira</Text>
                    <Text fontSize={{ base: "12px", md: "16px" }}>(Pronounced Joo-ow)</Text>
                  </div>
                </Box>
                <Box>
                  <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1200">
                    <Heading fontSize={{ base: "20px", md: "28px" }}>Age</Heading>
                    <Text fontSize={{ base: "12px", md: "16px" }}>21 Years Old</Text>
                  </div>
                </Box>
                <Box>
                  <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1400">
                    <Heading fontSize={{ base: "20px", md: "28px" }}> <FontAwesomeIcon size="1x" icon={faMapPin}/> Location</Heading>
                    <Text fontSize={{ base: "12px", md: "16px" }}>Dublin, Ireland</Text>
                  </div>
                </Box>
                <Box>
                  <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1600">
                    <Heading fontSize={{ base: "20px", md: "28px" }}>Education</Heading>
                    <Text fontSize={{ base: "12px", md: "16px" }}>Dublin City University</Text>
                    <Text fontSize={{ base: "12px", md: "16px" }}>B.S. in Computer Applications and Software Engineering (1.1 Grade)</Text>
                  </div>
                </Box>
              </SimpleGrid>
            </Box>
          </Flex>
          <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1800">
            <Box pt={10} display="flex" justifyContent="center" alignItems="center" width="100%">
              <Button
                fontFamily="Space Mono"
                bg="transparent"
                color={textColor}
                borderColor={textColor}
                borderWidth="1px"
                fontWeight="bold"
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                // borderRadius="inherit"
                _hover={{ bg: "transparent", borderColor: textColor, color: textColor }}
                _active={{ bg: "transparent", borderColor: textColor, color: textColor }}
                _focus={{ boxShadow: "none" }}
                variant="outline"
                onClick={handleDownload}
              >
                Check out my Resume
              </Button>
            </Box>
          </div>

          <div data-aos="zoom-in-left" data-aos-duration="4000">
            <Text
              ref={ref}
              pt={{ base: "50%", md: "25%" }}
              sx={{
                fontFamily: 'Space Mono',
                letterSpacing: '2px',
                paddingBottom: '20px',
              }}
              pl={5}
              fontSize={fontSizeHeading}
            >
              <Text fontSize={fontSizeHeadingNo} color={textColor} display="inline">
                2.
              </Text>
              EXPERIENCE
            </Text>
          </div>

          <div data-aos="zoom-in-left" data-aos-duration="4000" data-aos-delay="1000">
            <Text pb="20px">Select one of the options below to expand my current experience within either field</Text>
          </div>
    
          <Tabs isFitted variant='enclosed'>
            <div data-aos="zoom-in" data-aos-duration="4000" data-aos-delay="1200">
              <TabList mb='1em'>
                <Tab >Software</Tab>
                <Tab>Industry</Tab>
              </TabList>
            </div>
            <TabPanels>
              <TabPanel>
                <div data-aos="zoom-in-right" data-aos-duration="4000" data-aos-delay="1400">
                  <Box>
                    <Card
                      direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      variant='outline'
                      sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.06)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                          borderRadius: "10px",
                          color: "white",
                          height: "100%"
                        }}
                    >
                      <Image
                        maxW={{ base: '100%', sm: '400px' }}
                        src='/assets/KLAS-no-bg.png'
                        alt='Caffe Latte'
                        width={200}
                        height={100}
                        p={20}
                        borderRadius="full"
                      />
                      <Stack>
                        <CardBody>
                          <Heading fontSize='24px'>Klas Telecom</Heading>
                          <Divider />
                          <Text>
                            Software Developer Intern
                          </Text>
                          <Text>
                            2022 March - 2022 August
                          </Text>
                          <Collapse startingHeight={20} in={showKLAS}>
                            <Text sx={{ p: 2 }} fontSize={{ base: "14px", md: "16px" }}>
                              During my time at Klas, I was a valued member of a 10-person <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>Agile</Text> team that developed Blackrock, a <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>React</Text>-based network configuration and monitoring app with a <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>Python</Text> backend. As a key contributor to the project, I:
                              <br /><br />
                              <UnorderedList>
                                <ListItem> <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>Designed</Text> and <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>implemented</Text> new features for the web application, improving its functionality and usability.</ListItem>
                                <ListItem> Conducted rigorous <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>testing</Text> and <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>debugging</Text> to ensure high-quality code and user satisfaction. </ListItem>
                                <ListItem> <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>Developed</Text> numerous <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>API endpoints</Text>, streamlining data exchange and integration with other systems. </ListItem>
                                <ListItem> Maintained detailed <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>documentation</Text> and created implementation guides for team members and users. </ListItem>
                                <ListItem> Participated in <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>daily standups</Text> and biweekly <Text sx={{ fontWeight: 'bold', color: textColor, display: 'inline' }}>retrospectives</Text>, collaborating closely with colleagues to achieve project goals. </ListItem>
                              </UnorderedList>
                              <br />
                              Overall, I am proud of my contributions to Blackrock and my ability to work effectively in a dynamic and collaborative environment.
                              <br></br>
                              <br></br>
                              <i>Technologies used</i>: React, Python, YAML, Git, JIRA, Linux, Selenium, Swagger, Postman
                            </Text>
                          </Collapse>
                          <Button size="sm" onClick={handleToggleKLAS} mt="1rem">
                            {showKLAS ? "Show Less" : "Show More"}
                          </Button>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Box>
                </div>
              </TabPanel>

              <TabPanel>
                <div data-aos="zoom-in-right" data-aos-duration="4000" data-aos-delay="1400">
                  <Box>
                    <Card
                      direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      variant='outline'
                      sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.06)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                          borderRadius: "10px",
                          color: "white",
                          height: "100%"
                        }}
                    >
                      <Image
                        maxW={{ base: '100%', sm: '400px' }}
                        src={TheWell}
                        alt='Caffe Latte'
                        width={200}
                        height={100}
                        p={20}
                        borderRadius="full"
                      />
                      <Stack>
                        <CardBody>
                          <Heading fontSize='24px'>The Well</Heading>
                          <Divider />
                          <Text>
                            Senior Bartender
                          </Text>
                          <Text>
                            2021 October - 2023 June
                          </Text>
                          <Collapse startingHeight={20} in={showTheWell}>
                            <Text sx={{ p: 2 }} fontSize={{ base: "14px", md: "16px" }}>
                              <UnorderedList>
                                <ListItem> Thrived in a high-volume, fast-paced bar environment, efficiently preparing and serving hundreds of cocktails and drinks within demanding timeframes.</ListItem>
                                <ListItem> Played a vital role in the development of the cocktail menu, contributing innovative and crowd-pleasing creations to enhance the customer experience. </ListItem>
                                <ListItem> Provided exceptional customer service by offering guidance and education on various cocktails, spirits, and drink options, enhancing the overall guest experience. </ListItem>
                                <ListItem> Maintained a strong attention to detail, consistently delivering accurate orders to customers and ensuring staff received the necessary support and guidance. </ListItem>
                                <ListItem> Adapted quickly to changing circumstances and effectively multitasked, ensuring a seamless flow of operations even during the busiest periods. </ListItem>
                              </UnorderedList>
                            </Text>
                          </Collapse>
                          <Button size="sm" onClick={handleToggleTheWell} mt="1rem">
                            {showTheWell ? "Show Less" : "Show More"}
                          </Button>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Box>
                </div>
                <div data-aos="zoom-in-right" data-aos-duration="4000" data-aos-delay="1600">
                  <Box pt={4}>
                    <Card
                      direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      variant='outline'
                      sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.06)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                          borderRadius: "10px",
                          color: "white",
                          height: "100%"
                        }}
                    >
                      <Image
                        maxW={{ base: '100%', sm: '400px' }}
                        src={UO}
                        alt='Caffe Latte'
                        width={200}
                        height={100}
                        p={20}
                        borderRadius="full"
                      />
                      <Stack>
                        <CardBody>
                          <Heading fontSize='24px'>Urban Brewing</Heading>
                          <Divider />
                          <Text>
                            Bartender
                          </Text>
                          <Text>
                            2021 June - 2021 October
                          </Text>
                          <Collapse startingHeight={20} in={showUB}>
                            <Text sx={{ p: 2 }} fontSize={{ base: "14px", md: "16px" }}>
                              <UnorderedList>
                                <ListItem>Expertly crafted and garnished cocktails, showcasing attention to detail and a keen eye for aesthetics in a higher-class bar setting.</ListItem>
                                <ListItem> Expanded knowledge of wines and beers through extensive training and hands-on experience, providing recommendations and enhancing the customer's beverage experience. </ListItem>
                                <ListItem> Assisted in the overall operations of the bar, collaborating with the team to ensure smooth service and timely delivery of drinks. </ListItem>
                                <ListItem> Developed strong mixology skills, incorporating creativity and innovation while adhering to the bar's standards, resulting in exceptional drink presentations and customer satisfaction. </ListItem>
                                <ListItem> Successfully completed barista training, acquiring the skills to expertly prepare and serve a wide range of coffee beverages, adding versatility to my role and enhancing the overall beverage offerings for customers. </ListItem>
                              </UnorderedList>
                            </Text>
                          </Collapse>
                          <Button size="sm" onClick={handleToggleUB} mt="1rem">
                            {showUB ? "Show Less" : "Show More"}
                          </Button>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Box>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="4000" data-aos-delay="1800">
                  <Box pt={4}>
                    <Card
                      direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      variant='outline'
                      sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.06)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                          borderRadius: "10px",
                          color: "white",
                          height: "100%"
                        }}
                    >
                      <Image
                        maxW={{ base: '100%', sm: '400px' }}
                        src={TheAcademy}
                        alt='Caffe Latte'
                        width={200}
                        height={100}
                        p={20}
                        borderRadius="full"
                      />
                      <Stack>
                        <CardBody>
                          <Heading fontSize='24px'>The Academy</Heading>
                          <Divider />
                          <Text>
                            Bartender
                          </Text>
                          <Text>
                            2020 January - 2020 March
                          </Text>
                          <Collapse startingHeight={20} in={showTheAcademy}>
                            <Text sx={{ p: 2 }} fontSize={{ base: "14px", md: "16px" }}>
                              <UnorderedList>
                                <ListItem> Thrived in a fast-paced and high-energy environment of an extremely busy nightclub.</ListItem>
                                <ListItem> Demonstrated exceptional multitasking skills by efficiently serving multiple customers simultaneously during peak hours. </ListItem>                        
                                <ListItem> Maintained composure and professionalism under pressure, ensuring accuracy and quality in drink preparation even during high-volume periods. </ListItem>
                                <ListItem> Effectively managed crowd control and maintained a safe and secure environment while delivering prompt and friendly service to customers.</ListItem>
                              </UnorderedList>
                            </Text>
                          </Collapse>
                          <Button size="sm" onClick={handleToggleTheAcademy} mt="1rem">
                            {showTheAcademy ? "Show Less" : "Show More"}
                          </Button>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Box>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Container maxW="container.2xl">
            <div data-aos="fade-up" data-aos-duration="4000">
              <Text
                pt={{ base: "50%", md: "25%" }}
                fontSize={fontSizeHeading}
                ref={ref}
                sx={{
                  fontFamily: 'Space Mono',
                  letterSpacing: '2px',
                  paddingBottom: '20px',
                }}
                data-aos="fade-up"
                pl={5}
              >
                <Text fontSize={fontSizeHeadingNo} color={textColor} display="inline">
                  3.
                </Text>
                SKILLS
              </Text>
            </div>
    
            <Box>
              <Flex justifyContent='center'>
                <SimpleGrid 
                  spacing={3} 
                  templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, minmax(300px, 1fr))" }}
                >
                  <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200">
                    <Card
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                        borderRadius: "10px",
                        color: "white",
                        height: "100%",
                      }}
                    >
                      <CardHeader>
                        <Heading align="center" size='md'>Backend</Heading>
                      </CardHeader>
                      <CardBody>
                        <UnorderedList color={`${listItem}`} >
                          <ListItem>Python</ListItem>
                          <ListItem>C</ListItem>
                          <ListItem>Java</ListItem>
                          <ListItem>REST API</ListItem>
                          <ListItem>GraphQL</ListItem>
                          <ListItem>Nodejs</ListItem>
                          <ListItem>
                            <Box pr={40}>SQL</Box>
                          </ListItem>

                        </UnorderedList>
                      </CardBody>
                      <CardFooter
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        {backend.map((item, index) => (
                          <FontAwesomeIcon
                            key={index}
                            size="3x"
                            icon={item.icon}
                            flip
                            style={{
                              position: "absolute", 
                              top: "-50%",
                              color: backendIndex === index ? item.color : "transparent",
                              animationDuration: "2s",
                            }}
                          />
                        ))}
                      </CardFooter>
                    </Card>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="400">
                    <Card
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                        borderRadius: "10px",
                        color: "white",
                        height: "100%"
                      }}
                    >
                      <CardHeader>
                        <Heading align="center" size='md'>Frontend</Heading>
                      </CardHeader>
                      <CardBody>
                        <UnorderedList color={`${listItem}`} >
                          <ListItem>React</ListItem>
                          <ListItem>Nextjs</ListItem>
                          <ListItem>Express</ListItem>
                          <ListItem>Flask</ListItem>
                          <ListItem>JavaScript</ListItem>
                          <ListItem>HTML</ListItem>
                          <ListItem>CSS</ListItem>
                          <ListItem>MaterialUI</ListItem>
                          <ListItem>ChakraUI</ListItem>
                        </UnorderedList>
                      </CardBody>
                      <CardFooter
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        {frontend.map((item, index) => (
                          <FontAwesomeIcon
                            key={index}
                            size="3x"
                            icon={item.icon}
                            flip
                            style={{
                              position: "absolute",
                              top: "-50%",
                              color: frontendIndex === index ? item.color : "transparent",
                              animationDuration: "2s",
                            }}
                          />
                        ))}
                      </CardFooter>
                    </Card>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="600">
                    <Card
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                        borderRadius: "10px",
                        color: "white",
                        height: "100%"
                      }}
                    >
                      <CardHeader>
                        <Heading align="center" size='md'>Tools</Heading>
                      </CardHeader>
                      <CardBody>
                        <UnorderedList color={`${listItem}`} >
                          <ListItem>Git</ListItem>
                          <ListItem>JIRA</ListItem>
                          <ListItem>
                            AWS Services
                            <UnorderedList marginLeft={4}>
                              <ListItem>EC2</ListItem>
                              <ListItem>S3</ListItem>
                              <ListItem>CloudFront</ListItem>
                              <Link onClick={onOpen}>Show all</Link>
                                <Modal
                                  isCentered
                                  onClose={onClose}
                                  isOpen={isOpen}
                                  motionPreset='slideInBottom'
                                >
                                  <ModalOverlay />
                                  <ModalContent>
                                    <ModalHeader sx={{ textDecoration: "underline"}}>All AWS Services</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                                        <GridItem>
                                          <ListItem>EC2</ListItem>
                                          <ListItem>S3</ListItem>
                                          <ListItem>CloudFront</ListItem>
                                          <ListItem>Amplify</ListItem>
                                          <ListItem>Lambda</ListItem>
                                          <ListItem>DynamoDB</ListItem>
                                          <ListItem>API Gateway</ListItem>
                                        </GridItem>
                                        <GridItem>
                                          <ListItem>AppSync</ListItem>
                                          <ListItem>Cognito</ListItem>
                                          <ListItem>KMS</ListItem>
                                          <ListItem>CloudWatch</ListItem>
                                          <ListItem>SES</ListItem>
                                          <ListItem>IAM</ListItem>
                                        </GridItem>
                                      </Grid>
                                    </ModalBody>
                                    <ModalFooter>
                                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Close
                                      </Button>
                                    </ModalFooter>
                                  </ModalContent>
                                </Modal>
                            </UnorderedList>
                          </ListItem>
                          <ListItem>Linux</ListItem>
                          <ListItem>CICD</ListItem>
                          <ListItem>Docker</ListItem>
                          <ListItem>Jenkins</ListItem>
                          <ListItem>Selenium</ListItem>
                        </UnorderedList>
                      </CardBody>
                      <CardFooter
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        {tools.map((item, index) => (
                          <FontAwesomeIcon
                            key={index}
                            size="3x"
                            icon={item.icon}
                            flip
                            style={{
                              position: "absolute", // Added absolute positioning
                              top: "-50%",
                              color: toolsIndex === index ? item.color : "transparent",
                              animationDuration: "2s",
                            }}
                          />
                        ))}
                      </CardFooter>
                    </Card>
                  </div>
                </SimpleGrid>
              </Flex>
            </Box>

            <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="800">
              <Heading p={{ base: "15", md: "10" }} fontSize={{ base: "24px", md: "28px" }}>Technologies</Heading>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1000">
              <Flex justify="center" pt={5}>
                <Box
                  position="relative"
                  width="80%"
                  height="100%"
                >
                  <Slider {...settings}>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faPython} style={{ color: "#2B5B84" }} />
                    </div>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faNodeJs} style={{ color: "#68A063" }} />
                    </div>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faReact} style={{ color: "#61DAFB" }} />
                    </div>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faJs} style={{ color: "#F7DF1E" }} />
                    </div>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faHtml5} style={{ color: "#E34C26" }} />
                    </div>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faCss3Alt} style={{ color: "#1572B6" }} />
                    </div>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faGithub} style={{ color: "#181717" }} />
                    </div>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faGitlab} style={{ color: "#FCA326" }} />
                    </div>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faAws} style={{ color: "#232F3E" }} />
                    </div>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faDocker} style={{ color: "#2496ED" }} />
                    </div>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faJenkins} style={{ color: "#D24939" }} />
                    </div>
                    <div>
                      <FontAwesomeIcon size="5x" icon={faLinux} style={{ color: "#FCC624" }} />
                    </div>
                  </Slider>
                </Box>
              </Flex>
            </div>

            <div data-aos="zoom-in-left" data-aos-duration="2000">
              <Text
              ref={ref}
              sx={{
                fontFamily: 'Space Mono',
                letterSpacing: '2px',
                paddingTop: '25%',
                paddingBottom: '20px',
              }}
              fontSize={fontSizeHeading}
              pl={5}
            >
              <Text fontSize={fontSizeHeadingNo} color={textColor} display="inline">
                4.
              </Text>
              PROJECT SHOWCASE
            </Text>
          </div>

          <Text sx={{ fontSize: "18px"}}>Below is a highlight of some of the projects under my belt however you can find all projects within my <Link>GitHub</Link></Text>
          {/* PROJECT 1 */}

          {!isDesktop ? (
          <>
          <Stack spacing={4} pt={10}>
            <Card 
              maxW='md'
              variant="outline"
              sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                  color: "white",
                  padding: "10px",
                }}
            >
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Box>
                      <Heading size='sm' fontSize="20px">Fileflo</Heading>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text fontSize={{ base: "14px", md: "18px" }}>
                  Fileflo is a decentralised blockchain file-sharing web application that offers an impressive level of security and privacy for users. Its advanced symmetric encryption technology ensures the utmost privacy and protection for all files, while the distributed file system provides efficient and seamless retrieval of files. With its comprehensive architecture consisting of a dApp, IPFS file storage, and a serverless AWS backend, Fileflo is the ultimate solution for secure and private file sharing.
                </Text>
              </CardBody>
              <Image
                src='/assets/fileflo-poster.png'
                width={500}
                height={100}
                objectFit='cover'
                alt='Chakra UI'
              />
              <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
              >
                <Box overflow="auto">
                  <Text fontSize={{ base: "14px", md: "18px" }}>
                    React&nbsp;&nbsp;MaterialUI&nbsp;&nbsp;Nodejs&nbsp;&nbsp;Flask&nbsp;Truffle&nbsp;&nbsp;Ganache&nbsp;&nbsp;Web3&nbsp;&nbsp;Solidity
                  </Text>
                  <Text pb={4} fontSize={{ base: "14px", md: "18px" }}>
                    <b>AWS:</b>&nbsp;&nbsp;S3&nbsp;&nbsp;EC2&nbsp;&nbsp;CloudFront AppSync&nbsp;&nbsp;DynamoDB&nbsp;&nbsp;KMS&nbsp;&nbsp;Lambda API Gateway&nbsp;&nbsp;Amplify&nbsp;&nbsp;Cognito&nbsp;&nbsp;SES&nbsp;&nbsp;CloudWatch
                  </Text>
                </Box>
                <a href="https://github.com/joaofam/FILEFLO" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    size="2x"
                    icon={faGithub}
                    color={githubIconColor}
                    style={{ transition: 'transform 0.2s' }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.3)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                </a>
              </CardFooter>
            </Card>

            <Card 
              pt={10}
              maxW='md'
              variant="outline"
              sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                  color: "white",
                  padding: "10px",
                }}
            >
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Box>
                      <Heading size='sm' fontSize="20px">Venato</Heading>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text fontSize={{ base: "14px", md: "18px" }}>
                  An android application built upon the React Native framework, specifically designed to address the prevalent issue of stolen bikes in today's world. By harnessing the power of IoT GPS/GSM devices integrated with Arduino technology, Venato enables users to effectively track the real-time location of their bikes and receive the information directly on their mobile devices.
                </Text>
              </CardBody>
              <Image
                src='/assets/Venato.png'
                width={500}
                height={100}
                objectFit='cover'
                alt='Chakra UI'
              />
              <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
              >
                <Box overflow="auto">
                  <Text fontSize={{ base: "14px", md: "18px" }}>
                    React&nbsp;&nbsp;Android Studio&nbsp;IOT&nbsp;&nbsp;Python&nbsp;&nbsp;Arduino IDE
                  </Text>
                  <Text pb={4} fontSize={{ base: "14px", md: "18px" }}>
                    <b>AWS:</b>&nbsp;Lambda&nbsp;&nbsp;Amplify&nbsp;&nbsp;Cognito&nbsp;&nbsp;DynamoDB&nbsp;&nbsp;S3
                  </Text>
                  <a href="https://github.com/joaofam/Venato" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      size="2x"
                      icon={faGithub}
                      color={githubIconColor}
                      style={{ transition: 'transform 0.2s' }}
                      onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.3)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                    />
                  </a>
                </Box>
              </CardFooter>
            </Card>

            <Card 
              pt={10}
              maxW='md'
              variant="outline"
              sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                  color: "white",
                  padding: "10px",
                }}
            >
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Box>
                      <Heading size='sm' fontSize="20px">joaopereira.ie</Heading>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text fontSize={{ base: "14px", md: "18px" }}>
                  Welcome to my personal website, joaopereira.ie! This site serves as a visually engaging platform to showcase my skills and experience. Built with React and Next.js, the website is hosted on Vercel, providing a seamless and high-performance user experience. Designed with responsiveness in mind, the site can be viewed on all devices, ensuring a smooth browsing experience for everyone. Explore and learn more about my professional journey and expertise.
                </Text>
              </CardBody>
              <Image
                src='/assets/joaopereira2.png'
                width={500}
                height={100}
                objectFit='cover'
                alt='Chakra UI'
              />
              <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
              >
                <Box overflow="auto">
                <Text pb={4} fontSize={{ base: "14px", md: "18px" }}>
                  React&nbsp;&nbsp;Nextjs&nbsp;&nbsp;FramerMotion&nbsp;&nbsp;AOS&nbsp;&nbsp;ChakraUI&nbsp;&nbsp;Vercel&nbsp;&nbsp;Emailjs
                </Text>
                  <a href="https://github.com/joaofam/joaopereira.ie" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      size="2x"
                      icon={faGithub}
                      color={githubIconColor}
                      style={{ transition: 'transform 0.2s' }}
                      onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.3)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                    />
                  </a>
                </Box>
              </CardFooter>
            </Card>
          </Stack>
          </>

          ) : (

          <Box mt={10}>
            <Stack direction="column" spacing={4}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                    // objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='/assets/fileflo-poster.png'
                    alt='Caffe Latte'
                    width={400}
                    height={300}
                    p={2}
                    borderRadius="full"
                  />
                  <Flex direction="column">
                    <div data-aos="zoom-in-right" data-aos-duration="2000" data-aos-delay="200">
                      <Card
                        position="relative"
                        left="-50px"
                        zIndex="10"
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.06)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                            borderRadius: "10px",
                            color: "white",
                            padding: "10px",
                          }}
                      >
                        <Stack>
                          <CardBody>
                            <Heading fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>Fileflo</Heading>
                            <Divider />
                            <Text py='2'>
                              Fileflo is a decentralised blockchain file-sharing web 
                              application that offers an impressive level of security and 
                              privacy for users. Its advanced symmetric encryption technology
                              ensures the utmost privacy and protection for all files, while 
                              the distributed file system provides efficient and seamless 
                              retrieval of files. With its comprehensive architecture 
                              consisting of a dApp, IPFS file storage, and a serverless AWS 
                              backend, Fileflo is the ultimate solution for secure and 
                              private file sharing.
                            </Text>
                          </CardBody>
                        </Stack>
                      </Card>
                    </div>
                    <div data-aos="zoom-in-right" data-aos-duration="2000" data-aos-delay="400">
                      <Card
                        position="relative"
                        left="-50px"
                        zIndex="10"
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        pl={12}
                        pr={12}
                        sx={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                          }}
                      >
                        <Stack>
                          <CardBody>
                            <Text>
                              React&nbsp;&nbsp;&nbsp;MaterialUI&nbsp;&nbsp;&nbsp;Nodejs&nbsp;&nbsp;&nbsp;Flask&nbsp;&nbsp;&nbsp;Truffle&nbsp;&nbsp;&nbsp;Ganache&nbsp;&nbsp;&nbsp;Web3&nbsp;&nbsp;&nbsp;Solidity
                            </Text>
                            <Text pb={4}>
                              <b>AWS:</b>&nbsp;&nbsp;&nbsp;S3&nbsp;&nbsp;&nbsp;EC2&nbsp;&nbsp;&nbsp;CloudFront&nbsp;&nbsp;&nbsp;AppSync&nbsp;&nbsp;&nbsp;DynamoDB&nbsp;&nbsp;&nbsp;KMS&nbsp;&nbsp;&nbsp;Lambda&nbsp;&nbsp;&nbsp;API Gateway&nbsp;&nbsp;&nbsp;Amplify&nbsp;&nbsp;&nbsp;Cognito&nbsp;&nbsp;&nbsp;SES&nbsp;&nbsp;&nbsp;CloudWatch
                            </Text>
                            <a href="https://github.com/joaofam/FILEFLO" target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon
                                size="2x"
                                icon={faGithub}
                                color={githubIconColor}
                                style={{ transition: 'transform 0.2s' }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.3)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                              />
                            </a>
                          </CardBody>
                        </Stack>
                      </Card>
                    </div>
                  </Flex>
                </Box>
                   

                <Box pt={10} display="flex" justifyContent="center" alignItems="center">
                  <Flex direction="column">
                    <div data-aos="zoom-in-left" data-aos-duration="2000" data-aos-delay="200">
                      <Card
                        position="relative"
                        right="-50px"
                        zIndex="10"
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.06)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                            borderRadius: "10px",
                            color: "white",
                            padding: "10px",
                          }}
                      >
                        <Stack>
                          <CardBody>
                            <Heading size='md'>Venato</Heading>
                            <Divider />
                            <Text py='2'>
                              An android application built upon the React Native framework,
                              specifically designed to address the prevalent issue of stolen 
                              bikes in today's world. By harnessing the power of IoT 
                              GPS/GSM devices integrated with Arduino technology, 
                              Venato enables users to effectively track the real-time 
                              location of their bikes and receive the information directly 
                              on their mobile devices.
                            </Text>
                          </CardBody>
                        </Stack>
                      </Card>
                    </div>
                    <div data-aos="zoom-in-left" data-aos-duration="2000" data-aos-delay="400">
                      <Card
                        position="relative"
                        right="-50px"
                        zIndex="10"
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        pl={12}
                        pr={12}
                        sx={{
                            boxShadow: "none",
                            backgroundColor: "transparent",
                          }}
                      >
                      <Stack>
                        <CardBody>
                          <Text>
                          <Text>
                            React&nbsp;&nbsp;&nbsp;Android Studio&nbsp;&nbsp;&nbsp;IOT&nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;Arduino IDE
                          </Text>
                          </Text>
                          <Text pb={4}>
                            <b>AWS:</b> Lambda&nbsp;&nbsp;&nbsp;Amplify&nbsp;&nbsp;&nbsp;Cognito&nbsp;&nbsp;&nbsp;DynamoDB&nbsp;&nbsp;&nbsp;S3
                          </Text>
                          <a href="https://github.com/joaofam/Venato" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                              size="2x"
                              icon={faGithub}
                              color={githubIconColor}
                              style={{ transition: 'transform 0.2s' }}
                              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.3)'; }}
                              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                            />
                          </a>
                        </CardBody>
                      </Stack>
                    </Card>
                  </div>
                  </Flex>
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='/assets/Venato.png'
                    alt='Caffe Latte'
                    width={400}
                    height={100}
                    p={2}
                  />
                </Box>

                {/* PROJECT 3 */}
                <Box pt={10} display="flex" justifyContent="center" alignItems="center">
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='/assets/website.png'
                    alt='Caffe Latte'
                    width={600}
                    height={200}
                    p={2}
                    borderRadius="full"
                  />
                  <Flex direction="column">
                    <div data-aos="zoom-in-right" data-aos-duration="2000" data-aos-delay="200">
                      <Card
                        position="relative"
                        left="-50px"
                        zIndex="10"
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.06)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                            borderRadius: "10px",
                            color: "white",
                            padding: "10px",
                          }}
                      >
                        <Stack>
                          <CardBody>
                            <Heading size='md'>joaopereira.ie (this website)</Heading>
                            <Divider />
                            <Text py='2'>
                            Welcome to my personal website, joaopereira.ie! This site 
                            serves as a visually engaging platform to showcase my skills 
                            and experience. Built with React and Next.js, the website is 
                            hosted on Vercel, providing a seamless and high-performance user 
                            experience. Designed with responsiveness in mind, the site can 
                            be viewed on all devices, ensuring a smooth browsing experience 
                            for everyone. Explore and learn more about my professional 
                            journey and expertise.
                            </Text>
                          </CardBody>
                        </Stack>
                      </Card>
                    </div>
                    <div data-aos="zoom-in-right" data-aos-duration="2000" data-aos-delay="400">
                      <Card
                        position="relative"
                        left="-50px"
                        zIndex="10"
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        pl={12}
                        pr={12}
                        sx={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                          }}
                      >
                      <Stack>
                        <CardBody>
                          <Text pb={4}>
                            React&nbsp;&nbsp;&nbsp;Nextjs&nbsp;&nbsp;&nbsp;FramerMotion&nbsp;&nbsp;&nbsp;ChakraUI&nbsp;&nbsp;&nbsp;Vercel&nbsp;&nbsp;&nbsp;Emailjs
                          </Text>
                            <a href="https://github.com/joaofam/joaopereira.ie" target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon
                                size="2x"
                                icon={faGithub}
                                color={githubIconColor}
                                style={{ transition: 'transform 0.2s' }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.3)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                              />
                            </a>
                          </CardBody>
                        </Stack>
                      </Card>
                    </div>
                  </Flex>
                </Box>
              </Stack>
          </Box>
          )}
          <div data-aos="zoom-up" data-aos-duration="2000">
          <Text
            ref={ref}
            sx={{
              fontFamily: 'Space Mono',
              letterSpacing: '2px',
              paddingTop: '25%',
              paddingBottom: '20px',
            }}
            fontSize={fontSizeHeading}
            pl={5}
          >
          <Text fontSize={fontSizeHeadingNo} color={textColor} display="inline">
            5.
          </Text>
            CONTACT
          </Text>
        </div>

        <div data-aos="zoom-up" data-aos-duration="2000" data-aos-delay="200">
          <Text pb={5} fontSize={{ base: "14px", md: "18px" }}>
            Check out my socials message me on any of the below platforms or directly send me a message
          </Text>
        

        </div>
        {isDesktop ? (
        <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap">
          <Flex direction="column" width={{ base: "100%", md: "50%" }}>
            <LinkBox as='article' transition='transform 0.2s linear' _hover={{ transform: 'scale(1.05)' }}>
              <Container maxW='600px' pb={2}>
                <div data-aos="zoom-in-up" data-aos-duration="4000" data-aos-delay="400">
                <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  variant='outline'
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                    color: "white",
                  }}
                >
                  <Box 
                    position='relative' 
                    maxW={{ base: '100%', sm: '200px' }} 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="stretch"
                  >
                    <Image
                      objectFit='cover'
                      src='/assets/black.png'
                      alt='Black background'
                      width={100}
                      height={100}
                      
                    />
                    <FontAwesomeIcon 
                      size="4x" 
                      icon={faGithub} 
                      style={{ 
                        color: "#fff", 
                        position: 'absolute', 
                        marginTop: "30px" 
                      }}/>
                  </Box>

                  <Stack>
                    <CardBody>
                      <Heading size='md'>GitHub</Heading>
                      <Text py='2'>Check out my GitHub</Text>
                      <LinkOverlay href="https://github.com/joaofam">
                        <Link>https://github.com/joaofam</Link>
                      </LinkOverlay>
                    </CardBody>
                  </Stack>
                </Card>
                </div>
              </Container>
            </LinkBox>
          </Flex>
          <Flex direction="column" width={{ base: "100%", md: "50%" }}>
            <LinkBox as='article' transition='transform 0.2s linear' _hover={{ transform: 'scale(1.05)' }}>
              <Container maxW='600px' pb={2}>
                <div data-aos="zoom-in-up" data-aos-duration="4000" data-aos-delay="600">
                  <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    <Box position='relative' maxW={{ base: '100%', sm: '200px' }} display="flex" justifyContent="center" alignItems="center">
                      <Image
                        objectFit='cover'
                        src='/assets/blue.png'
                        alt='Caffe Americano'
                        width={100}
                        height={100}
                      />
                      <FontAwesomeIcon size="4x" icon={faLinkedin} style={{ color: "#fff", position: 'absolute' }} />
                    </Box>

                    <Stack>
                      <CardBody>
                        <Heading size='md'>LinkedIn</Heading>
                        <Text py='2'>Connect with me on LinkedIn @</Text>
                        <LinkOverlay href="https://www.linkedin.com/in/joao-joao/">
                          <Link>linkedin.com/in/joao-joao/</Link>
                        </LinkOverlay>
                      </CardBody>
                    </Stack>
                  </Card>
                </div>
              </Container>
            </LinkBox>
            </Flex>
            
            <Flex direction="column" width={{ base: "100%", md: "50%" }}>
              <LinkBox as='article' transition='transform 0.2s linear' _hover={{ transform: 'scale(1.05)' }}>
                <Container maxW='600px' pb={2}>
                  <div data-aos="zoom-in-up" data-aos-duration="4000" data-aos-delay="800">
                    <Card
                      direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      variant='outline'
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                        borderRadius: "10px",
                        color: "white",
                      }}
                    >
                      <Box 
                        position='relative' 
                        maxW={{ base: '100%', sm: '200px' }} 
                        display="flex" 
                        justifyContent="center" 
                        alignItems="stretch"
                      >
                        <Image
                          objectFit='cover'
                          src='/assets/green.png'
                          alt='Caffe Americano'
                          width={100}
                          height={100}
                          
                        />
                        <FontAwesomeIcon 
                          size="4x" 
                          icon={faWhatsapp} 
                          style={{ 
                            color: "#fff", 
                            position: 'absolute', 
                            marginTop: "30px" 
                          }}/>
                      </Box>

                      <Stack>
                        <CardBody>
                          <Heading size='md'>WhatsApp</Heading>
                          <Text py='2'>WhatsApp me @</Text>
                          <LinkOverlay href="https://wa.me/353833294067">
                            <Link>+353 83 329 4067</Link>
                          </LinkOverlay>
                        </CardBody>
                      </Stack>
                    </Card>
                  </div>
                </Container>
              </LinkBox>
            </Flex>
            
            <Flex direction="column" width={{ base: "100%", md: "50%" }}>
            <LinkBox as='article' transition='transform 0.2s linear' _hover={{ transform: 'scale(1.05)' }}>
              <Container maxW='600px'>
                <div data-aos="zoom-in-up" data-aos-duration="4000" data-aos-delay="1000">
                  <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    <Box
                      position='relative'
                      maxW={{ base: '100%', sm: '200px' }}
                      display="flex"
                      justifyContent="center"
                      alignItems="stretch"
                    >
                      <Image
                        objectFit='cover'
                        src='/assets/red.png'
                        alt='Caffe Americano'
                        width={100}
                        height={300}
                      />
                      <FontAwesomeIcon
                        size="4x"
                        icon={faGoogle}
                        style={{
                          color: "#fff",
                          position: 'absolute',
                          marginTop: "30px"
                        }} />
                    </Box>
                    <Stack>
                      <CardBody>
                        <Heading size='md'>Gmail</Heading>
                        <Text py='2'>Email me @</Text>
                        <LinkOverlay href="mailto:joaopereira2213@gmail.com">
                          <Link>joaopereira2213@gmail.com</Link>
                        </LinkOverlay>
                      </CardBody>
                    </Stack>
                  </Card>
                </div>
              </Container>
            </LinkBox>
          </Flex>
        </Flex>
        ) : (
          <Center>
            <SimpleGrid columns={[2, null, 2]} spacing="75px">
              <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000">
                <a href="https://github.com/joaofam" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon size="3x" icon={faGithub} style={{ color: listItem }} />
                </a>
              </div>
              <div data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1200">
                <a href="https://www.linkedin.com/in/joao-joao/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon size="3x" icon={faLinkedin} style={{ color: listItem }} />
                </a>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1200">
                <a href="mailto:joaopereira2213@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon size="3x" icon={faGoogle} style={{ color: listItem }} />
                </a>
              </div>
              <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1400">
                <a href="https://wa.me/353833294067" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon size="3x" icon={faWhatsapp} style={{ color: listItem }} />
                </a>
              </div>
            </SimpleGrid>
          </Center>
        )}
        {alert.show && (
          <Box my={4} ml="25%" mr="25%">
            <Alert status={alert.status} borderRadius={4}>
              <AlertIcon />
              <AlertTitle mr={2}>{alert.title}</AlertTitle>
              <AlertDescription>{alert.description}</AlertDescription>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => setAlert({ ...alert, show: false })}
              />
            </Alert>
          </Box>
        )}
        <Flex direction={isDesktop ? "row" : "column"}>
        <Text flex="1" fontSize={{ base: "14px", md: "18px" }} align="center" pt={useBreakpointValue({base: "10", md: "20"})} pr={4} pl={4} pb={useBreakpointValue({base: "10", md: "0"})}>
          Thank you for visiting my portfolio website!
          <br /><br />
          If you have any questions, inquiries, or if 
          you'd like to <Text display="inline" color={textColor} fontFamily="Space Mono">collaborate</Text> and <Text display="inline" color={textColor} fontFamily="Space Mono">connect</Text>,
          I would love to hear from you.
          {isDesktop ? (
            <>
              <br /><br />
              Please feel free 
              to send me a message using the form and I'll 
              get back to you as soon as possible. 
              <br /><br />
              I'm excited to explore opportunities and work
              together to bring creative ideas to life. 
              <br /><br />
              Looking forward to connecting with you!
            </>
          ) : null}
        </Text>
          <Flex direction="column" align="center" flex="1">
            <div data-aos="zoom-in-up" data-aos-duration="4000" data-aos-delay="200">
            <Flex
              direction='column'
              p={8}
              borderWidth={1}
              borderRadius={8}
              boxShadow='lg'
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '20px 20px 22px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                color: 'white',
                width: '100%',
              }}
            >
              <Box textAlign='center'>
                <Text         
                  sx={{
                    letterSpacing: "2px",
                    fontSize: "28px",
                  }}
                  color={listItem}>
                  Send me a message
                </Text>
              </Box>
              <Box my={4} textAlign='left'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                  <FormLabel pb={2}>Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <FontAwesomeIcon icon={faUser} style={{ color: '#504d56' }} />
                    </InputLeftElement>
                    <Input
                      isRequired
                      type='text'
                      placeholder='John Doe'
                      {...register('name', { required: true })}
                      color={listItem}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel pt={2}>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <FontAwesomeIcon icon={faEnvelope} style={{ color: '#504d56' }} />
                    </InputLeftElement>
                    <Input
                      isRequired
                      type='email'
                      placeholder='test@test.com'
                      {...register('email', { required: true })}
                      color={listItem}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl pt={2}>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder='Input message'
                    {...register('message', { required: true })}
                    color={listItem}
                  ></Textarea>
                </FormControl>

                <Button width='full' mt={4} type='submit'>
                  Send
                </Button>
              </form>
              </Box>
            </Flex>
            </div>
          </Flex>
        </Flex>
      </Container>
      <Flex
        align="center"
        justify="center"
        color="white"
        py={4}
        mt={8}
        pt={20}
      >
        <Box w="full" position="relative">
          <Box
            position="absolute"
            bottom="0"
            left="0"
            w="full"
            py={2}
            textAlign="center"
          >
          <Text fontSize={{base: "14px", md: "16px"}} pb={2}>
            @ 2023 João Pereira. All rights reserved.
          </Text>
          <Tag>
            <Text>Deployed on Vercel</Text>
          </Tag>
          </Box>
        </Box>
      </Flex>

          
    </Box>      
  </Container>
</Box>
</>
);};

export default Page;
