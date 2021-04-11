import React from "react";
import { Box, Theme, Text } from "./Theme";
import { Feather as Icon } from "react-native-vector-icons";

export interface RoundedIconProps {
  size: number;
  name: string;
  screen: string;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];

  iconRatio: number;
}

export default function RoundedIcon({
  name,
  size,
  screen,
  iconRatio,
  backgroundColor,
  color,
}: RoundedIconProps) {
  const iconSize = iconRatio * size;
  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
}

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
};
