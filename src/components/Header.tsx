import React from "react";
import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./Theme";

interface HeaderProps {
  left: {
    onPress: () => void;
    icon: string;
  };
  title: string;
  right?: {
    onPress?: () => void;
    icon?: string;
  };
  dark?: boolean;
}

export default function Header({ left, right, title, dark }: HeaderProps) {
  const color = dark ? "white" : "secondaryColor";
  const backgroundColor = dark ? "secondaryColor" : "lightGray";
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginVertical="l"
      paddingHorizontal="s"
    >
      <RoundedIconButton
        name={left.icon}
        iconRatio={0.4}
        size={44}
        {...{ backgroundColor }}
        onPress={left.onPress}
        screen={null}
        {...{ color }}
      />
      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        size={44}
        iconRatio={0.4}
        {...{ backgroundColor }}
        {...{ color }}
        onPress={right.onPress}
        screen={null}
      />
    </Box>
  );
}
