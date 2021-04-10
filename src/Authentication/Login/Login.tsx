import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { Container, Text } from "../../components";
import Button from "../../components/Button";
import { Box } from "../../components/Theme";
import Footer from "../components/Footer";
import Checkbox from "../components/Form/Checkbox";
import TextInput from "../components/Form/TextInput";
import { AuthNavigationProp } from "../Navigation";

const emailValidator = (email: string) => {
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

// interface LoginProps {
//   navigation: CompositeNavigationProp<
//     StackNavigationProp<AuthenticationRoutes, "Login">,
//     DrawerNavigationProp<AppRoutes, "Home">
//   >;
// }

const passwordValidator = (password: string) => true;

export default function Login({ navigation }: AuthNavigationProp<"Login">) {
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign up Here"
      onPress={() => navigation.navigate("Signup")}
    />
  );

  const password = useRef<RNTextInput>(null);

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
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter Password"
          validator={passwordValidator}
          returnKeyType="go"
          returnKeyLabel="go"
          ref={password}
        />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox label="Remember Me" />
          <Button
            variant="transparent"
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text color="primary"> Forgot Password</Text>
          </Button>
        </Box>

        <Box alignItems="center" marginTop="s">
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Home")}
            label="Log In to your Account"
          ></Button>
        </Box>
      </Box>
    </Container>
  );
}

const styles = StyleSheet.create({});
