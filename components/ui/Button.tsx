import clsx from "clsx";
import React, { ReactNode } from "react";

type buttonProps = {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
};
const Button = ({ type, text, onClick, actionButton }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        actionButton &&
          "px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md transition-transform duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
