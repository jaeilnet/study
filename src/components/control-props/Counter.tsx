import React, { useEffect, useRef, useState } from "react";
import { Count, Decrement, Increment, Label } from "../components";
import { CounterProvider } from "../compound-components/useCounterContext";

const CounterScreen = ({
  children,
  value = null,
  initialValue = 0,
  onChange,
}: any) => {
  const [count, setCount] = useState(initialValue);

  const isControlled = value !== null && !!onChange;

  const getCount = () => (isControlled ? value : count);

  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded.current && !isControlled) {
      onChange && onChange(count);
    }
    firstMounded.current = false;
  }, [count, onChange, isControlled]);

  const handleIncrement = () => handleCountChange(getCount() + 1);
  const handleDecrement = () => handleCountChange(getCount() + -1);

  const handleCountChange = (newValue: number) =>
    isControlled ? onChange(newValue) : setCount(newValue);

  return (
    <CounterProvider
      value={{ count: getCount(), handleIncrement, handleDecrement }}
    >
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
