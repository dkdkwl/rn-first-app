import { Image, Dimensions, StyleSheet, View } from "react-native";
import React from 'react'

const { width } = Dimensions.get("window");


export default function ViewScreen() {
  return (
    <View>
    <Image
      source={require("@/assets/images/젖병소독기.webp")}
      style={{ width: width, height: 300 }}
      resizeMode="cover" // cover: 가득 채움, contain: 전체 보이게
    />
    </View>
  );
}