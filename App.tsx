import * as React from "react";
import {
  assets as AuthenticationAssets,
  AuthenticationNavigation,
} from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";
import { StatusBar } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

const fonts = {
  "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
};

const assets = [...AuthenticationAssets];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <StatusBar hidden />
          <AuthenticationNavigation />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
