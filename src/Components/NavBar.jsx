import React from "react";

import logo from "../img/logo.png";
import logo_dark from "../img/logo_dark.png";
import { Link, useNavigate } from "react-router-dom";
// prettier-ignore
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IoAdd, IoLogOut, IoMoon, IoSearch, IoSunny } from "react-icons/io5";
import zebeclogo from "../assets/zebec-logo.jpg";

const NavBar = ({ user, setsearchTerm, searchTerm }) => {
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

      {/* <InputGroup mx={6} width="60vw">
        <InputLeftElement
          pointerEvents="none"
          children={<IoSearch fontSize={25} />}
        />
        <Input
          type="text"
          placeholder="Search..."
          fontSize={18}
          fontWeight="medium"
          variant={"filled"}
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          onFocus={() => navigate("/search")}
        />
      </InputGroup> */}

      <Flex justifyContent={"center"} alignItems="center">
        {/* <Flex
          width={"40px"}
          height="40px"
          justifyContent={"center"}
          alignItems="center"
          cursor={"pointer"}
          borderRadius="5px"
          onClick={toggleColorMode}
        >
          {colorMode == "light" ? (
            <IoMoon fontSize={25} />
          ) : (
            <IoSunny fontSize={25} />
          )}
        </Flex> */}

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
                navigate("/login", { replace: true });
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
