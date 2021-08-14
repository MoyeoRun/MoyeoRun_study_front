import axios from "axios";

export const register = async ({ username, password }) => {
  const response = await axios({
    method: "post",
    url: "/api/auth/register",
    data: {
      username,
      password,
    },
  });
  return response;
};

export const login = async ({ username, password }) => {
  // console.log("데이터 요청시작");
  // console.log(username, password);
  try {
    const response = await axios({
      method: "post",
      url: "/api/auth/login",
      data: {
        username,
        password,
      },
    });
    // console.log("데이터 받음");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  const response = await axios({
    method: "post",
    url: "/api/auth/logout",
  });
  return response;
};

export const check = async () => {
  const response = await axios({
    method: "get",
    url: "/api/auth/check",
  });
  return response;
};
