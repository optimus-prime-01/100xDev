import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos") 
      .then(function (response) {
        setTodos(response.data); 
      })
     
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.completed ? "Completed" : "Not Completed"} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default App;


