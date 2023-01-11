import React, { useState } from "react";
import { Counter } from "./Counter";

export const Usage = () => {
  const [count, setCount] = useState(0);

  const handleChangeCounter = (newCount: number) => {
    setCount(newCount);
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
