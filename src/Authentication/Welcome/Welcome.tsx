import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Button from "../../components/Button";
import theme, { Box, Text } from "../../components/Theme";
import { Routes } from "../Navigation";

const picture = {
  src: require("../../../assets/img/1.png"),
  height: 5074,
  width: 3383,
};

export const assets = [picture.src];

const { width } = Dimensions.get("window");

export default function Welcome({
  navigation,
}: StackNavigationProp<Routes, "Onboarding">) {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Image source={picture.src} style={styles.picture} />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          flex={1}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title1">Let's Get Started</Text>
          <Text variant="title2" textAlign="center">
            Login To your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account?"
            onPress={() => navigation.navigate("Login")}
          />
          <Button variant="default" label="Join Us, It's free?" />
          <Button variant="transparent" label="Forgot Password?" />
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
});
