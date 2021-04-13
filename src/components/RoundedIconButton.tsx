import React from "react";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";

export interface RoundedIconButtonProp extends RoundedIconProps {
  onPress: () => void;
}
export default function RoundedIconButton({
  onPress,
  ...props
}: RoundedIconButtonProp) {
  return (
    <BorderlessButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
}

RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};
