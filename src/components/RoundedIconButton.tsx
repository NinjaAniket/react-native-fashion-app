import React from "react";
import { RectButton } from "react-native-gesture-handler";
import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";

export interface RoundedIconButtonProp extends RoundedIconProps {
  onPress: () => void;
}
export default function RoundedIconButton({
  onPress,
  ...props
}: RoundedIconButtonProp) {
  return (
    <RectButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </RectButton>
  );
}

RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};
