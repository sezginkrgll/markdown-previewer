import React from "react";
// Chakra-UI
import { Box, Flex, Spacer } from "@chakra-ui/react";
// Components
import Header from "./Header";
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";
import Footer from "./Footer";

function MainContent() {
  return (
    <Box>
      <Header />
      <Flex
        maxW="90%"
        ml="5%"
        mr="5%"
        height="600px"
        minH="450px"
        mt="10px"
        minW="600px"
      >
        <PanelLeft />
        <Spacer />
        <PanelRight />
      </Flex>
      <Footer />
    </Box>
  );
}

export default MainContent;
