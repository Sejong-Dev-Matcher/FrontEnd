import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../modules/loading";

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  
  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      console.log("Before API call - action.payload:", action.payload);
      console.log("Request: ",request);
      const response = yield call(request, action.payload);
      console.log("API call successful - response:", response);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.error("API call failed - error:", e);
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
