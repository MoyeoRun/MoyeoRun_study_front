import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackActions } from "@react-navigation/native";
const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>투두리스트페이지</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(StackActions.replace("login"));
        }}
      >
        <Text> {"다쉬복귀"}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Register;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
