import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodosList from "./components/TodosList";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((res) => {
        setTodo(res.data.todoDisplay);
      })
      .catch((error) => console.log(error));

  });

  return (
    <>
      <div className="">
        <CreateTodo />
        <TodosList  todos={todo} />
      </div>
    </>
  );
}

export default App;
