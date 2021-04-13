import React from "react";
import { StyleSheet, View } from "react-native";
import { Box, Text, Theme } from "../../components/Theme";
import { RoundedIcon } from "../../components";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { HomeRoutes } from "../../Authentication/Navigation";
import { useNavigation } from "@react-navigation/native";

export interface DrawerItemProps {
  screen: keyof HomeRoutes;
  icon: string;
  color: keyof Theme["colors"];
  label: string;
  onPress?: () => void;
}
export default function DrawerItem({
  screen,
  icon,
  color,
  label,
  onPress,
}: DrawerItemProps) {
  const theme = useTheme();

  const navigation = useNavigation();
  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.m }}
      onPress={() => navigation.navigate(screen)}
    >
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
