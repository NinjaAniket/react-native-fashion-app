import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { CustomBtn } from "../components/index";

interface SubtitleProps {
  title: string;
  subtitle: string;
  last?: boolean;
  x: Animated.Node<number>;
  onPress: () => void;
}
export default function Subslide({
  title,
  subtitle,
  last,
  onPress,
}: SubtitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {/* <Text>{last}</Text> */}
      {/* <Text>{x}</Text> */}
      <CustomBtn
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "OpenSans-Bold",
    color: "#0c0d34",
    lineHeight: 30,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "OpenSans-Regular",
    textAlign: "center",
    lineHeight: 24,
  },
});
