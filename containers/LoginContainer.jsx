import { StackActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login";
import { login } from "../modules/auth";

const LoginContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loginCheck } = useSelector((store) => store.auth);

  //   useEffect(() => {
  //     dispatch(logincheck());
  //     // console.log(navigation.getState());
  //   }, []);

  useEffect(() => {
    if (loginCheck) {
      navigation.dispatch(StackActions.replace("todolist"));
    }
  }, [loginCheck]);

  const onPush = (id, password) => {
    dispatch(login({ username: id, password: password }));
    // navigation.dispatch(StackActions.replace("todolist"));
  };

  return (
    <>
      <Login onPush={onPush} />
    </>
  );
};

export default LoginContainer;
