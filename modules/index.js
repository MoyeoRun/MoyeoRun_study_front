import { combineReducers } from "redux";
import todos from "./todos";
import auth, { authSaga } from "./auth";
import { all } from "redux-saga/effects";

export const rootReducer = combineReducers({
  todos,
  auth,
});

//스토어에는 rootReducer에서 반환한 state로 상태변화한다

export function* rootSaga() {
  yield all([authSaga()]);
}
//rootSaga는 all 키워드로 각 모듈별로 모니터링 하는 사가 합쳐놓은 것을 실행시켜줌

export default rootReducer;
