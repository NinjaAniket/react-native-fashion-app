import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box, Text } from "../../components/Theme";
import SocialLogin from "./SocialLogin";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

export default function Footer({ onPress, title, action }: FooterProps) {
  return (
    <>
      <SocialLogin />
      <Box justifyContent="center" alignItems="center" marginBottom="m">
        <TouchableWithoutFeedback {...{ onPress }}>
          <Text variant="button" color="white">
            <Text>{`${title} `}</Text>
            <Text color="primary">{`${action} `}</Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
}
