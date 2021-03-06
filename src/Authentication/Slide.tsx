import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ImageRequireSource,
} from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;

interface SlideProps {
  label: string;
  right?: boolean;
  picture: {
    src: ImageRequireSource;
    width: number;
    height: number;
  };
}
export default function Slide({ label, right }: SlideProps) {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 80,
    color: "#fff",
    fontFamily: "OpenSans-Bold",
    lineHeight: 80,
    textAlign: "center",
  },

  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});
