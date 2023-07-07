import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./logo.png")} />
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      <Pressable><View style={_styles.VfntfKUA}><Pressable onPress={() => {
            navigation.navigate("login2");
          }}><Text style={_styles.hnSDFxaK}>{"Get Started"}</Text></Pressable></View></Pressable></ScrollView>
    </SafeAreaView>;
};

export default WelcomeScreen;

const _styles = StyleSheet.create({
  VfntfKUA: {
    height: 55,
    width: 148,
    backgroundColor: "#fc8888",
    borderRadius: 15,
    color: "#777777"
  },
  hnSDFxaK: {
    width: 141,
    height: 49,
    lineHeight: 50,
    fontSize: 20,
    borderRadius: 0,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
    left: 5,
    top: 2,
    opacity: 0.55
  }
});