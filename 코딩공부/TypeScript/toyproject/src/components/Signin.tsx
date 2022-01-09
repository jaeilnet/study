import React, { useRef } from "react"
import { Button, Col, Input, Row } from "antd"
import styles from "./Signin.module.css"
import { LoginReqType } from "../types"

// 재사용성이 있으면 따로 뺀다.
// type LoginReqType = {
//   email: string
//   password: string
// }

interface SigninProps {
  login: (reqData: LoginReqType) => void
}

const Signin: React.FC<SigninProps> = ({ login }) => {
  const emailRef = useRef<Input>(null)
  const passRef = useRef<Input>(null)

  const click = () => {
    const email = emailRef.current!.state.value
    const password = passRef.current!.state.value

    login({ email, password })
  }

  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24} className={styles.signin_contents}>
        <Row>
          <Col span={12}>
            <img
              alt="signin"
              className={styles.signin_bg}
              src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"
            />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>
              Please Note Your Opinion
            </div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              Email
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input
                className={styles.input}
                placeholder="Email"
                autoComplete="Email"
                name="email"
                ref={emailRef}
              ></Input>
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input
                className={styles.input}
                type="password"
                autoComplete="current-password"
                name="password"
                ref={passRef}
              ></Input>
            </div>
            <div className={styles.button_area}>
              <Button onClick={click} className={styles.button} size="large">
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Signin
