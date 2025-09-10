
import React from "react";
import { Text, View } from "react-native";
import Hello from "@/Components/Hello";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Hello></Hello>
    </View>
  );
}
