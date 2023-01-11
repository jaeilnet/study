import React from "react";

import { useCounterContext } from "../compound-components/useCounterContext";

function Decrement({ icon = "minus" }) {
  const { handleDecrement } = useCounterContext();
  return (
    <button className={icon} onClick={handleDecrement}>
      {icon}
    </button>
  );
}

export { Decrement };
