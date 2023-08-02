import { CheckBox } from "react-native-elements";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: "column",
      height: "100%",
      padding: 10,
      backgroundColor: "#f0f0f1"
    }}>
        <View style={styles.column1}>
          <FlatList style={styles.ZJetkdMF} renderItem={({
          item
        }) => <View style={styles.lEfAynUE}>
                <CheckBox style={styles.yhcBiveP} title="Checkbox Title"></CheckBox>
              </View>} ItemSeparatorComponent={() => <View style={styles.RZmmdWfH} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList>
        </View>
        <View style={styles.column2}></View>
        <View style={styles.column3}></View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  column1: {
    flex: 1
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1
  },
  ZJetkdMF: {
    position: "absolute",
    width: "45%",
    height: "100%"
  },
  lEfAynUE: {
    width: 144,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  RZmmdWfH: {
    backgroundColor: "#000000",
    height: 1
  },
  yhcBiveP: {
    width: 183,
    height: 69
  }
});
export default Untitled6;