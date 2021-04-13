import React, { useState } from "react";
import { interpolate, sub } from "react-native-reanimated";
import { useTransition } from "react-native-redash";
import { HomeNavigationProp } from "../../Authentication/Navigation";
import { Header } from "../../components";
import { Box } from "../../components/Theme";
import Background from "./Background";
import Card from "./Card";

export default function Outfitideas({
  navigation,
}: HomeNavigationProp<"OutfitIdeas">) {
  const cards = [
    {
      index: 3,
      source: require("../../../assets/img/4.jpg"),
    },
    {
      index: 2,
      source: require("../../../assets/img/3.jpg"),
    },
    {
      index: 1,
      source: require("../../../assets/img/2.jpg"),
    },
    {
      index: 0,
      source: require("../../../assets/img/1.png"),
    },
  ];

  const step = 1 / (cards.length - 1);

  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="OutfitIdeas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index, source }) =>
            index >= currentIndex && (
              <Card
                key={index}
                {...{ source }}
                {...{ step }}
                position={interpolate(index, {
                  inputRange: [aIndex, cards.length - 1],
                  outputRange: [0, 1],
                })}
                onSwipe={() => setCurrentIndex((prev) => prev + 1)}
              />
            )
        )}
        {/* {cards.map(
          ({ index }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
              />
            )
        )} */}
      </Box>
    </Box>
  );
}
