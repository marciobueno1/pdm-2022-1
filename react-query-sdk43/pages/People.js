import React, { useEffect } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";
import axios from "axios";
import { Person } from "../components/Person";
import { useStore } from "../zustandStore";

export const People = () => {
  const page = useStore((state) => state.page);
  const increasePage = useStore((state) => state.increasePage);
  const decreasePage = useStore((state) => state.decreasePage);
  const changeNextPrevious = useStore((state) => state.changeNextPrevious);
  const { isLoading, error, data, isFetching } = useQuery(
    `people-${page.number}`,
    () => axios.get(page.url).then((res) => res.data)
  );
  const handleButtonNextPress = () => {
    increasePage(1);
  };
  const handleButtonPreviousPress = () => {
    decreasePage();
  };
  useEffect(() => {
    changeNextPrevious(data?.next, data?.previous);
  }, [data]);

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>An error has occurred: {error.message}</Text>;

  return (
    <ScrollView>
      <Text>Página {page.number}</Text>
      <Button
        title="-"
        onPress={handleButtonPreviousPress}
        disabled={page.previous === null}
      />
      <Button
        title="+"
        onPress={handleButtonNextPress}
        disabled={page.next === null}
      />
      <View>
        <Text>{isFetching ? "Updating..." : ""}</Text>
      </View>
      {!!data &&
        data.results.map((person) => (
          <Person key={person.name} person={person} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});
