import { push } from "connected-react-router"
import { Action, createActions, handleActions } from "redux-actions"
import { call, put, takeEvery } from "redux-saga/effects"
import { LoginReqType } from "../../types"
import TokenService from "../services/TokenService"
import UserService from "../services/UserService"

// 타입지정
interface AuthState {
  token: string | null
  loading: boolean
  error: Error | null
}

// 초기 값 세팅
const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
}

//  기본 경로 같음
const prefix = "my-books/auth"

// 액션 생성 함수
export const { pending, success, fail } = createActions(
  // 액션 타입 지정
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
)

const reducer = handleActions<AuthState, string>(
  {
    pending: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    success: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    fail: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
)

export default reducer

// Saga

export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix })

function* loginSaga(action: Action<LoginReqType>) {
  // 비동기 로직
  try {
    yield put(pending())
    const token: string = yield call(UserService.login, action.payload)
    // localStorage 저장
    TokenService.set(token)
    yield put(success(token))
    yield put(push("/"))
  } catch (error) {
    yield put(fail(error))
    console.log(error)
  }
}

function* logoutSaga() {}

export function* authSaga() {
  // 사이드 이펙트

  // 액션타입, 사가함수 지정
  yield takeEvery(`${prefix}/LOGIN`, loginSaga)
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga)
}
