import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

const AddBankAccount = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  useEffect(() => {
    setUser({
      name: "Username",
      email: "username@email.com",
      image: {
        uri: "https://tinyurl.com/42evm3m3"
      }
    });
  }, []);
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Bank account number</Text>
            <TextInput style={styles.input} onChangeText={text => setAccountNumber(text)} value={accountNumber} placeholder="Enter bank account number" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={styles.lockIcon} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Confirm Bank account number</Text>
            <TextInput style={styles.input} onChangeText={text => setConfirmAccountNumber(text)} value={confirmAccountNumber} placeholder="Confirm bank account number" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={styles.lockIcon} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Bank routing number</Text>
            <TextInput style={styles.input} onChangeText={text => setRoutingNumber(text)} value={routingNumber} placeholder="Enter bank routing number" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("addPaymentMethod");
        }}>
            <Text style={styles.buttonText}>{"Use Card Instead"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("addReview");
        }}>
            <Text style={styles.buttonText}>{"Proceed"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer titles={["Home", "Task", "Availability", "Account", "My Business"]} images={[{
      uri: "https://tinyurl.com/42evm3m3"
    }, {
      uri: "https://tinyurl.com/42evm3m3"
    }, {
      uri: "https://tinyurl.com/42evm3m3"
    }, {
      uri: "https://tinyurl.com/42evm3m3"
    }, {
      uri: "https://tinyurl.com/42evm3m3"
    }]} active={3} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  inputs: {
    marginTop: 30,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center"
  },
  inputText: {
    fontSize: 13,
    marginLeft: 20,
    color: "#111112"
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%",
    height: 50
  },
  lockIcon: {
    position: "absolute",
    right: 20,
    top: 40,
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  button: {
    backgroundColor: "black",
    height: 50,
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    elevation: 10,
    flexDirection: "row"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  btnContainer: {
    paddingHorizontal: 40,
    justifyContent: "center",
    marginTop: 20
  }
});
export default AddBankAccount;

const Footer = props => {
  return <View style={footerStyles.footer}>
      {props.titles.map((title, index) => <View style={footerStyles.footerItem} key={index}>
          <Image style={footerStyles.footerImage} source={props.images[index]} />
          <Text style={[footerStyles.footerItemText, index === props.active ? footerStyles.active : null]}>
            {title}
          </Text>
        </View>)}
    </View>;
};

const footerStyles = StyleSheet.create({
  footer: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    height: 70,
    backgroundColor: "#C4C4C4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  footerItem: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  footerItemText: {
    fontSize: 13,
    color: "#fff",
    marginTop: 5
  },
  footerImage: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  active: {
    color: "#000"
  }
});