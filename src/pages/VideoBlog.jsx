import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Catergory from "../components/Catergory";
import Create from "../components/Create";
import Feed from "../components/Feed";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import VideoPin from "../components/VideoPin";
import imageBg from "../assets/bg.svg";
import { catergories } from "../data";

const VideoBlog = ({ user }) => {
  return (
    <>
      <Box position="absolute" left="0" top="0" right="0">
        <NavBar user={user} />
        <Flex width={"100vw"}>
          <Flex width={"100%"} px={4}>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/create" element={<Create />} />
              <Route path="/videoDetail/:videoId" element={<VideoPin />} />
            </Routes>
          </Flex>
        </Flex>
      </Box>
      <Box
        position="relative"
        top="0"
        bottom="0"
        right="0"
        left="0"
        height="100vh"
        zIndex={-1}
      >
        <Image w="70%" m="auto" objectFit="cover" sizes="300" src={imageBg} />
      </Box>
    </>
  );
};

export default VideoBlog;
