import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "purple",
      padding: 10,
      position: "relative",
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("Camera");
      }}><View style={styles.PRhPprgL}><Pressable onPress={() => {
            navigation.navigate("Camera", []);
          }}><Text style={styles.DNPldiSu}>{"Camera"}</Text></Pressable></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    height: "100%"
  },
  PRhPprgL: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 101,
    top: 237
  },
  DNPldiSu: {
    width: 140,
    height: 60,
    lineHeight: 50,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 0,
    top: 0,
    transform: [{
      rotate: "0deg"
    }],
    textAlign: "center",
    letterSpacing: 0
  }
});
export default Untitled3;