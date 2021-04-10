import React from "react";
import { StyleSheet, View } from "react-native";
import { Box, Text, Theme } from "../../components/Theme";
import { RoundedIcon } from "../../components";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

interface DrawerItemProps {
  screen: string;
  icon: string;
  color: keyof Theme["colors"];
  label: string;
}
export default function DrawerItem({
  screen,
  icon,
  color,
  label,
}: DrawerItemProps) {
  const theme = useTheme();
  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }}>
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={36}
          backgroundColor={color}
          color="white"
          screen={screen}
        />

        <Text marginLeft="m">{label}</Text>
      </Box>
    </RectButton>
  );
}

const styles = StyleSheet.create({});
