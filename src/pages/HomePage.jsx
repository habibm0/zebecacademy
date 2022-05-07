import React from "react";
import Banner from "../Components/Banner";
import ItWorks from "../Components/ItWorks";
import Stories from "../Components/Stories";
import Footerbottom from "../Components/Footerbottom";
import { Box, Image } from "@chakra-ui/react";
import imageBg from "../assets/bg.svg";

function HomePage() {
  return (
    <div className="App">
      <Box position="absolute" left="0" top="0" right="0">
        <Banner />
        <ItWorks />
        <Stories />
        <Footerbottom />
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
        <Image w="80%" m="auto" objectFit="cover" sizes="300" src={imageBg} />
      </Box>
    </div>
  );
}

export default HomePage;
