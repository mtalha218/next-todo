import React from "react";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { create } from "@/app/actions/todoActions";

const AddTodo = () => {
  return (
    <Form action={create} className="mx-auto max-w-[1000px] flex gap-4">
      <Input type="text" placeholder="Enter a new todo" name="input" />
      <Button type="submit" text="Enter" actionButton={true} />
    </Form>
  );
};

export default AddTodo;
