// theme.js
import { extendTheme } from "@chakra-ui/react";

import Button from "./components/button";
import borders from "./foundations/borders";
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import fontWeights from "./foundations/fontWeights";
import textStyles from "./foundations/textStyles";

const overrides = {
  borders,
  breakpoints,
  colors,
  fonts,
  fontWeights,
  textStyles,
  components: {
    Button,
  },
};

const customTheme = extendTheme(overrides);

export {customTheme};
