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
