import React, { ReactNode, useEffect, useState } from "react";
import { CounterProvider } from "./useCounterContext";
import { Count, Decrement, Increment, Label } from "../components";

interface Props {
  children: ReactNode;
  onChange: (count: number) => void;
  initialValue: number;
}

// 비지니스 로직

const CounterScreen = ({ children, onChange, initialValue = 0 }: Props) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    onChange && onChange(count);
  }, [count, onChange]);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(Math.max(0, count - 1));

  return (
    <CounterProvider value={{ count, handleIncrement, handleDecrement }}>
      <div className="container">{children}</div>
    </CounterProvider>
  );
};

export const Counter = Object.assign(CounterScreen, {
  Count,
  Decrement,
  Increment,
  Label,
});
