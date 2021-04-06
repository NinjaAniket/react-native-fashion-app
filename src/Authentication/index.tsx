import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Navigation";
import Onboarding, { assets as onBoardingAssets } from "./Onboarding";
import Welcome, { assets as WelcomeAssets } from "./Welcome";
import Login from "./Login";

export { default as Onboarding } from "./Onboarding/Onboarding";
export { default as Welcome } from "./Welcome/Welcome";
export { default as Login } from "./Login/Login";

export const assets = [...onBoardingAssets, ...WelcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigation = () => {
  return (
    <AuthenticationStack.Navigator headerMode={"none"}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
