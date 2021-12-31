import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react"

import Card from "../UI/Card/Card"
import classes from "./Login.module.css"
import Button from "../UI/Button/Button"
import AuthContext from "../../store/auth-context"
import Input from "../UI/Input/Input"

// 컴포넌트 함수 밖에서 만들어져야함
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") }
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") }
  }
  return { value: "", isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: "", isValid: false }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false)

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  })

  const { isValid: emailsValid } = emailState
  const { isValid: passwordValid } = passwordState

  const authCtx = useContext(AuthContext)

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("실행")
      setFormIsValid(emailState.isValid && passwordState.isValid)
    }, 500)

    return () => {
      console.log("클린 업 중", identifier)
      clearTimeout(identifier)
    }
  }, [emailsValid, passwordValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value })

    setFormIsValid(emailState.isValid && event.target.value.includes("@"))
  }

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value })

    setFormIsValid(
      passwordState.isValid && event.target.value.trim().length > 6
    )
  }

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" })
  }

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value)
    } else if (!emailsValid) {
      emailInputRef.current.activate()
    } else {
      passwordInputRef.current.activate()
    }
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type="email"
          label="E-MAIL"
          id="email"
          isValid={emailsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          type="password"
          label="Password"
          id="password"
          isValid={passwordValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
