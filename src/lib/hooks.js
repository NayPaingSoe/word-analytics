import { useEffect } from "react";
import { useState } from "react";

export const useQuantity = () => {
  const [todosCount, setTodosCount] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      if (!res.ok) {
        console.log("Error");
      }
      setTodosCount(data.length);
      console.log(data);
    };
    fetchApi();
  }, []);

  return { todosCount };
};
