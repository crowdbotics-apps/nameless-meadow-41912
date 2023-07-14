import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#E56C6C",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Pressable onPress={() => {
        navigation.navigate("activityFeed");
      }}>
          <ImageBackground style={styles.YPKRZTCQ} source={require("./img_170454.png")} resizeMode="center"></ImageBackground>
        </Pressable>
      <ImageBackground style={styles.XpYtTqRl} source={require("./project info.png")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  YPKRZTCQ: {
    width: 52,
    height: 21,
    position: "absolute",
    left: 11,
    top: 13
  },
  XpYtTqRl: {
    width: 174,
    height: 89,
    position: "absolute",
    top: 126,
    left: 91
  }
});
export default Untitled4;