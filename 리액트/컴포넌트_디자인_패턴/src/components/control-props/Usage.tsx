import React, { useState } from "react";
import { Counter } from "./Counter";

const condition = (value: number) => {
  if (value < 6) {
    console.log(value);
    return true;
  }

  return false;
};

export const Usage = () => {
  const [count, setCount] = useState(0);

  const handleChangeCounter = (newCount: number) => {
    if (condition(newCount)) {
      setCount(newCount);
    }
  };

  return (
    <Counter value={count} onChange={handleChangeCounter}>
      <Counter.Decrement icon="minus" />
      <Counter.Label>Counter</Counter.Label>
      <Counter.Count max={10} />
      <Counter.Increment icon="plus" />
    </Counter>
  );
};
