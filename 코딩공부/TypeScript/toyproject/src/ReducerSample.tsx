import React, { useReducer } from "react"

type Color = "red" | "black" | "yellow"

type State = {
  count: number
  text: string
  color: Color
  isGood: boolean
}

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count,
      }
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      }
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      }
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      }

    default:
      throw new Error()
  }
}

const ReducerSample = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true,
  })

  const setCount = () => {
    dispatch({ type: "SET_COUNT", count: 5 })
  }

  const setText = () => {
    dispatch({ type: "SET_TEXT", text: "hi" })
  }

  const setColor = () => {
    dispatch({ type: "SET_COLOR", color: "yellow" })
  }

  const setToggle = () => {
    dispatch({ type: "TOGGLE_GOOD" })
  }

  return (
    <div>
      <div>{state.count}</div>
      <div>{state.color}</div>
      <div>{state.text}</div>
      <div>{state.isGood}</div>
      <button onClick={setCount}>count</button>
      <button onClick={setText}>text</button>
      <button onClick={setColor}>color</button>
      <button onClick={setToggle}>toggle</button>
    </div>
  )
}

export default ReducerSample
