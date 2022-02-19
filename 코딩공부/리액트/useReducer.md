# useReducer
> useReducer 

useState 와 흡사 비슷하다.
차이점으로는 useState 는 다음 상태를 직접 지정하지만 useReducer 는 액션이라는 객체를 기반으로 상태를 바꾸어줍니다.

>사용방법

```javascript
const [number, dispatch] = useReducer(reducer, initialState)
```

- number 는 현재 상태 값, dispatch는 액션을 발생시키며 reducer에는 함수를, initialState에는 초기 값을 나타냄

- 컴포넌트 밖에서 만들어져야함, reducer 함수는 컴포넌트의 데이터들을 필요로 하는 것이 아니기 때문

사용예제

```javascript

import React, { useReducer } = from "react"


// 컴포넌트 밖에서 만들어져야함
const emailReducer = (state, action) => {
  //  타입에 따라 로직을 처리하면 됨
  switch (action.type) {
    case "USER_EMAIL":
      return { value : action.val, isValid : action.val }
    case "USER_EMAIL_CHECKING":
      return { value : state.val, isValid : state.val }
    default : 
      throw new Error();
  }
}

const Login = (props) => {
  //  useReudcer 선언 후 함수와, 초기값을 설정함.
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid : false
  })

  const emailChangeHandler = (e) => {
    // 디스패치를 통해서 type 과 값(val)을 넘겨준다.
    dispatchEmail({ type : "USER_EMAIL", val : e.target.value})
  }


  return ( 
    <input 
      type="email" 
      value={emailState.value} 
      onChange={emailChangeHandler}
      > 
      테스트용 
      </input>
  )
}
```

* React 는 dispatch 함수의 동일성이 안정적이고 리렌더링 시에도 변경되지 않으리라는 것을 보장합니다? 이것이 useEffect 나 useCallback 의존성 목록에 이 함수를 포함하지 않아도 괜찮은 이유입니다.

