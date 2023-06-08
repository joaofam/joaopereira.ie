import { useState, useEffect } from "react";
import { 
  Container,
  Box,
  Heading, 
  Text, 
  chakra,
  SimpleGrid,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  UnorderedList,
  ListItem,
  Stack,
  Link,
  Divider,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Code,
  Grid
} from "@chakra-ui/react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { EmailIcon } from "@chakra-ui/icons";
import Typed from "react-typed";
import Image from 'next/image';
import "./styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  faUbuntu
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import moment from 'moment';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const theme = createTheme();

const Page = () => {
  const icons = [
    { icon: faGitlab, color: "#ff7800" },
    { icon: faAws, color: "#ff9900" },
    { icon: faLinux, color: "#f5c211" },
    { icon: faJenkins, color: "#4584b6" },
    // { icon: faSelenium, color: "#62a0ea" },
    { icon: faJira, color: "#0052cc" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Box
      bgImage="url('/assets/Stars.jpg')"
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
      backgroundAttachment="fixed"
    >
    <Box overflowY="scroll" height="100%">
    <Container position="relative">
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Box textAlign="left" paddingLeft="20px" marginTop="-20px">
          <Heading as="h2" variant="page-title" fontSize="5xl" mb={4}>
            Joao Pereira
          </Heading>
          <Typed
            strings={[
              "Software Developer",
              "Full Stack Developer",
              "Cloud Infrastructure Developer",
            ]}
            typeSpeed={75}
            backSpeed={50}
            backDelay={2000}
            loop
            render={(typedText, currentIndex) => (
              <Text style={{ fontSize: "28px" }}>
                {typedText}
              </Text>
            )}
          />
          <Box marginTop="20px">
            <Flex alignItems="center">
              <FontAwesomeIcon size="2x" icon={faGithub} style={{ color: "white", paddingRight: "20px" }} />
              <FontAwesomeIcon size="2x" icon={faLinkedin} style={{ color: "#0072b1", paddingRight: "20px" }} />
              <FontAwesomeIcon size="2x" icon={faGoogle} style={{ color: "#c71610" }} />
              <Center height="50px"  paddingLeft="10px">
              <Divider orientation="vertical" />
                <Link color="white" fontSize="18px" px="2">Resume</Link>
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
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="200px"
            h="200px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/assets/Joao.png"
              alt="Profile image"
              borderRadius="full"
              width={200}
              height={200}
            />
          </Box>
        </Box>
      </Box>
    </Container>
    <Container maxW="container.2xl">
      <Text      
        sx={{
          letterSpacing: "2px",
          fontSize: "28px",
          paddingTop: "20px",
          paddingBottom: "40px",
        }}
      >
      SKILLS
      </Text>
      <SimpleGrid spacing={3} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
      <Card
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          color: "white",
        }}
      >
          <CardHeader>
            <Heading align="center" size='md'>Backend</Heading>
          </CardHeader>
          <CardBody>
            <UnorderedList>
              <ListItem>Python</ListItem>
              <ListItem>C</ListItem>
              <ListItem>Java</ListItem>
              <ListItem>REST API</ListItem>
              <ListItem>GraphQL</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
          {/* <FontAwesomeIcon
            size="3x"
            icon={currentIcon}
            flip
            style={{
              color: currentIcon === faJava ? "#c64600" : "#4584b6",
              animationDuration: "2s",
            }}
          /> */}
          </CardFooter>

        </Card>
        <Card
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          color: "white",
        }}
        >
          <CardHeader>
            <Heading align="center" size='md'>Frontend</Heading>
          </CardHeader>
          <CardBody>
            <UnorderedList>
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
          <CardFooter>
            <FontAwesomeIcon size="3x" icon={faReact} flip style={{ color: "#62a0ea",  animationDuration: "2s"}} />
            <FontAwesomeIcon size="3x" icon={faJs} flip style={{ color: "#f5c211",  animationDuration: "2s"}} />
            <FontAwesomeIcon size="3x" icon={faHtml5} flip style={{ color: "#e34c26",  animationDuration: "2s"}} />
            <FontAwesomeIcon size="3x" icon={faCss3Alt} flip style={{ color: "#264de4",  animationDuration: "2s"}} />
          </CardFooter>
        </Card>
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <CardHeader>
            <Heading align="center" size='md'>Tools</Heading>
          </CardHeader>
          <CardBody>
            <UnorderedList>
              <ListItem>Git</ListItem>
              <ListItem>JIRA</ListItem>
              <ListItem>AWS Services</ListItem>
              <ListItem>Linux</ListItem>
              <ListItem>CICD</ListItem>
              <ListItem>Jenkins</ListItem>
              <ListItem>Selenium</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icons.map((item, index) => (
              <FontAwesomeIcon
                key={index}
                size="3x"
                icon={item.icon}
                flip
                style={{
                  color: currentIndex === index ? item.color : "transparent",
                  animationDuration: "2s",
                }}
              />
            ))}
          </CardFooter>
        </Card>
      </SimpleGrid>
      <Text
        sx={{
          letterSpacing: "2px",
          fontSize: "28px",
          paddingTop: "20px",
          paddingBottom: "40px",
        }}
      >
      EXPERIENCE & BACKGROUND
      </Text>
      {/* TIMELINE */}
      <Grid templateColumns="1fr 1fr" gap={8} mt={4}>
      <Box>
        <Container>
          <ThemeProvider theme={theme}>
          <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
          </ThemeProvider>
        </Container>
      </Box>
      <Box mt={4}>
        <Stack  spacing={2} direction={"column"}>
        <Container 
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            color: "white",
            width: "100%",
          }}>
          <Text
            sx={{
              letterSpacing: "2px",
              fontSize: "24px",
              paddingTop: "20px",
              paddingBottom: "10px",
            }}
        
        >A LIL BIT ABOUT ME</Text>
          <Text>Registeel was imprisoned by people in ancient times. The metal composing its body is thought to be a curious substance that is not of this earth.It’s a stuffed toy that was thrown away and became possessed, ever searching for the one who threw it away so it can exact its revenge.Vileplume has the world’s largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours them.</Text>
        </Container>
        <Container 
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            color: "white",
            width: "100%",
          }}>
        <Text
            sx={{
              letterSpacing: "2px",
              fontSize: "24px",
              paddingTop: "20px",
              paddingBottom: "10px",
            }}
        > WHAT I 
          <FontAwesomeIcon size="1x" icon={faHeart} style={{ color: "#e01b24", paddingLeft: "20px"}} />
        </Text>
          <UnorderedList>
            <ListItem>Computers and Technology</ListItem>
            <ListItem>
              <Code>Coding</Code>
            </ListItem>
            <ListItem>Ubuntu/Linux  <FontAwesomeIcon size="1x" icon={faUbuntu} style={{ color: "#dd4814"}} /> </ListItem>
            <ListItem>Photography (Film Photography incl. 35mm & 120mm)</ListItem>
            <ListItem>Cycling (My cool fixie)</ListItem>
            <ListItem>Fashion</ListItem>
            <ListItem>Jazz, House and Old-School music</ListItem>
            <ListItem>Hiking/Camping</ListItem>
            <ListItem>My Girlfriend</ListItem>
          </UnorderedList>
        </Container>
        </Stack>
      </Box>
      </Grid>
      <Text
        sx={{
          letterSpacing: "2px",
          fontSize: "28px",
          paddingTop: "20px",
          paddingBottom: "40px",
        }}
      >
      PROJECT SHOWCASE
      </Text>
      {/* PROJECT 1 */}
      <Box mt={10}>
      <Stack direction="column" spacing={4}>
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
            padding: "20px",
          }}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='/assets/fileflo-poster.png'
          alt='Caffe Latte'
          width={200}
          height={200}
          p={2}
          borderRadius="full"
        />
        
        <Stack>
          <CardBody>
            <Heading size='md'>Fileflo</Heading>
            <Divider />

            <Text py='2'>
              Caffè latte is a coffee beverage of Italian origin made with espresso
              and steamed milk.
            </Text>
          </CardBody>
          <CardFooter>
              <Stack direction="column">
                <Heading size='md'>Technologies Used:</Heading>
                <Divider />
                <Text>React, Material UI</Text>
                <Link>Project Link</Link>
              </Stack>
          </CardFooter>
        </Stack>
      </Card>
      {/* PROJECT 2 */}
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
            padding: "20px",
          }}
      > 
        <Stack>
          <CardBody>
            <Heading size='md'>Venato</Heading>
            <Divider />

            <Text py='2'>
              Caffè latte is a coffee beverage of Italian origin made with espresso
              and steamed milk.
            </Text>
          </CardBody>
          <CardFooter>
              <Stack direction="column">
                <Heading size='md'>Technologies Used:</Heading>
                <Divider />
                <Text>React, Material UI</Text>
                <Link>Project Link</Link>
              </Stack>
          </CardFooter>
        </Stack>
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='/assets/Venato.png'
          alt='Caffe Latte'
          width={250}
          height={175}
          p={2}
        />
      </Card>
      {/* PROJECT 3 */}
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
            padding: "20px",
          }}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='/assets/fileflo-poster.png'
          alt='Caffe Latte'
          width={200}
          height={200}
          p={2}
          borderRadius="full"
        />
        
        <Stack>
          <CardBody>
            <Heading size='md'>Fileflo</Heading>
            <Divider />
            <Text py='2'>
              Caffè latte is a coffee beverage of Italian origin made with espresso
              and steamed milk.
            </Text>
          </CardBody>
          <CardFooter>
              <Stack direction="column">
                <Heading size='md'>Technologies Used:</Heading>
                <Divider />
                <Text>React, Material UI</Text>
                <Link>Project Link</Link>
              </Stack>
          </CardFooter>
        </Stack>
      </Card>
      </Stack>
      </Box>
      <Text      
        sx={{
          letterSpacing: "2px",
          fontSize: "28px",
          paddingTop: "20px",
          paddingBottom: "40px",
        }}
      >
      CONTACT
      </Text>
      <Flex width="full" align="center" justifyContent="center">
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "20px 20px 22px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          color: "white",
        }} p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Contact Me</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input isRequired type="email" placeholder="test@test.com" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Input message"></Textarea>
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Send
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
    </Container>
    </Box>
    </Box>
    </>
  );
};

export default Page;
