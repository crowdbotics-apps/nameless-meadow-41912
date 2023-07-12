import { View } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.SimzJjpb}><Text style={styles.qoopcjXP}>Lorem ipsum…</Text></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  SimzJjpb: {
    height: 632,
    width: 382,
    backgroundColor: "#fcaaaa",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 0,
    top: -1
  },
  qoopcjXP: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 291,
    left: 141
  }
});
export default Untitled4;