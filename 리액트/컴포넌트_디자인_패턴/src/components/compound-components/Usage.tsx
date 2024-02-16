import React from "react";
import { Counter } from "./Counter";

export const Usage = () => {
  const handleChangeCounter = (count: number) => {
    console.log(count, "count");
  };

  return (
    <Counter onChange={handleChangeCounter} initialValue={0}>
      <Counter.Decrement icon="minus" />
      <Counter.Label>Counter</Counter.Label>
      <Counter.Count max={10} />
      <Counter.Increment icon="plus" />
    </Counter>
  );
};
