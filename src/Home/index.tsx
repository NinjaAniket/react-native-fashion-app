import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Outfitideas from "./OutfitIdeas/Outfitideas";
import { HomeRoutes } from "../Authentication/Navigation";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer/Drawer";
import EditProfile from "./EditProfile";

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      drawerStyle={{ width: DRAWER_WIDTH }}
    >
      <Drawer.Screen name="OutfitIdeas" component={Outfitideas} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
    </Drawer.Navigator>
  );
};
