# 커스텀훅 useXXX

재사용가능성이있는 반복적인 코드를 나만의 훅스로 만들어서 사용하는 방법,
코드량을 많이 줄일 수 있고 반복적인 일을 줄일 수 있다.

```js
// useInput.js
import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const useCustomHookSample = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
};

export default useCustomHookSample;
```

```js
// Info.js
import React from "react";
import useCustomHookSample from "./useCustomHookSample";

const Info = () => {
  // 커스텀훅 사용
  const [state, onChange] = useCustomHookSample({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>

      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```
