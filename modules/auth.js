import * as authAPI from "../api/auth";

const LOGIN = "auth/LOGIN";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";

const LOGIN_CHECK = "auth/LOGIN_CHECK";
const LOGIN_CHECK_SUCCESS = "auth/LOGIN_CHECK_SUCCESS";
const LOGIN_CHECK_FAILURE = "auth/LOGIN_CHECK_FAILURE";

const LOGOUT = "auth/LOGOUT";
const LOGOUT_SUCCESS = "auth/LOGOUT_SUCCESS";
const LOGOUT_FAILURE = "auth/LOGOUT_FAILURE";

const REGISTER = "auth/REGISTER";
const REGISTER_FAILURE = "auth/REGISTER_FAILURE";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";

const initState = {
  username: null,
  error: null,
  loginCheck: false,
};

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch({ type: LOGIN });
    try {
      const response = await authAPI.login({ username, password });
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: LOGIN_FAILURE, payload: e });
    }
  };

export const register =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch({ type: REGISTER });
    try {
      const response = await authAPI.register({ username, password });
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: REGISTER_FAILURE, payload: e });
    }
  };

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  try {
    const response = await authAPI.logout();
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (e) {
    dispatch({ type: LOGOUT_FAILURE, payload: e });
  }
};

export const logincheck = () => async (dispatch) => {
  dispatch({ type: LOGIN_CHECK });
  try {
    const response = await authAPI.check();
    dispatch({ type: LOGIN_CHECK_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: LOGIN_CHECK_FAILURE, error: e });
  }
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_CHECK_SUCCESS: {
      return {
        ...state,
        username: action.payload.username,
        loginCheck: true,
      };
    }
    case LOGIN_CHECK_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loginCheck: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        username: action.payload.username,
        loginCheck: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loginCheck: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        loginCheck: false,
      };
    }
    case LOGOUT_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        loginCheck: true,
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
export default auth;
