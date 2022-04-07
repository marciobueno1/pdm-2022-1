import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";
import axios from "axios";

export const People = () => {
  const { isLoading, error, data, isFetching } = useQuery("people-2", () =>
    axios.get("https://swapi.dev/api/people/?page=2").then((res) => res.data)
  );

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>An error has occurred: {error.message}</Text>;

  return (
    <ScrollView>
      {!!data &&
        data.results.map((person) => (
          <View>
            <Text style={styles.text}>NOME: {person.name}</Text>
            <Text style={styles.text}>ALTURA: {person.height}</Text>
            <View>
              <Text>{isFetching ? "Updating..." : ""}</Text>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});
