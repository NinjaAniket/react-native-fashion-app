import * as React from "react";
import {
  assets as AuthenticationAssets,
  AuthenticationNavigation,
} from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";
import { StatusBar } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthenticationRoutes } from "./src/Authentication/Navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeNavigator } from "./src/Home";

const fonts = {
  "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
};

const assets = [...AuthenticationAssets];

type AppStackRoutes = {
  Authentication: undefined;
  Home: undefined;
};

const AppStack = createStackNavigator<AppStackRoutes>();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <StatusBar hidden />
          {/* <AuthenticationNavigation /> */}
          <AppStack.Navigator headerMode={"none"}>
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigation}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
