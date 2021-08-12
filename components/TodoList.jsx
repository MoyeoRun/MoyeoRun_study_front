import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StackActions } from "@react-navigation/native";
const TodoList = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <View style={styles.todoList}>
          <View style={styles.todoTitle}>
            <Text style={styles.todoTitleText}>투두리스트</Text>
          </View>
          <View style={styles.todoItem}>
            <View style={styles.todoIcon}>
              <Text>수정 </Text>
            </View>
            <View style={styles.todo}>
              <Text>투두 </Text>
            </View>

            <View style={styles.todoIcon}>
              <Text>삭제 </Text>
            </View>
          </View>
        </View>
        <View style={styles.todoInputContainer}>
          <View style={styles.todoInput}>
            <TextInput placeholder={"adsf"}> </TextInput>
          </View>
          <View style={styles.todoButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(StackActions.replace("login"));
              }}
            >
              <Text style={styles.todoButtonText}> {"gooo"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default TodoList;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  todoContainer: {
    width: 300,
    height: 600,
    borderWidth: 1,
    padding: 5,
  },
  todoList: {
    flex: 1,
  },
  todoTitle: {
    borderBottomWidth: 1,
  },
  todoTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  todoItem: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingLeft: 2,
    marginBottom: 2,
  },
  todo: {
    flex: 1,
    padding: 3,
    paddingHorizontal: 6,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  todoText: {},
  todoIcon: {
    padding: 3,
  },

  todoInputContainer: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "blue",
    width: "100%",
  },
  todoInput: {
    flex: 1,
    padding: 4,
    borderWidth: 1,
  },
  todoButton: {
    textAlign: "center",
    padding: 5,
    borderWidth: 1,
  },
  todoButtonText: {
    // textAlign: "center",
  },
});
