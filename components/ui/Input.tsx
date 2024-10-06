import React from "react";

type inputProps = {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
};
const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <input type={type} value={value} placeholder={placeholder} name={name} className="w-full p-3 shadow-md rounded-md" />
  );
};

export default Input;
