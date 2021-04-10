import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Container, Text } from "../../components";
import Button from "../../components/Button";
import { Box } from "../../components/Theme";
import Footer from "../components/Footer";
import Checkbox from "../components/Form/Checkbox";
import TextInput from "../components/Form/TextInput";
import { AuthNavigationProp, Routes } from "../Navigation";

const emailValidator = (email: string) => {
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const passwordValidator = (password: string) => true;

export default function Signup({ navigation }: AuthNavigationProp<"Signup">) {
  const footer = (
    <Footer
      title="Already have an account?"
      action="Login Here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  const password = useRef<RNTextInput>(null);
  const confirmPassword = useRef<RNTextInput>(null);

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create An Account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let us know your email and Your password
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter email"
              validator={emailValidator}
              onSubmitEditing={() => password.current?.focus()}
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              icon="lock"
              placeholder="Enter Password"
              validator={passwordValidator}
              ref={password}
              onSubmitEditing={() => confirmPassword.current?.focus()}
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </Box>

          <Box>
            <TextInput
              icon="lock"
              placeholder="Confirm Password"
              validator={passwordValidator}
              ref={confirmPassword}
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
            label="Create Your Account"
          ></Button>
        </Box>
      </Box>
    </Container>
  );
}

const styles = StyleSheet.create({});
