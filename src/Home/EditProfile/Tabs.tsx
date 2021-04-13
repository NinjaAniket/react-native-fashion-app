import { useTheme } from "@shopify/restyle";
import React, { Children, ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, { multiply } from "react-native-reanimated";
import { mix, useTransition } from "react-native-redash";
import { Box, Text } from "../../components/Theme";
import { width } from "../../helper/dimensions";

interface TabsProps {
  tabs: Tab[];
  children: ReactNode;
}

interface Tab {
  id: string;
  label: string;
}
export default function Tabs({ tabs, children }: TabsProps) {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const selectedTab = tabs[index];
  const transition = useTransition(index);
  const translateX = mix(transition, width * 0.25, width * 0.7);
  return (
    <Box flex={1}>
      <Box flexDirection="row">
        {tabs.map((item, i) => (
          <RectButton onPress={() => setIndex(i)} key={item.id}>
            <Box paddingHorizontal="xl" paddingBottom="l">
              <Text variant="body">{item.label}</Text>
            </Box>
          </RectButton>
        ))}
        <Animated.View
          style={{
            position: "absolute",
            left: -5,
            bottom: 0,
            backgroundColor: theme.colors.primary,
            borderRadius: 20,
            width: 10,
            height: 10,
            transform: [{ translateX }],
          }}
        />
      </Box>

      <Animated.View
        style={{
          flexDirection: "row",
          width: width * tabs.length,
          transform: [{ translateX: multiply(-width, transition) }],
        }}
      >
        {Children.map(children, (child, index) => (
          <Box flex={1} key={index} width={width}>
            {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  );
}

const styles = StyleSheet.create({});
