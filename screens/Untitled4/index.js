import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.SimzJjpb}>
          <Text style={styles.qoopcjXP}>Lorem ipsum…</Text>
        <Pressable onPress={() => {
          navigation.navigate("Untitled5");
        }}><View style={styles.HzySHJlq}></View></Pressable><Pressable onPress={() => {
          navigation.navigate("Untitled6");
        }}><View style={styles.OTnqDYxP}></View></Pressable></View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  SimzJjpb: {
    height: "100%",
    width: "100%",
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
  },
  HzySHJlq: {
    height: 60,
    width: 140,
    backgroundColor: "#e56c6c",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 29,
    top: 487
  },
  OTnqDYxP: {
    height: 60,
    width: 140,
    backgroundColor: "#E56C6C",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 190,
    top: 487
  }
});
export default Untitled4;