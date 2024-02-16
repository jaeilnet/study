import React from "react";
import { useCounterContext } from "../compound-components/useCounterContext";

interface Props {
  max: number;
}

export const Count = ({ max }: Props) => {
  const { count } = useCounterContext();

  const hasError = max ? count >= max : false;

  return <div className={`count ${hasError ? "hasError" : ""}`}>{count}</div>;
};
