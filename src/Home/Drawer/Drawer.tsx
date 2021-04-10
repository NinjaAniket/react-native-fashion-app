import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Box } from "../../components/Theme";
import DrawerItem from "./DrawerItem";

const { width } = Dimensions.get("window");

const aspectRatio = 750 / 1125;

const height = width * aspectRatio;

export const DRAWER_WIDTH = width * 0.8;

const items = [
  {
    id: 1,
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },

  {
    id: 2,
    icon: "heart",
    label: "Favourite Outfit",
    screen: "FavouriteOutfit",
    color: "secondaryColor",
  },
  {
    id: 3,
    icon: "user-check",
    label: "Edit",
    screen: "EditProfile",
    color: "secondaryColor",
  },

  {
    id: 6,
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "secondaryColor",
  },

  {
    id: 4,
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
        />
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondaryColor" />
        <Box flex={1} backgroundColor="primary" />

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
        />
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
          {items.map((item) => (
            <DrawerItem key={item.id} {...item} />
          ))}
        </Box>
      </Box>

      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        borderBottomLeftRadius="xl"
        borderTopRightRadius="xl"
        overflow="hidden"
        height={height * 0.61}
      ></Box>
    </Box>
  );
}

const styles = StyleSheet.create({});
