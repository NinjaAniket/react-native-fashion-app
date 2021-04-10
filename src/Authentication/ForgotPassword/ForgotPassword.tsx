import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { ClosedButton, Container } from "../../components";
import Footer from "../components/Footer";
import { AuthenticationRoutes, AuthNavigationProp } from "../Navigation";
import Button from "../../components/Button";
import { Box, Text } from "../../components/Theme";
import TextInput from "../components/Form/TextInput";

export default function ForgotPassword({
  navigation,
}: AuthNavigationProp<"ForgotPassword">) {
  const footer = <ClosedButton onPress={() => navigation.goBack()} />;

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot Password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email associated to your account{" "}
        </Text>

        <Box>
          <TextInput
            icon="mail"
            placeholder="Enter email"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </Box>

        <Box alignItems="center" marginTop="s">
          <Button
            variant="primary"
            onPress={() => true}
            label="Reset Password"
          ></Button>
        </Box>

        <Box flexDirection="row" justifyContent="center" alignItems="center">
          <Button
            variant="transparent"
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text color="text">
              Don't work?<Text color="primary"> Try Another Way</Text>
            </Text>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

const styles = StyleSheet.create({});
