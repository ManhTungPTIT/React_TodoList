import "./App.css";
import TodoAdd from "./Component/TodoAdd";
import TodoList from "./Component/TodoList";
import Provider from "./Component/store/Provider";
import TodoTitle from "./Component/TodoTitle";

function App() {
  return (
    <div className="App">
      <TodoTitle />

      <div className="main">
        <Provider>
          <TodoAdd />
          <TodoList />
        </Provider>
      </div>
    </div>
  );
}

export default App;
