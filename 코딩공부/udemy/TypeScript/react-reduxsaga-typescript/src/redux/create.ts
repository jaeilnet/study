import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./modeuls/reducer"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./modeuls/rootSaga"
import { routerMiddleware } from "connected-react-router"
import history from "../history"
import TokenService from "../services/TokenService"

const create = () => {
  const token = TokenService.get()
  const sagaMiddleware = createSagaMiddleware()

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
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  )

  // 사가 연결
  sagaMiddleware.run(rootSaga)

  return store
}

export default create
