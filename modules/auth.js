import * as authAPI from "../api/auth";
import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
} from "../utils/asyncUtils";
import { put, takeLatest, call } from "@redux-saga/core/effects";

//액션 타입 정의
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

//초기 상태 정의
const initState = {
  username: null,
  error: null,
  loginCheck: false,
};

//액션 생성 함수
//사가 사용 시 순수 액션 객체를 생성하는 함수로 만들 수 있다,
export const login = (payload) => {
  // console.log("로그인 액션 발생");
  return { type: LOGIN, payload: payload };
};
export const logout = () => ({ type: LOGOUT });
export const logincheck = () => ({ type: LOGIN_CHECK });
export const register = (payload) => {
  //console.log('회원가입 액션 발생')
  return { type: REGISTER, payload: payload };
};

//각 기능별로 비동기 처리나 및 다른 처리를 하는 사가
function* logincheckSaga() {
  try {
    const loginData = yield call(authAPI.check);
    yield put({ type: LOGIN_SUCCESS });
  } catch (e) {
    yield put({
      type: LOGIN_CHECK_FAILURE,
      payload: e,
    });
  }
}

function* loginSaga({ payload }) {
  // 사가 액션에 정보가 잘 들어왔는가
  // console.log("사가로 왔다", payload);
  try {
    // 시작;
    // console.log("시작");
    const loginData = yield call(authAPI.login, payload);
    yield put({ type: LOGIN_SUCCESS, payload: loginData });
    // 데이터 요청 잘 했는지 확인;
    // console.log(loginData);
  } catch (e) {
    //실패
    yield put({
      type: LOGIN_FAILURE,
      payload: e,
    });
  }
}
function* registerSaga({ payload }) {
  try {
    yield call(authAPI.register, payload);
    yield put({ type: REGISTER_SUCCESS });
  } catch (e) {
    yield put({
      type: REGISTER_FAILURE,
      payload: e,
    });
  }
}
function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    yield put({ type: LOGOUT_SUCCESS });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILURE,
      payload: e,
    });
  }
}

//auth 모듈에서 사용되는 사가 합치기 + 액션 모니터링,
//takeLatest => 가장 마지막 액션 시점에서만 뒤의 사가를실행, 다 안끝나면 중간에 멈춤
//takeEvery => 모든 액션 실행
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN_CHECK, logincheckSaga);
}

/* thunk 코드
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
 */

//리듀서
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
    default: {
      return state;
    }
  }
};
export default auth;
