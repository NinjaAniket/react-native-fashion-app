import { BaseTheme, createText } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
  navyBlue: "#0C0D34",

  primary: "#2cb9b0",
  body: "rgba(12, 13, 52, 0.7)",
  lightGray: "#2cb9b0",
};

const theme: BaseTheme = {
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    titleColor: palette.navyBlue,
    primaryColor: palette.primary,
    text: "rgba(12, 13, 52, 0.7)",
    lightGray: palette.lightGray,
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
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
