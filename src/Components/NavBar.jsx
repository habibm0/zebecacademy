import React, { useState }  from "react";
import { getProvider } from "zebecprotocol-sdk";

import { Link, useNavigate } from "react-router-dom";
// prettier-ignore
import { Box, Button, Flex, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IoAdd, IoLogOut, IoMoon, IoSearch, IoSunny } from "react-icons/io5";
import zebeclogo from "../assets/zebec-logo.jpg";

const NavBar = ({ user,}) => { 
  const [connected, setConnected] = useState(false);
  const walletConnect = async () => await getProvider();

  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems="center"
      width={"100vw"}
      p={4}
    >
      <Link to={"/"}>
        {/* <Image src={colorMode == "light" ? logo_dark : logo} width={"180px"} /> */}
        <Flex alignItems={"center"}>
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
      </Link>

      <Flex justifyContent={"center"} alignItems="center">
        <Flex cursor={"pointer"} onClick={walletConnect}>
          <Button variant={"solid"}>Wallet Connect</Button>
        </Flex>

        {/* crerate Btn */}
        <Link to={"/create"}>
          <Flex
            justifyContent={"center"}
            alignItems="center"
            bg="#00BFFF"
            width="40px"
            height="40px"
            borderRadius="full"
            mx={6}
            cursor="pointer"
            _hover={{ shadow: "md" }}
            transition="ease-in-out"
            transitionDuration={"0.3s"}
          >
            <IoAdd fontSize={25} color={"#f1f1f1"} />
          </Flex>
        </Link>

        <Menu>
          <MenuButton>
            <Image
              src={user?.photoURL}
              width="40px"
              height="40px"
              minWidth={"40px"}
              rounded="full"
              bg="#00BFFF"
            />
          </MenuButton>
          <MenuList shadow={"lg"}>
            <Link to={`/userDetail/${user?.uid}`}>
              <MenuItem>My Account</MenuItem>
            </Link>
            <MenuItem
              flexDirection={"row"}
              alignItems="center"
              gap={4}
              onClick={() => {
                localStorage.clear();
                navigate("/welcome", { replace: true });
              }}
            >
              Logout <IoLogOut fontSize={20} />
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default NavBar;
