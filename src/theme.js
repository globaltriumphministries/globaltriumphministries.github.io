import { extendTheme } from "@chakra-ui/react";

import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#008e35",
    200: "#84c225",
  },
  secondary: {
    100: "#0267ff",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  body: "sans-serif",
  heading: "sans-serif",
};

const styles = {
  global: {
    html: {
      fontSize: "92%",
    },
    // "body::-webkit-scrollbar": {
    //   width: ".5rem",
    //   height: "4rem",
    // },
    // "body::-webkit-scrollbar-thumb": {
    //   background: "secondary.100",
    //   // borderRadius: "2rem",
    // },
    // "body::-webkit-scrollbar-track": {},

    // "div::-webkit-scrollbar": {
    //   width: ".4rem",
    //   height: "1rem",
    // },
    // "div::-webkit-scrollbar-thumb": {
    //   background: "",
    //   borderRadius: "0",
    // },
    // "div::-webkit-scrollbar-track": {},
  },
};

const noUnderline = defineStyle({
  textDecoration: "none",
  _dark: {
    textDecoration: "none",
  },
  _hover: {
    textDecoration: "none",
  },
});

const linkTheme = defineStyleConfig({
  variants: { noUnderline },
  defaultProps: {
    variant: "noUnderline",
  },
});

export const buttonTheme = defineStyleConfig({
  sizes: {
    lg: defineStyle({
      fontSize: "lg",
      px: "10",
      py: "2rem",
      borderRadius: "md",
    }),

    md: defineStyle({
      fontSize: "md",
      px: "7",
      py: "1.5rem",
      borderRadius: "md",
    }),
    sm: defineStyle({
      fontSize: "xs",
      px: "5",
      py: "5",
      borderRadius: "md",
    }),
  },
});

export default extendTheme({
  colors,
  fonts,
  styles,
  config,
  components: { Button: buttonTheme, Link: linkTheme },
});
