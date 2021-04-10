import React, { forwardRef, RefObject, useState } from "react";
import {
  TextInputProps as RNTextInputProps,
  StyleSheet,
  TextInput as RNTextInput,
} from "react-native";
import { Feather as Icon } from "react-native-vector-icons";

import theme, { Box } from "../../../components/Theme";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  // placeholder: string;
  validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, validator, ...props }, ref) => {
    const [state, setState] = useState<InputState>(Pristine);
    const [input, setInput] = useState("");

    const reColor: keyof typeof theme.colors =
      state === Pristine ? "darkGrey" : state === Valid ? "primary" : "danger";
    const color = theme.colors[reColor];
    const validate = () => {
      const valid = validator(input);
      setState(valid);
    };

    const onChangeText = (text: string) => {
      setInput(text);

      if (state !== Pristine) {
        validate();
      }
    };

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
        <Box flex={1}>
          <RNTextInput
            placeholderTextColor={color}
            underlineColorAndroid="transparent"
            onBlur={validate}
            {...props}
            {...{ ref }}
            {...{ onChangeText }}
          />
        </Box>
        {(state === Valid || state === Invalid) && (
          <Box
            height={SIZE}
            width={SIZE}
            borderRadius="l"
            alignItems="center"
            marginRight="s"
            backgroundColor={state === Valid ? "primary" : "danger"}
          >
            <Icon
              name={state === Valid ? "check" : "x"}
              color="white"
              size={16}
            />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;

const styles = StyleSheet.create({});
