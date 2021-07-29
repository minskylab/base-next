import { Colors, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { GlobalStyles } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  // initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors: Colors = {
  primary: "#8F98FE",
  secondary: "#FEE7AF",
  // backgroundDark: "#002832",
  // backgroundDarkLight: "#002832",
  // backgroundDarkLight: "#0a303a",
  // backgroundDarkDeep: "#00222b",
  // backgroundDark: "#00222b",
};

const styles: GlobalStyles = {
  global: () => ({
    "html, body": {
      backgroundColor: "backgroundDark",
    },
  }),
};

const customTheme = extendTheme({ colors, config, styles });

export { customTheme };