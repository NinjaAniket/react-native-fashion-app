import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Navigation";
import Onboarding, { assets as onBoardingAssets } from "./Onboarding";
import Welcome, { assets as WelcomeAssets } from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

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
      <AuthenticationStack.Screen name="Signup" component={Signup} />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </AuthenticationStack.Navigator>
  );
};
