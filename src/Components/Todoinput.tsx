import React from "react";
import { useState } from "react";
import { addtodo } from "../api";
import { gettodo } from "../api";
import { todo } from "../contants";

type handleupis = {
  handleupdate: (a: todo) => void;
};

const Todoinput = ({ handleupdate }: handleupis) => {
  const [title, setTitle] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addtodo(title).then((res) => {
      handleupdate(res);
    });
    setTitle("");
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default Todoinput;
