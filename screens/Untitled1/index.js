import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.ozXRlOGc}><Pressable onPress={() => {
          navigation.navigate("accountSettings");
        }}><Text style={styles.aWNUffcs}>Lorem ipsum…</Text></Pressable></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  ozXRlOGc: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 288,
    left: 108
  },
  aWNUffcs: {
    width: 130,
    height: 50,
    lineHeight: 50,
    fontSize: 14,
    borderRadius: 0,
    position: "relative",
    top: 5,
    left: 5,
    transform: [{
      rotate: "0deg"
    }],
    letterSpacing: 0,
    textAlign: "center"
  }
});
export default Untitled1;