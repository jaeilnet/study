# useCallback()

useCallback 도 useMemo와 마찬가지로 메모이제이션을 할 때 사용합니다.
차이점으로는 useMemo는 컴포넌트 내부에서 발생하는 연산에 대해 최적화를 한다면 useCallback은 함수의 연산에 대해 최적화를 합니다.

```js
import React, { useCallback, useState } from "react"

const UseCallbackSample = () => {
  const [text, setText] = useState()

  const onChange = useCallback((e) => {
    console.log("렌더링 중")
    setText(e.target.value)
  }, [])

  const onClick = useCallback(
    (e) => {
      console.log(text)
    },
    [text]
  )

  return (
    <form>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onClick}>등록</button>
    </form>
  )
}

export default UseCallbackSample
```