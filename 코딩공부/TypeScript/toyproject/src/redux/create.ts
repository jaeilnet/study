import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./modules/reducer"
import createSagaMiddleWare from "redux-saga"
import rootSaga from "./modules/rootSaga"
import { routerMiddleware } from "connected-react-router"
import history from "../history"
import TokenService from "./services/TokenService"

const create = () => {
  const token = TokenService.get()

  const sagaMiddleWare = createSagaMiddleWare()

  // 사가 연결

  const store = createStore(
    reducer(history),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(sagaMiddleWare, routerMiddleware(history))
    )
  )

  // 사가 실행
  sagaMiddleWare.run(rootSaga)

  return store
}

export default create
