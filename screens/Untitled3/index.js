import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.zVYFbZKa}></View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    height: "100%"
  },
  zVYFbZKa: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "purple",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
export default Untitled3;