import { useState } from "react";
import TodoContext from "./TodoContext";
import initSate from "./State";

function Provider({ children }) {
  const [todo, SetTodo] = useState([initSate]);

  return <TodoContext.Provider value={todo}>{children}</TodoContext.Provider>;
}

export default Provider;
