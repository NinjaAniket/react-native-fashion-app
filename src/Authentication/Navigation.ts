import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  CompositeNavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface AuthNavigationProp<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

export type HomeRoutes = {
  OutfitIdeas: undefined;
};
