import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const Untitled6 = () => {
  return <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={"SplashScreen"} />
    </Stack.Navigator>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  }
});
export default Untitled6;