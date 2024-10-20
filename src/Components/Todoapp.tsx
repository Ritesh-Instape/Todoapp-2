import React, { useState } from "react";
import Todoinput from "./Todoinput";
import { useEffect } from "react";
import { gettodo } from "../api";
import { todo } from "../contants";
import Todoitem from "./Todoitem";

const Todoapp = () => {
  const [todos, setTodos] = useState<todo[]>([]);

  function handleupdate(tododata: todo) {
    setTodos([...todos, tododata]);
  }

  function handleToggleUpdate(id: string, status: boolean) {
    let todoAll = todos.map((ele) => {
      if (ele.id == id) {
        ele.status = !status;
        return ele;
      } else {
        return ele;
      }
    });
    setTodos(todoAll);
  }


  function handleToggleDelete(id:string){
    let reamTodo = todos.filter((ele)=>{
      if(ele.id != id){
        return ele
      }
    })
    setTodos(reamTodo)
  }

  useEffect(() => {
    gettodo().then((res) => {
      setTodos(res);
    });
  }, []);

  return (
    <div>
      <Todoinput handleupdate={handleupdate} />
      {todos &&
        todos.map((ele) => {
          return <Todoitem handleToggleUpdate={handleToggleUpdate} handleToggleDelete={handleToggleDelete} key={ele.id} {...ele} />;
        })}
    </div>
  );
};

export default Todoapp;
