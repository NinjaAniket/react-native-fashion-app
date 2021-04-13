import { createText, createBox } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
  secondary: "#0C0D34",

  primary: "#2cb9b0",
  body: "rgba(12, 13, 52, 0.7)",
  lightGray: "#FAFAFA",
  darkGrey: "#8A8D90",
  danger: "#FF0058",
  lightBlue: "#BFEAF5",
};

const theme = {
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    titleColor: palette.secondary,
    primary: palette.primary,
    text: "rgba(12, 13, 52, 0.7)",
    lightGray: palette.lightGray,
    grey: "#f5f5f5",
    red: "red",
    "slide-grey": "red",
    white: "#fff",
    secondaryColor: palette.secondary,
    darkGrey: palette.darkGrey,
    danger: palette.danger,
    lightBlue: palette.lightBlue,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      color: "#fff",
      fontFamily: "OpenSans-Bold",
      lineHeight: 80,
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "OpenSans-Bold",
      color: "titleColor",
    },
    title2: {
      fontSize: 16,
      lineHeight: 30,
      fontFamily: "OpenSans-Bold",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "OpenSans-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "OpenSans-Regular",
      color: "text",
    },
    header: {
      fontSize: 12,
      fontFamily: "OpenSans-Bold",
      color: "primary",
      lineHeight: 24,
    },
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
