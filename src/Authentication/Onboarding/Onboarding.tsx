import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  multiply,
} from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import { theme } from "../../components";
import { AuthenticationRoutes } from "../Navigation";
import Slide from "../Slide";
import Subslide from "../Subslide";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slider: {
    height: 0.61 * height,
    backgroundColor: "cyan",
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    overflow: "hidden",
    alignItems: "center",
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
});

const slides = [
  {
    label: "Relaxed",
    color: "#BFEAF5",
    title: "Your Style",
    subtitle: "Cool Style to Get Relaxed is super cool",
    picture: {
      src: require("../../../assets/img/1.jpg"),
      width: 2513,
      height: 3538,
    },
  },
  {
    label: "Playful",
    color: "#BEECC4",
    title: "Your Style",
    subtitle: "Cool Style to Get Relaxed is super cool",
    picture: {
      src: require("../../../assets/img/2.jpg"),
      width: 2791,
      height: 3744,
    },
  },
  {
    label: "Eccentric",
    color: "#FFE4D9",
    title: "Your Style",
    subtitle: "Cool Style to Get Relaxed is super cool",
    picture: {
      src: require("../../../assets/img/3.jpg"),
      width: 2738,
      height: 3244,
    },
  },
  {
    label: "Funky",
    color: "#FFDDDD",
    title: "Your Style",
    subtitle: "Cool Style to Get Relaxed is super cool",
    picture: {
      src: require("../../../assets/img/4.jpg"),
      width: 1757,
      height: 2551,
    },
  },
];

export const assets = slides.map((slide) => slide.picture.src);

export default function Onboarding({
  navigation,
}: StackNavigationProp<AuthenticationRoutes, "Onboarding">) {
  const scroll = useRef<Animated.ScrollView>(null);

  const { scrollHandler, x } = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputRange: ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"],
    // inputRange: slides.map((_, i) => i * width),
    // outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map((slide, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image source={slide.picture.src} style={styles.picture} />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={scroll}
          snapToInterval={width}
          decelerationRate={"fast"}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ label, picture }, index) => (
            <Slide key={index} {...{ label, picture }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={{
            borderTopLeftRadius: 75,
            backgroundColor: "#fff",
            flexDirection: "row",
            width: width * slides.length,
            flex: 1,
            transform: [{ translateX: multiply(x, -1) }],
          }}
        >
          {slides.map(({ title, subtitle }, index) => {
            const last = index === slides.length - 1;
            return (
              <Subslide
                key={index}
                last
                {...{ title, subtitle, x }}
                onPress={() => {
                  if (last) {
                    navigation.navigate("Welcome");
                  } else if (scroll.current) {
                    scroll.current?.getNode().scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    });
                  }
                }}
              />
            );
          })}
        </Animated.View>
      </View>
    </View>
  );
}
