import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Person = ({ person }) => {
  return (
    <View style={styles.container} key={person.name}>
      <Text style={styles.title}>{person.name}</Text>
      <Text style={styles.text}>ALTURA: {person.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
  },
  text: {
    fontSize: 20,
  },
});
