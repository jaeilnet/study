import { ButtonHTMLAttributes } from "react";
import buttons from "./buttons.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color: string;
  onClick?: () => void;
}

const Buttons = ({ label, color, ...props }: Props) => {
  return (
    <button
      style={{ padding: "12px 24px" }}
      className={buttons[color]}
      {...props}
    >
      {label}
    </button>
  );
};

export default Buttons;
