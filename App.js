import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import StatusBar from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoList from "./components/TodoList";

const App = (props) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="todolist" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
