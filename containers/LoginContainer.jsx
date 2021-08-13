import { StackActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login";
import { login, logincheck } from "../modules/auth";
import * as auth from "../api/auth";
import axios from "axios";

const LoginContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loginCheck } = useSelector((store) => store.auth);

  // useEffect(() => {
  //   dispatch(logincheck());
  //   // console.log(navigation.getState());
  // }, []);

  useEffect(() => {
    if (loginCheck) {
      navigation.dispatch(StackActions.replace("todolist"));
    }
  }, [loginCheck]);

  const onPush = ({ username, password }) => {
    // console.log(username, password);
    // console.log("onPush 작동");

    //이곳의 디스패치는 처음 LOGIN 액션을 발생시킴.
    dispatch(login({ username: username, password: password }));
  };
  const onPushCheck = () => {
    axios({
      method: "get",
      url: "",
    });
  };

  return (
    <>
      <Login onPush={onPush} onPushCheck={onPushCheck} />
    </>
  );
};

export default LoginContainer;
