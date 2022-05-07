import {
  Box,
  Image,
  Button,
  Container,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import zebeclogo from "../assets/zebec-logo.jpg";
import solidtyandnft from "../assets/solidtyandnft.svg";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseApp } from "../firebase-config.js";
import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router-dom";

function Banner() {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const firebaseDb = getFirestore(firebaseApp);

  const navigate = useNavigate();

  const login = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { refreshToken, providerData } = user;
    console.log(refreshToken, providerData);

    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    await setDoc(
      doc(firebaseDb, "users", providerData[0].uid),
      providerData[0]
    );

    navigate("/", { replace: true });
  };
  return (
    <>
      <header>
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          ml={6}
          mr={6}
        >
          <Flex alignItems={"center"} pt={2}>
            <Image
              boxSize="50px"
              objectFit={"cover"}
              src={zebeclogo}
              alt="brand"
              borderRadius={"lg"}
            />
            <Text fontSize="20px" ml={5}>
              Zebec Academy
            </Text>
          </Flex>
          <Box>
            <Button
              leftIcon={<FcGoogle />}
              _hover={{ opacity: "0.8" }}
              bg="#00BFFF"
              fontWeight="normal"
              colorScheme="gray.600"
              fontSize="md"
              color="#ffffff"
              onClick={() => login()}
            >
              Sign in with google
            </Button>
          </Box>
        </Box>
      </header>
      <Box>
        {/* main punch text */}
        <Container maxW="container.xl">
          <Box
            d="flex"
            alignItems="center"
            py="20"
            flexDirection={{
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              base: "column",
            }}
          >
            <Box mr="6">
              <Heading as="h1" size="2xl">
                <Box fontWeight="black">Build your Web3 Skills</Box>
              </Heading>
              <Box mt="6" fontWeight="medium">
                Master Crypto and Web3 today with our industry leading courses
                and weekly projects.
              </Box>
            </Box>
            <Box w="100%">
              <Image w="100%" src={solidtyandnft} alt="illustration" />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Banner;
