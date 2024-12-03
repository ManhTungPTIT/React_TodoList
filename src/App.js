import "./App.css";
import TodoAdd from "./Component/TodoAdd";
import TodoTitle from "./Component/TodoTitle";
import TodoList from "./Component/TodoList";
import Provider from "./Component/store/Provider";

function App() {
  <div className="App">
    <TodoTitle />

    <div className="main">
      <Provider>
        <TodoAdd />
        <TodoList />
      </Provider>
    </div>
  </div>;
}

export default App;
