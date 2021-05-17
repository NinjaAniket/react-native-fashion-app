import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Box, Text } from "../../components/Theme";
import CheckboxGroup from "./CheckboxGroup";
import RoundedCheckboxGroup from "./RoundedCheckboxGroup";

const outfitType = [
  {
    label: "For Men",
    value: "men",
  },
  {
    label: "For Women",
    value: "women",
  },
  {
    label: "For Both",
    value: "both",
  },
];

const preferredBrands = [
  {
    value: "adidas",
    label: "Adidas",
  },
  {
    value: "nike",
    label: "Nike",
  },
  {
    value: "jordan",
    label: "Jordan",
  },
  {
    value: "converse",
    label: "Convers",
  },
  {
    value: "Siyaram",
    label: "Siyaram",
  },
  {
    value: "StitchWell",
    label: "StitchWell",
  },
];

const size = [
  { value: "s" },
  { value: "m" },
  { value: "l" },
  { value: "xl" },
  { value: "xxl" },
];

const colors = [
  { value: "#0C0D34" },
  { value: "#FF0058" },
  { value: "#50B9DE" },
  { value: "#00D99A" },
  { value: "#FE5FE3" },
];

export default function Configuration() {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body">What type of outfit you usually wear?</Text>
        <CheckboxGroup options={outfitType} />
      </Box>
      <Box padding="m">
        <Text variant="body">My Preferred Clothing size?</Text>
        <RoundedCheckboxGroup options={size} />
        <Text variant="body">My Preferred Clothing colors</Text>
        <RoundedCheckboxGroup options={colors} valueIsColor />
      </Box>
      <Box padding="m">
        <Text variant="body">My Preferred Brands</Text>
        <CheckboxGroup options={preferredBrands} />
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
