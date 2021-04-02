import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding } from "./src/Authentication";
import { LoadAssets } from "./src/components";
import { StatusBar } from "react-native";

const AuthenticationStack = createStackNavigator();

const fonts = {
  "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
};

const AuthentecationNavigation = () => {
  return (
    <AuthenticationStack.Navigator headerMode={"none"}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};
export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <StatusBar hidden />
      <AuthentecationNavigation />
    </LoadAssets>
  );
}
