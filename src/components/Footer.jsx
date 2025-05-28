import { useEffect, useState } from "react";

export default function Footer() {
  const [todos, setTodos] = useState([]);
  const todo =   {
    userId: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

  const fetchApi = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    if(!res.ok){
      console.log("Error");
    }
    setTodos(data);
    console.log(data);
  };

  const addTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos",{
      method:'POST',
       headers:{
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
    const data = await res.json();
    if(!res.ok){
      console.log("Error");
    }
    console.log(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <button style={{ padding: "10px" }} onClick={addTodo}>Add todos</button>
      {todos && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.title}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
