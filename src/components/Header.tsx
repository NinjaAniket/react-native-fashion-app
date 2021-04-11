import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./Theme";

interface HeaderProps {
  left: {
    onPress: () => void;
    icon: string;
  };
  title: string;
  right: {
    onPress: () => void;
    icon: string;
  };
}

export default function Header({ left, right, title }: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      marginVertical="l"
      paddingHorizontal="s"
    >
      <RoundedIconButton
        name={left.icon}
        size={24}
        backgroundColor="secondaryColor"
        color="white"
        onPress={left.onPress}
        screen={null}
      />
      <Text variant="header" color="white">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        size={24}
        backgroundColor="secondaryColor"
        color="white"
        onPress={right.onPress}
        screen={null}
      />
    </Box>
  );
}

const styles = StyleSheet.create({});
