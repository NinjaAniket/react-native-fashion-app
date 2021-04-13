import { CommonActions } from "@react-navigation/routers";
import React from "react";
import { Dimensions } from "react-native";
import { Header } from "../../components";
import { Box, Text } from "../../components/Theme";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");

const aspectRatio = 750 / 1125;

const height = width * aspectRatio;

export const DRAWER_WIDTH = width * 0.8;

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },

  {
    icon: "heart",
    label: "Favourite Outfit",
    screen: "FavouriteOutfit",
    color: "secondaryColor",
  },
  {
    icon: "user-check",
    label: "Edit",
    screen: "EditProfile",
    color: "secondaryColor",
  },

  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "secondaryColor",
  },

  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "red",
  },
];

export default function Drawer() {
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
          backgroundColor="secondaryColor"
          borderBottomRightRadius="xl"
        >
          <Header
            dark
            title="My Profile"
            left={{
              icon: "x",
              onPress: () => true,
            }}
            right={{ icon: "shopping-bag", onPress: () => true }}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondaryColor" />

        {/* 
        <Image
          style={{
            position: "absolute",
            bottom: -height * 0.61,
            width: DRAWER_WIDTH,
            height: height,
            left: 0,
            right: 0,
          }}
          source={require("../../components/assets/pattern.png")}
        /> */}
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
          justifyContent="center"
          padding="xl"
        >
          <Box
            style={{ borderRadius: 50 }}
            backgroundColor="primary"
            width={100}
            height={100}
            alignSelf="center"
            position="absolute"
            top={-50}
            left={DRAWER_WIDTH / 2 - 50}
          />
          <Box marginVertical="s">
            <Text variant="title1" textAlign="center">
              Mike Peter
            </Text>
            <Text variant="body" textAlign="center">
              mike@gmail.com
            </Text>
          </Box>

          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>

      <Box
        backgroundColor="secondaryColor"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.5}
        borderTopLeftRadius="xl"
        borderColor="white"
      />
    </Box>
  );
}
