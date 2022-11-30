import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const styles = {
  global: {
    body: {
      bg: "#fff",
    },
  },
};

const colors = {
  brand: {
    textw: "#000",
    textb: "#fff",
    buttonBackground: "#303e72",
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  colors,
  breakpoints,
});

export default theme;
