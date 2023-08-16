import { createSlice } from "@reduxjs/toolkit";

const sampleText = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

export const textSlice = createSlice({
  name: "text",
  initialState: {
    sampleText,
    text: `this is user input`,
    isLoading: true,
    help: false,
  },
  reducers: {
    addText: (state, action) => {
      state.text = action.payload;
    },
    changeHelp: (state, action) => {
      state.help = !state.help;
    },
  },
});

export const { addText, changeHelp } = textSlice.actions;

export default textSlice.reducer;
