import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { rootReducer, rootSaga } from "./modules";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import TodoListContainer from "./containers/TodoListContainer";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import "./baseUrl.js";
// import app from "./setupProxy";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

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
