import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "./Theme";
import { Feather as Icon } from "react-native-vector-icons";

interface CloseButtonProps {
  onPress: () => void;
}

const SIZE = 60;
export default function CloseButton({ onPress }: CloseButtonProps) {
  return (
    <Box justifyContent="center" alignItems="center" marginBottom="s">
      <RectButton {...{ onPress }}>
        <Box
          height={SIZE}
          width={SIZE}
          style={{ borderRadius: SIZE / 2 }}
          justifyContent="center"
          alignItems="center"
          backgroundColor="white"
        >
          <Text color="secondaryColor">
            <Icon name="x" size={45} />
          </Text>
        </Box>
      </RectButton>
    </Box>
  );
}

const styles = StyleSheet.create({});
