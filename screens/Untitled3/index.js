import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";

const Untitled3 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.proceedButton]} onPress={() => {
          navigation.navigate("Untitled4");
        }}>
            <Text style={styles.buttonText}>{"Calculator"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.watchButton]} onPress={() => {
          navigation.navigate("Untitled41");
        }}>
            <Text style={styles.buttonText}>{"Stopwatch"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  content: {
    alignItems: "center"
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 257,
    height: 54
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  proceedButton: {
    backgroundColor: "#007AFF",
    marginRight: 10
  },
  watchButton: {
    backgroundColor: "#FF3B30",
    marginLeft: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: 106,
    height: 24,
    position: "relative",
    left: -12,
    top: -1
  }
});
export default Untitled3;