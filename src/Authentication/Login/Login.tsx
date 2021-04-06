import React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Container, Text } from "../../components";
import Button from "../../components/Button";
import { Box } from "../../components/Theme";
import TextInput from "../components/Form/TextInput";
import SocialLogin from "../components/SocialLogin";

const emailValidator = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
};

const passwordValidator = (password: string) => true;

export default function Login() {
  const footer = (
    <>
      <SocialLogin />
      <Box justifyContent="center" alignItems="center">
        <Button variant="transparent">
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primaryColor">
              Sign up Here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use Your Credentials Below and Login to Account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter email"
            validator={emailValidator}
          />
        </Box>
        <Box>
          <TextInput
            icon="lock"
            placeholder="Enter Password"
            validator={passwordValidator}
          />
        </Box>
      </Box>
    </Container>
  );
}

const styles = StyleSheet.create({});
