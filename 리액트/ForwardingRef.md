# Forwarding Refs

ref 전달은 컴포넌트를 통해 자식 중 하나에 ref 를 자동으로 전달하는 기법,

React 컴포넌트에 ref props 를 넘겨서 그 내부에 있는 HTML elements 에 접근을 하게 해줌

**쉽게 설명하면**

input, button 등 ref를 필요로하는 최소단위 엘리먼트 컴포넌트를 만들었다면 그 엘리먼트 컴포넌트에게 ref 를 props로 받게 하려고 할 때 Forwarding Ref를 사용함

---

### 사용법

```javascript
 const React.forwardRef((props, ref) => {})

 // 컴포넌트를 ForwardRef 로 감싸주면 된다.
```

## Chapter 10 사용예제

## 1. 부모 컴포넌트에서 useRef 선언하기

```javascript
import React, { useRef } from "react"

const Login = () => {

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  // 최소단위 elements 컴포넌트에 선언한 ref를 넘겨준다.
  return (
    <Inputs ref={emailInputRef}/>
    <Inputs ref={passwordInputRef}/>
  )
}
```

## 2. 최소단위 elements 컴포넌트

```javascript
import React from "react";

// forwardRef 를 사용하지 않으면 error 가 난다. 이유는 undefined가 전달 되서임

const Input = React.forwardRef((props, ref) => {
  // ref를 받아올 수 있다.

  return <input ref={ref} />;
});

export default Input;
```
