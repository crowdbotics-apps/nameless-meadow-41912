import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet, Pressable } from "react-native";

const Login2 = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPress = () => {
    setSelected(!selected);
  };

  return <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Log in</Text>
      </View>
      <View>
        <View style={styles.emailContainer}>
          <Text style={styles.mr10}>Email address</Text>
          <Input placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
        </View>
        <View style={styles.mb20}>
          <Text style={styles.mr10}>Password</Text>
          <Input placeholder="Password" value={password} onChangeText={text => setPassword(text)} />
        </View>
        <View style={styles.forgotPassword}>
          <View>
            <CheckBox onPress={onPress} selected={selected} text="Remember me" />
          </View>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <Pressable style={styles.VmJMybOw} onPress={() => {
          navigation.navigate("Untitled4");
        }}>
            <Text style={styles.DbYIMxCB}>Log In</Text>
          </Pressable>
        </View>
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.iconContainer}>
            <Image source={require("./assets/appleIcon.png")} style={styles.icon} />
          </View>
          <View style={styles.iconContainer}>
            <Image source={require("./assets/googleIcon.png")} style={styles.icon} />
          </View>
          <View style={styles.iconContainer}>
            <Image source={require("./assets/fbIcon.png")} style={styles.icon} />
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Do not have an account?</Text>
        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#fff"
  },
  heading: {
    alignSelf: "center"
  },
  headingText: {
    fontSize: 42,
    fontWeight: "500",
    color: "#ef6363"
  },
  emailContainer: {
    marginBottom: 10
  },
  mr10: {
    marginRight: 10,
    marginBottom: 10
  },
  mb20: {
    marginBottom: 20
  },
  forgotPassword: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40
  },
  loginContainer: {
    width: "80%",
    alignSelf: "center"
  },
  orContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    alignSelf: "center"
  },
  line: {
    height: 1,
    width: 100,
    backgroundColor: "rgba(0, 0, 0, 0.05)"
  },
  orText: {
    marginVertical: 40,
    alignSelf: "center",
    fontSize: 16,
    color: "#231F20",
    opacity: 0.5
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
    justifyContent: "space-between"
  },
  iconContainer: {
    height: 40,
    width: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F7F7F7"
  },
  icon: {
    height: 18,
    width: 18
  },
  footerContainer: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row"
  },
  footerText: {
    color: "#6B6B6B"
  },
  VmJMybOw: {
    backgroundColor: "#FC8888",
    padding: 10,
    borderRadius: 5
  },
  DbYIMxCB: {
    color: "white",
    textAlign: "center"
  }
});
export default Login2;

const CheckBox = ({
  selected,
  onPress,
  text
}) => <TouchableOpacity onPress={onPress}>
    <View style={checkBoxStyles.checkBoxContainer}>
      <View style={checkBoxStyles.iconContainer}>
        {selected && <Image source={require("./assets/checkbox.png")} style={checkBoxStyles.icon} />}
      </View>
      <Text style={checkBoxStyles.iconText}>{text}</Text>
    </View>
  </TouchableOpacity>;

const checkBoxStyles = StyleSheet.create({
  checkBoxContainer: {
    display: "flex",
    flexDirection: "row"
  },
  iconContainer: {
    height: 18,
    width: 18,
    borderColor: "#ff5757",
    borderWidth: 2,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 16,
    width: 16
  },
  iconText: {
    marginLeft: 10
  }
});

const Input = props => {
  return <View>
       <TextInput style={textStyles.input} placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} placeholderTextColor="#ddd" editable={props.editable !== false} />
      {props.errorText ? <Text style={textStyles.error}>{props.errorText}</Text> : null}
    </View>;
};

const textStyles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 53,
    borderColor: "#C4C4C4",
    color: "#000",
    borderRadius: 10,
    fontSize: 14,
    borderWidth: 1,
    paddingHorizontal: 10
  },
  error: {
    fontSize: 13,
    color: "#FA060D",
    paddingTop: 8
  }
});