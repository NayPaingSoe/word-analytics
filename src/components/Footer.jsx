import { useEffect, useState } from "react"

export default function Footer() {
  const [todos,setTodos] = useState([]);
 const fetchApi = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const response = await res.json();
  setTodos(response);
  console.log(response);
 }
  useEffect(() => {
   fetchApi();
  }, []);
  return (
    <div>
      <button style={{padding: '10px'}}>Click</button>
      {todos && (  <ul>
        {todos.map(todo=>
        (<li key={todo.title}>{todo.title}</li>)
        )}
      </ul>)}
    
    </div>
  )
}
