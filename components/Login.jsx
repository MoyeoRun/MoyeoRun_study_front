import React, { useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StackActions } from "@react-navigation/native";

const Login = ({ onPush }) => {
  // navigation.dispatch(pushAction);
  const nativeRef = useRef();
  // let idRef = useRef();
  const pwRef = useRef();

  const [id, setId] = useState("");

  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.TitleField}>loginPage</Text>

        <View style={styles.inputField}>
          <Text>Id</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(id) => {
              setId(id);
            }}
            value={id}
          />
          <Text>PassWord</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(password) => {
              setPassword(password);
            }}
            value={password}
          />
        </View>
        <View style={styles.buttonField}>
          <TouchableOpacity
            ref={nativeRef}
            style={styles.button}
            onPress={() => onPush(id, password)}
          >
            <Text style={styles.buttonText}> {"로그인"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    height: "40%",
    borderWidth: 1,
  },
  TitleField: {
    fontSize: 30,
    textAlign: "center",
    paddingVertical: 20,
    borderWidth: 1,
  },

  inputField: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    borderWidth: 1,
  },
  textInput: {
    height: 40,
    width: 150,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
  },
  buttonField: {
    borderWidth: 1,
    borderColor: "blue",
  },
  button: {
    padding: 20,
    width: 200,
    height: 70,
  },
  buttonText: {
    margin: "auto",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
});
