# useContext

[공식홈페이지](https://ko.reactjs.org/docs/hooks-reference.html#usecontext)

### useContext 란?

![useContext](./img/ContextAPI.png)

부모 컴포넌트가 자식 컴포넌트에게 props 로 데이터를 전달 합니다.

위 사진과 같이 A, B, C 컴포넌트가 각각 부모자식 관계일 때, A에서 C로 보낼려면 B를 어쩔 수 없이 거쳐가는 단계로 사용해야 합니다.

**이런 비효율적인 부분을 개선 할 수 있는 Hook이 useContext입니다.**

바로 A에서 C로 내려보낼수있습니다.

다른 부분으로 리덕스를 사용 할 수도 있는데,
리덕스 대신으로 useContext 를 쓰는 사람도 있다고 하네요,

---

### 사용방법

```javascript
const value = useContext(MyContext);
```

### **Chapter 10의 내용으로 만든 예제 입니다.**

## 1. createContext 만들기

```javascript
// auth-context.js 파일을 만듬

import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

// 먼저 createContext 를 만들어주고 객체로 초기 값들을 입력 해준다.

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 만들어진 createContext 에는 Porvider 와 Consumer 를 체이닝 할 수 있는데,
  // Porvider 는 공급자, Consumer 는 소비자 역할을 한다. 대충 이름보면 뜻을 알 수 있을 것
  // Porvider 공급자 입장에서 value 에 다른 컴포넌트에서 쓸 값 들을 넘겨준다.

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
    // loginHandler, logoutHandler 함수는 코드가 길어져서 삭제했지만 그런 로직이 있다고 하자..
  );
};

export default AuthContext;

// AuthContextProvider 로 감싸진 컴포넌트들은 저 value 들을 이용 할 수 있다.
```

## 2. AuthContextProvider 로 감싸주기

```javascript
// index.js
// App.js 보다 더 상위인 index.js에서 감싸주었다.
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
```

## 3. 실제로 사용하기

```js
// 실제로 Navigation 컴포넌트는 app.js를 A라고 가정하고 A, B C 구조로 봤을 때 C에 해당된다.
// A = app.js B = MainHeader.js C => Navigation.js
// B를 거치지 않고 app.js 에서 C인 navigation으로 글로벌하게 데이터를 넘겨주기!

// 사실 A 는 index.js 이다.. 거기서 감싸줬으니..

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  // useContext() 를 선언하고 그 안에 아까 만들어 놓은 AuthContext 를 넣어준다.
  // console.log(AuthContext) 를 해보면 값이 아까 createContext 안의 값들이 그대로 들어가있다.
  // isLoggedIn: false, onLogin: () => {…}, onLogout: () => {…}

  // ctx 로 선언한 useContext 를 하나 하나 사용 해주면 된다.
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
```
