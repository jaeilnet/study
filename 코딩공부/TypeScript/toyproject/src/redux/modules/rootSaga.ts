import { all } from "redux-saga/effects"
import { authSaga } from "./auth"

export default function* rootSaga() {
  // auth 모듈로 가서 Saga 를 만들어야함
  yield all([authSaga()])
}
