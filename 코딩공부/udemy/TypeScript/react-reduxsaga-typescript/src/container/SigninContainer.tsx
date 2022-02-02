import React, { useCallback } from "react"
import { useDispatch } from "react-redux"
import Signin from "../components/Signin"
import { login as loginSagaStart } from "../redux/modeuls/auth"

const SigninContainer = () => {
  const dispatch = useDispatch()

  const login = useCallback(
    (requData) => {
      dispatch(loginSagaStart(requData))
    },
    [dispatch]
  )
  return <Signin login={login} />
}

export default SigninContainer
