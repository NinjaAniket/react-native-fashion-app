import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Button from "../../components/Button";
import { Box } from "../../components/Theme";

interface CheckboxGroupProp {
  options: {
    value: string;
    label: string;
  }[];
}
export default function CheckboxGroup({ options }: CheckboxGroupProp) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <Box flexDirection="row" flexWrap="wrap">
      {options.map(({ label, value }) => {
        const isSelected = selectedValues.indexOf(value) !== -1;
        const index = selectedValues.indexOf(value);

        return (
          <Button
            style={{
              width: undefined,
              height: undefined,
              padding: 12,
              marginHorizontal: 6,
            }}
            label={label}
            key={label}
            variant={isSelected ? "primary" : "default"}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(value);
              }
              setSelectedValues([...selectedValues]);
            }}
          ></Button>
        );
      })}
    </Box>
  );
}

const styles = StyleSheet.create({});
