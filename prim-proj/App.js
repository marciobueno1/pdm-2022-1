import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("O botão foi clicado!");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá Turma!</Text>
      <Button title="Clique me" onPress={handlePress} color="green" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
