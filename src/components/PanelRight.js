import React from "react";
// Chakra-UI
import { Box } from "@chakra-ui/react";
// Redux
import { useSelector } from "react-redux";
import { MDXProvider } from "@mdx-js/react";

import ReactMarkdown from "react-markdown";

function PanelRight() {
  const text = useSelector((state) => state.text.text);
  const sampleText = useSelector((state) => state.text.sampleText);
  const help = useSelector((state) => state.text.help);

  return (
    <Box
      w="45%"
      bg="blue.100"
      h="100%"
      p="10px"
      fontSize="md"
      __css={{ boxShadow: "10px 10px #646464" }}
      overflow="auto"
    >
      <ReactMarkdown>{help ? sampleText : text}</ReactMarkdown>
    </Box>
  );
}

export default PanelRight;
