import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}
export default function Button({ label, variant, onPress }: ButtonProps) {
  const backgroundColor =
    variant === "primary" ? "#2cb9b0" : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
}

Button.defaultProps = { variant: "default" };

const styles = StyleSheet.create({
  container: {
    width: 245,
    borderRadius: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: "OpenSans-Regular",
  },
});
