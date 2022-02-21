import React, { useReducer } from "react"

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  }
}

const useCustomHookSample = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm)

  const onChange = (e) => {
    dispatch(e.target)
  }

  return [state, onChange]
}

export default useCustomHookSample
