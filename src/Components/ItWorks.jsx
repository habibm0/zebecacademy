import {
  Box,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  Link,
} from "@chakra-ui/react";
import joinGroup from "../assets/joinagroup.svg";
import ticket from "../assets/ticket.svg";
import startGroup from "../assets/start-group.svg";

function ItWorks() {
  return (
    <Box>
      <Container maxWidth="container.xl" my="20">
        <Heading align="center" as="h3" size="lg" pb="2">
          Land Your Dream Job With Zebec Academy
        </Heading>
        <Box align="center" maxW="700px" mx="auto" pb="10">
          Meet new people who share your interests through online and in-person
          events. It’s free to create an account.
        </Box>
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={6}
        >
          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={joinGroup} alt="brand" />
            <Heading as="h5" size="md">
              <Link>
                <Box color="gray.600" pb="4">
                  Learn Unique Skills
                </Box>
              </Link>
            </Heading>
            <p>
              Blockchain, Solidity, Hyperledger and many more, all at your
              fingertips
            </p>
          </Box>

          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={ticket} alt="brand" />
            <Heading as="h5" size="md">
              <Link>
                <Box color="gray.600" pb="4">
                  Get Blockchain Certified
                </Box>
              </Link>
            </Heading>
            <p>And get recognized by industry leaders</p>
          </Box>
          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={startGroup} alt="brand" />
            <Heading as="h5" size="md">
              <Box color="gray.600" pb="4">
                <Link>Join weekly projects</Link>
              </Box>
            </Heading>
            <Box fontSize="sm">
              Challenge yourself with real-life development projects
            </Box>
          </Box>
        </Grid>
        <Box align="center" mt="16">
          <Button
            _hover={{ opacity: "0.8" }}
            bg="#00BFFF"
            color="#ffffff"
            fontWeight="normal"
            size="md"
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ItWorks;
