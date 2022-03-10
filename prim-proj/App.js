import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const handlePress = () => {
    console.log("O botão foi clicado!");
  };
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Olá Turma!</Text>
        <Button title="Clique me" onPress={handlePress} color="green" />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Image
          style={styles.imgCafe}
          source={require("./assets/img/cafe.jpg")}
          resizeMode="contain"
        />
        <View style={styles.vSpace15} />
        <Image
          style={styles.imgCafe}
          source={require("./assets/img/cafe.jpg")}
          resizeMode="cover"
        />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    padding: 10,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  imgCafe: {
    width: 300,
    height: 300,
    borderColor: "black",
  },
  vSpace15: {
    width: "100%",
    height: 15,
    backgroundColor: "yellow",
    marginVertical: 5,
  },
});
