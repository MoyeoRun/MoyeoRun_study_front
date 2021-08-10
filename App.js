import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import StatusBar from "expo-status-bar";
import { Router, Scene, Stack } from "react-native-router-flux";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoList from "./components/TodoList";

const App = (props) => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="register" component={Register} title="Register" />
        <Scene key="TodoList" component={TodoList} title="TodoList" />
      </Stack>
    </Router>
  );
};

export default App;
