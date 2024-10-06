"use client";
import React, { ReactNode, useRef } from "react";

type formProps = {
  children: ReactNode;
  className?: string;
  onSubmit?: () => void;
  action: (formData: FormData) => Promise<void | boolean>;
};

const Form = ({ children, action, onSubmit, className }: formProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={formRef}
      action={async (formData) => {
        await action(formData);
        formRef.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
