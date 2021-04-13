import React from "react";
import { Image, ImageRequireSource, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { mix, mixColor, usePanGestureHandler } from "react-native-redash";
import { Box } from "../../components/Theme";
import { width } from "../../helper/dimensions";
import { useSpring } from "./Animations";

const wWdith = width * 0.8;
const height = width * (425 / 350);
const borderRadius = 24;
interface CardProps {
  position: Animated.Node<number>;
  onSwipe?: () => void;
  source: ImageRequireSource;
  step: number;
}

export default function Card({ position, onSwipe, source, step }: CardProps) {
  const {
    gestureHandler,
    translation,
    state,
    velocity,
  } = usePanGestureHandler();
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  //   const imageScale = mix(position, 1, 0.5);
  const imageScale = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWdith, 0, wWdith],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });

  const translateY = add(
    translateYOffset,
    useSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    })
  );

  return (
    <Box
      style={StyleSheet.absoluteFillObject}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width: wWdith,
            height,
            borderRadius,
            overflow: "hidden",
            transform: [{ translateY }, { translateX }, { scale }],
          }}
        >
          <Animated.Image
            {...{ source }}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              transform: [
                {
                  scale: imageScale,
                },
              ],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
}

const styles = StyleSheet.create({});
