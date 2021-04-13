import { useTheme } from "@shopify/restyle";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Box } from "../../components/Theme";

export default function Background() {
  const theme = useTheme();

  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box flex={1} borderBottomRightRadius="xl" backgroundColor="white" />
      </Box>
      <Box flex={1 / 3}>
        {/* <Box flex={1} backgroundColor="white" /> */}
        <Box
          flex={1}
          backgroundColor="lightBlue"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
        ></Box>

        {/* <Image
          source={require("../../components/assets/pattern.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        /> */}
      </Box>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box
          flex={1}
          backgroundColor="secondaryColor"
          borderTopLeftRadius="xl"
        />
      </Box>
    </View>
  );
}
