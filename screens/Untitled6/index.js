import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#E56C6D",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
      <Pressable onPress={() => {
        navigation.navigate("Untitled4");
      }}><View style={styles.zkbePOSD}></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  zkbePOSD: {
    height: 54,
    width: 120,
    backgroundColor: "#aa2424",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 118,
    top: 236
  }
});
export default Untitled6;