import axios from "axios";

export async function addtodo(title: string) {
  let res = await axios({
    method: "post",
    url: "http://localhost:3000/todos",
    data: {
      title: title,
      status: false,
    },
  });
  return res.data;
}

export async function gettodo() {
  let res = await axios({
    method: "get",
    url: "http://localhost:3000/todos",
  });

  return res.data;
}

export async function toggletodo(id: string, status: boolean) {
  let res = await axios({
    method: "patch",
    url: `http://localhost:3000/todos/${id}`,
    data: {
      status: !status,
    },
  });
}

export async function deleteTodo(id:string) {
    let res = await axios({
      method: "delete",
      url: `http://localhost:3000/todos/${id}`,
    });
  
    // return res.data;
  }