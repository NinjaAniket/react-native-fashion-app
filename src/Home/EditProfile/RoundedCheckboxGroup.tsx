import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather as Icon } from "react-native-vector-icons";

import { Box, Text } from "../../components/Theme";

interface RoundedCheckboxGroupProps {
  options: {
    value: string;
  }[];
  valueIsColor?: boolean;
}
export default function RoundedCheckboxGroup({
  options,
  valueIsColor,
}: RoundedCheckboxGroupProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const theme = useTheme();
  return (
    <Box flexDirection="row" flexWrap="wrap">
      {options.map(({ label, value }) => {
        const isSelected = selectedValues.indexOf(value) !== -1;
        const index = selectedValues.indexOf(value);
        const backgroundColor = isSelected ? theme.colors.primary : "#ccc";
        const textColor = isSelected ? "white" : theme.colors.black;
        return (
          <BorderlessButton
            style={{ margin: 10 }}
            key={label}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(value);
              }
              setSelectedValues([...selectedValues]);
            }}
          >
            <View
              style={{
                backgroundColor: valueIsColor ? value : backgroundColor,
                borderRadius: 20,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!valueIsColor && (
                <Text variant="body" color={textColor}>
                  {value.toUpperCase()}
                </Text>
              )}
              {valueIsColor && isSelected && (
                <Icon color="white" name="check" size={16} />
              )}
            </View>
          </BorderlessButton>
        );
      })}
    </Box>
  );
}

const styles = StyleSheet.create({});
