import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Container, Text } from "../../components";
import Button from "../../components/Button";
import { Box } from "../../components/Theme";
import Checkbox from "../components/Form/Checkbox";
import TextInput from "../components/Form/TextInput";
import SocialLogin from "../components/SocialLogin";

const emailValidator = (email: string) => {
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
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
            <Text marginLeft="s" variant="button" color="primary">
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
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
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
        </KeyboardAvoidingView>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox label="Remember Me" />
          <Button variant="transparent" onPress={() => true}>
            <Text color="primary"> Forgot Password</Text>
          </Button>
        </Box>

        <Box alignItems="center" marginTop="s">
          <Button
            variant="primary"
            onPress={() => true}
            label="Log In to your Account"
          ></Button>
        </Box>
      </Box>
    </Container>
  );
}

const styles = StyleSheet.create({});
