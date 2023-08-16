import React, { useState } from "react";
// Chakra-UI
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { changeHelp } from "../redux/textSlice";

function Header() {
  const [helpStyle, setHelpStyle] = useState({
    boxShadow: "10px 10px #646464",
    transition: "box-shadow 0.2s ease-out",
  });

  const [helpHover, setHelpHover] = useState({
    boxShadow: "7px 7px #646464",
  });

  const dispatch = useDispatch();

  const onClick = () => {
    if (helpHover.boxShadow === "none") {
      setHelpStyle({ ...helpStyle, boxShadow: "10px 10px #646464" });
      setHelpHover({ boxShadow: "7px 7px #646464" });
    } else {
      setHelpStyle({ ...helpStyle, boxShadow: "none" });
      setHelpHover({ boxShadow: "none" });
    }
    dispatch(changeHelp());
  };

  return (
    <Box>
      <Flex>
        <Spacer />
        <Box
          w="40px"
          h="40px"
          textAlign="center"
          lineHeight="40px"
          bg="blue.100"
          m="20px"
          fontSize="35px"
          fontWeight="extrabold"
          fontFamily="sans-serif"
          cursor="pointer"
          __css={helpStyle}
          _hover={helpHover}
          onClick={onClick}
        >
          ?
        </Box>
      </Flex>
      <Heading textAlign="center" mt="5px">Markdown Previewer</Heading>
    </Box>
  );
}

export default Header;
