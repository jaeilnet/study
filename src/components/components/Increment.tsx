import React from "react";
import { useCounterContext } from "../compound-components/useCounterContext";

function Increment({ icon = "plus" }) {
  const { handleIncrement } = useCounterContext();
  return (
    <button className={icon} onClick={handleIncrement}>
      {icon}
    </button>
  );
}

export { Increment };
