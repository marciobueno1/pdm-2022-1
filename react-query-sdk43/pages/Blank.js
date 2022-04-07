import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Blank = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Em Branco!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "beige",
  },
  text: {
    fontSize: 40,
  },
});
