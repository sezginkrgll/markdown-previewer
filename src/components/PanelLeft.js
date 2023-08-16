import React, { useEffect, useState } from "react";
// Chakra-UI
import { Box, Textarea } from "@chakra-ui/react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addText } from "../redux/textSlice";

function PanelLeft() {
  const [text, setText] = useState("this is user input");
  const sampleText = useSelector((state) => state.text.sampleText);
  const help = useSelector((state) => state.text.help);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    dispatch(addText(value));
  };

  return (
    <>
      <Textarea
        bg="blue.100"
        p="10px"
        size="sm"
        resize="none"
        w="45%"
        h="100%"
        variant="unstyled"
        value={help ? sampleText : text}
        fontSize="md"
        onChange={handleChange}
        readOnly={help}
        outline="none"
        border="0"
        onResize="none"
        m={0}
        style={{ boxShadow: "10px 10px #646464" }}
      />
    </>
  );
}

export default PanelLeft;
