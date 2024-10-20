import React from "react";
import { todo } from "../contants";
import { toggletodo } from "../api";
import { deleteTodo } from "../api";

interface todoItemProp extends todo {
  handleToggleUpdate: (a: string, b: boolean) => void;
  handleToggleDelete: (a: string) => void;
}

const Todoitem = ({ id, title, status, handleToggleUpdate,handleToggleDelete }: todoItemProp) => {
  function handleToggle() {
    toggletodo(id, status);
    handleToggleUpdate(id, status);
  }

  function handleToDelete() {
    deleteTodo(id);
    handleToggleDelete(id);
  }

  return (
    <div>
      <h3>
        Title: {title} status : {status ? "True" : "False"}
      </h3>
      <button onClick={handleToggle}>toggle</button>
      <button onClick={handleToDelete}>delete</button>
    </div>
  );
};

export default Todoitem;
