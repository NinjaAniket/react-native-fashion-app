import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import theme, { Box } from "../../components/Theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SIZE = theme.borderRadii.l + 20;

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius={"xl"}
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

export default function SocialLogin() {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <FontAwesome name={"google"} style={{ color: "red", fontSize: 25 }} />
      </SocialIcon>

      <SocialIcon>
        <FontAwesome
          name={"facebook"}
          style={{ color: "blue", fontSize: 25 }}
        />
      </SocialIcon>

      <SocialIcon>
        <FontAwesome name={"apple"} style={{ color: "black", fontSize: 25 }} />
      </SocialIcon>
    </Box>
  );
}

const styles = StyleSheet.create({
  socialIcons: {},
});
