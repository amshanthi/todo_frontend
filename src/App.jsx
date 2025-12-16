import "./index.css";
import TodoList from "./TodoList/TodoList";

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://todoapp-bankend.onrender.com/Home");
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <>
      <TodoList data={data} />
    </>
  );
}

export default App;
