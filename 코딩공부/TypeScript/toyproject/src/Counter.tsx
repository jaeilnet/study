import React, { useReducer } from "react"

type Action = { type: "INCREASE" } | { type: "DECREASE" }

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1
    case "DECREASE":
      return state - 1

    default:
      throw new Error()
  }
}

const Counter = function Counter() {
  const [count, dispatch] = useReducer(reducer, 0)
  const onIncrease = () => {
    dispatch({ type: "INCREASE" })
  }

  const onDecrease = () => {
    dispatch({ type: "DECREASE" })
  }

  return (
    <>
      <h1>{count}</h1>
      <form>
        <button onClick={onIncrease}></button>
        <button onClick={onDecrease}></button>
      </form>
    </>
  )
}

export default Counter
