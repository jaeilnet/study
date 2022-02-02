import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./modeuls/reducer"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./modeuls/rootSaga"

const create = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  // 사가 연결
  sagaMiddleware.run(rootSaga)

  return store
}

export default create
