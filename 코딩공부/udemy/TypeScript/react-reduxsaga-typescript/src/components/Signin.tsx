import React, { useRef } from "react"
import styles from "./Sign.module.css"
import { Button, Col, Input, Row } from "antd"
import { LoginReqType } from "../types"

interface SigninProps {
  login: (reqData: LoginReqType) => void
}

const Signin: React.FC<SigninProps> = ({ login }) => {
  const emailRef = useRef<Input>(null)
  const passwordRef = useRef<Input>(null)

  const click = () => {
    const email = emailRef.current!.state.value
    const password = passwordRef.current!.state.value

    login({ email, password })
  }

  return (
    <Row align="middle" className={styles.sigin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}>
            <img
              src="https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg="
              alt="books"
              className={styles.signin_bg}
            />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>my books</div>
            <div className={styles.signin_subtitle}>
              Please Note Your Opinion
            </div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              Email
              <span className={styles.required}> * </span>
            </div>
            <div className={styles.input_area}>
              <Input
                placeholder="Email"
                autoComplete="email"
                name="email"
                className={styles.input}
                ref={emailRef}
              />
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}> * </span>
            </div>
            <div className={styles.input_area}>
              <Input
                type="password"
                autoComplete="currnet-password"
                name="password"
                className={styles.input}
                ref={passwordRef}
              />
            </div>
            <div className={styles.button_area}>
              <Button size="large" className={styles.button} onClick={click}>
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
