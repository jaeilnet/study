import React from "react";

import { useCounterContext } from "../compound-components/useCounterContext";

interface Props {
  icon: string;
  onClick?: () => void;
}

function Decrement({ icon = "minus", onClick }: Props) {
  const { handleDecrement } = useCounterContext();
  return (
    <button className={icon} onClick={onClick || handleDecrement}>
      {icon}
    </button>
  );
}

export { Decrement };
