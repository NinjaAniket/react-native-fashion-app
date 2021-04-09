import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "react-native-vector-icons";

import { Box, Text } from "../../../components/Theme";

interface CheckBoxProps {
  label: string;
}
export default function Checkbox({ label }: CheckBoxProps) {
  const [checked, setChecked] = useState();
  return (
    <RectButton
      onPress={() => setChecked((c) => !c)}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          height={20}
          width={20}
          borderRadius="s"
          backgroundColor={checked ? "primary" : "white"}
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="primary"
          marginRight="m"
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
}

const styles = StyleSheet.create({});
