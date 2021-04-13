import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../../components";
import { Box } from "../../components/Theme";
import Configuration from "./Configuration";
import PersonalInfo from "./PersonalInfo";
import Tabs from "./Tabs";

const tabs = [
  {
    id: "configuration",
    label: "Configuration",
  },
  {
    id: "info",
    label: "PersonalInfo",
  },
];

export default function EditProfile() {
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="secondaryColor"
          borderBottomRightRadius="xl"
        >
          <Header
            dark
            title="Edit Profile"
            left={{
              icon: "arrow-left",
              onPress: () => navigation.goBack(),
            }}
            right={{
              icon: "shopping-bag",
              onPress: () => true,
            }}
          />
        </Box>
      </Box>

      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondaryColor" />
        <Box
          position="absolute"
          borderTopLeftRadius="xl"
          top={0}
          left={0}
          bottom={0}
          right={0}
          backgroundColor="white"
        >
          <Box
            backgroundColor="primary"
            borderRadius="xl"
            width={100}
            height={100}
            alignSelf="center"
            top={-50}
          />
          <Tabs {...{ tabs }}>
            <Configuration />
            <PersonalInfo />
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({});
