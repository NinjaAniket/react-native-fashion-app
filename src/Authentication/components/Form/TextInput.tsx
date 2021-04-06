import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
} from "react-native";
import theme, { Box } from "../../../components/Theme";
import { Feather as Icon } from "react-native-vector-icons";
import { ScrollView } from "react-native-gesture-handler";

interface TextInputProps {
  icon: string;
  placeholder: string;
  validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, placeholder }: TextInputProps) => {
  const [state, setState] = useState<InputState>(Pristine);

  const reColor: keyof typeof theme.colors =
    state === Pristine ? "darkGrey" : state === Valid ? "primary" : "danger";
  const color = theme.colors[reColor];
  return (
    <Box
      flexDirection="row"
      height={44}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
    >
      <Box padding={"s"}>
        <Icon name={icon} {...{ color }} size={16} />
      </Box>
      <RNTextInput
        placeholderTextColor={color}
        underlineColorAndroid="transparent"
        {...{ placeholder }}
      />
      {(state === Valid || state === Invalid) && (
        <Box height={SIZE} width={SIZE} borderRadius="m">
          <Icon
            name={state === Valid ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;

const styles = StyleSheet.create({});
