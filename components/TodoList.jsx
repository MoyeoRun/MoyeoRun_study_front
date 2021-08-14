import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { StackActions } from "@react-navigation/native";
const TodoList = ({ todos, onToggle, onDelete, onEdit, onCreate }) => {
  const [content, setContent] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <View style={styles.todoList}>
          <View style={styles.todoTitle}>
            <Text style={styles.todoTitleText}>투두리스트</Text>
          </View>
          {todos &&
            todos.map((todo) => (
              <View style={styles.todoItem} key={todo.id}>
                <View style={styles.todoIcon}>
                  <TouchableOpacity onPress={() => onToggle(todo.id)}>
                    {todo.isCompleted ? (
                      <Text> 완료 </Text>
                    ) : (
                      <Text> 아직 </Text>
                    )}
                  </TouchableOpacity>
                </View>
                {todo.isCompleted ? (
                  <View style={styles.todo_complete}>
                    <TouchableOpacity
                      onLongPress={() => {
                        onEdit(todo.id);
                      }}
                    >
                      <Text>{todo.content} </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.todo}>
                    <TouchableOpacity onLongPress={() => onEdit(todo.id)}>
                      <Text>{todo.content} </Text>
                    </TouchableOpacity>
                  </View>
                )}

                <View style={styles.todoIcon}>
                  <TouchableHighlight onPress={() => onDelete(todo.id)}>
                    <Text> 삭제 </Text>
                  </TouchableHighlight>
                </View>
              </View>
            ))}
        </View>
        <View style={styles.todoInputContainer}>
          <View style={styles.todoInput}>
            <TextInput
              placeholder={""}
              value={content}
              onChangeText={(content) => setContent(content)}
            ></TextInput>
          </View>
          <View style={styles.todoButton}>
            <TouchableOpacity
              onPress={() => {
                onCreate(content);
                setContent("");
              }}
            >
              <Text style={styles.todoButtonText}> {"입력"}</Text>
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
    flex: 10,
    padding: 3,
    paddingHorizontal: 6,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  todo_complete: {
    flex: 10,
    padding: 3,
    paddingHorizontal: 6,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "gray",
  },
  todoText: {},
  todoIcon: {
    flex: 2,
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
