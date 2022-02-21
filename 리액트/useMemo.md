# useMemo()

함수 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있습니다.

useMemo를 사용하지 않을 시 아래코드는 인풋 값을 입력할 때마다 getAverage을 호출하여 재연산을하면서 리렌더링을 하게 됩니다.

하지만 useMemo를 사용하면 getAverage의 함수의 값은 메모이제이션되어 뎁스의 값이 바뀔 때만 연산을 하게 됩니다.

```js
import React, { useMemo, useState } from 'react';

const getAverage = numbers => {
  console.log("평균 값 계산중")
  if (numbers.length === 0) return 0
  const sum = numbers.reduce((a, b) => a + b)
  return sum / numbers.length
}

const UseMemoSample = () => {

  const [list, setList] = useState([])
  const [number, setNumber] = useState('')

  const onChange = e => {
    setNumber(e.target.value)
  }

  const onInsert = e => {
    const nextList = list.concat(parseInt(number))
    setList(nextList)
    setNumber('')
  }
  
  console.log(list, number)

  const avg = useMemo(() => getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div> 평균 값 {avg}</div>
    </div>
  )
};


export default UseMemoSample
```