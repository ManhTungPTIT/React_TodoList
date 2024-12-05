import { useReducer } from "react";
import TodoContext from "./TodoContext";
import reducer, { initState } from "./State";

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  );
}

export default Provider;
