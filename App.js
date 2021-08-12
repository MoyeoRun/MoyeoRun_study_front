import React from "react";
import { Image, StyleSheet, Text, TouchableOacity, View } from "react-native";
import StatusBar from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { rootReducer } from "./modules";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import TodoListContainer from "./containers/TodoListContainer";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoList from "./components/TodoList";
import { applyMiddleware, createStore } from "redux";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = (props) => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginContainer} />
          <Stack.Screen name="register" component={RegisterContainer} />
          <Stack.Screen name="todolist" component={TodoListContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
