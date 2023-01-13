import React from "react";
import { useCounterContext } from "../compound-components/useCounterContext";

interface Props {
  icon: string;
  onClick?: () => void;
}

function Increment({ icon = "plus", onClick }: Props) {
  const { handleIncrement } = useCounterContext();
  return (
    <button className={icon} onClick={onClick || handleIncrement}>
      {icon}
    </button>
  );
}

export { Increment };
