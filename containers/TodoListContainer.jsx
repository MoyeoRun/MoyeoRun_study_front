import { StackActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import {
  createTodo,
  editTodo,
  toggleTodo,
  deleteTodo,
  getTodoList,
} from "../modules/todos";

const TodoListContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginCheck = useSelector((store) => store.auth);
  const todos = useSelector((store) => store.todos.todoList);
  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  const onCreate = (content) => {
    dispatch(createTodo(content));
  };

  const onEdit = (id, content) => {
    dispatch(editTodo(id, content));
  };

  const onToggle = (id) => {
    console.log(id);
    dispatch(toggleTodo(id));
  };
  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <TodoList
        todos={todos}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggle={onToggle}
        onCreate={onCreate}
      />
    </>
  );
};

export default TodoListContainer;
