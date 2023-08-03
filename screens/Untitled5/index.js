import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const SplashScreen = () => {
  return <View style={styles.container}>
      <Image source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} style={styles.logo} />
      <Text style={styles.title}>Welcome to our App</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  }
});
export default SplashScreen;