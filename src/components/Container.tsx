import React, { ReactNode } from "react";
import { StyleSheet, Image, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width, wHeight } from "../helper/dimensions";
import theme, { Box } from "./Theme";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const assets = [require("../components/assets/pattern.png")];

const aspectRatio = 750 / 1125;

const height = width * aspectRatio;

export default function Container({ children, footer }: ContainerProps) {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={wHeight} backgroundColor="secondaryColor">
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={assets[0]}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={assets[0]}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            flex={1}
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondaryColor" paddingTop="m">
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
