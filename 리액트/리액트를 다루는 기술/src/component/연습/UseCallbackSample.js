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
