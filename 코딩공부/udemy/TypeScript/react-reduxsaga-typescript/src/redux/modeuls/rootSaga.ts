import { all } from "redux-saga/effects"
import { authSaga } from "./auth"

// 루트 사가 all 안에 하위 사가들을 추가
export default function* rootSaga() {
  yield all([authSaga()])
}
