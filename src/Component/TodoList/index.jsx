import { useContext } from "react";
import "./TodoList.scss";
import TodoListContext from "../store/TodoContext";

function TodoList() {
  const [state, dispatch] = useContext(TodoListContext);
  console.log(state);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Nội dung</th>
            <th>Tình trạng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>
              <button>Sửa</button>
              <button>Xóa</button>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>
              <button>Sửa</button>
              <button>Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
