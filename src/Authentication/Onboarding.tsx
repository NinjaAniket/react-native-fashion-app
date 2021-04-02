import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Animated, { multiply } from "react-native-reanimated";
import {
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/lib/module/v1";
import Slide from "./Slide";
import Subslide from "./Subslide";

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
});

const slides = [
  {
    label: "Relaxed",
    color: "#BFEAF5",
    title: "Your Style",
    subtitle: "Cool Style to Get Relaxed is super cool",
    picture: require("../../../assets/img/1.jpg"),
  },
  {
    label: "Playful",
    color: "#BEECC4",
    title: "Your Style",
    subtitle: "Cool Style to Get Relaxed is super cool",
    picture: require("../../../assets/img/2.jpg"),
  },
  {
    label: "Eccentric",
    color: "#FFE4D9",
    title: "Your Style",
    subtitle: "Cool Style to Get Relaxed is super cool",
    picture: require("../../../assets/img/3.jpg"),
  },
  {
    label: "Funky",
    color: "#FFDDDD",
    title: "Your Style",
    subtitle: "Cool Style to Get Relaxed is super cool",
    picture: require("../../../assets/img/4.jpg"),
  },
];

export default function Onboarding() {
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
          {/* <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Eccentric" />
          <Slide label="Funky" right /> */}
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
          {slides.map(({ title, subtitle }, index) => (
            <Subslide
              key={index}
              last={index === slides.length - 1}
              {...{ title, subtitle, x }}
              onPress={() => {
                if (scroll.current) {
                  scroll.current.getNode().scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
}
