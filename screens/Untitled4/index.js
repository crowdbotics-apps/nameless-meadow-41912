import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#E56C6C",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Pressable>
          <ImageBackground style={styles.YPKRZTCQ} source={require("./img_170454.png")} resizeMode="center"></ImageBackground>
        </Pressable>
      </ScrollView>
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
  }
});
export default Untitled4;