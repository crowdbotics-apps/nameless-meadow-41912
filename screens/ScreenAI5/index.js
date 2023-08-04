import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {// Handle sign up logic here
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={handleCheck}>
          {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          I agree to the Terms and Conditions and Privacy Policy
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={!isChecked}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  checkmark: {
    color: "#000",
    fontSize: 12
  },
  checkboxLabel: {
    fontSize: 14
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }
});
export default SignUpScreen;