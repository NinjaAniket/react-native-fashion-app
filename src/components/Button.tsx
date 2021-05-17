import React, { ReactNode } from "react";
import { backgroundColor, color, useTheme } from "@shopify/restyle";
import { StyleSheet } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import { Theme, Text } from "./Theme";

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label?: string;
  onPress?: () => void;
  children?: ReactNode;
  style: RectButtonProperties["style"];
}

export default function Button({
  label,
  variant,
  onPress,
  children,
  style,
}: ButtonProps) {
  const backgroundColor =
    variant === "primary"
      ? "#2cb9b0"
      : variant === "transparent"
      ? "transparent"
      : "rgba(12, 13, 52, 0.05)";

  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton
      style={[styles.container, style, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
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
