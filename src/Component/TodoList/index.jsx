import { useContext, useState } from "react";
import "./TodoList.scss";
import TodoListContext from "../store/TodoContext";
import { actions } from "../store";

function TodoList() {
  const [state, dispatch] = useContext(TodoListContext);
  const [updateItem, setUpdate] = useState(-1);
  const [item, setItem] = useState({
    id: 0,
    job: "",
    level: "Nguy cấp",
  });
  var [editText, setEditText] = useState("");
  var [editSelect, setEditSelect] = useState("");

  function handleUpdate(id) {
    setUpdate(id);
    const itemTodo = state.todo.find((item) => item.id === id);
    setEditText(itemTodo.job);
  }

  function handleSave(id) {
    console.log(editText);
    console.log(editSelect);

    const itemUpdate = {
      id: item.id + 1,
      job: editText,
      level: editSelect,
    };
    // let todoUpdate = { ...itemTodo, ...itemUpdate };

    state.todoInput = { ...itemUpdate };

    dispatch(actions.setUpdate(itemUpdate));
    setUpdate(-1);
  }

  function handleDelete() {}

  function handleCancel() {}

  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            <td className="tableTitle">STT</td>
            <td className="tableTitle">Nội dung</td>
            <td className="tableTitle">Tình trạng</td>
            <td className="tableTitle">Hành động</td>
          </tr>
        </thead>
        <tbody>
          {state.todo.map((item, index) =>
            updateItem === item.id ? (
              <tr key={item.id}>
                <td className="scope">{item.id}</td>
                <td className="white">
                  <input
                    value={editText}
                    className="inputLock"
                    onChange={(e) => setEditText(e.target.value)}
                    name="job"
                    style={{
                      border: "1px solid black",
                      borderRadius: "5px",
                    }}
                  />
                </td>
                <td className="scope">
                  <select
                    value={editSelect}
                    className="lockSelect"
                    onChange={(e) => setEditSelect(e.target.value)}
                    name="level"
                    style={{
                      border: "1px solid black",
                    }}
                  >
                    <option value="Nguy cấp">Nguy cấp</option>
                    <option value="Bình thường">Bình thường</option>
                    <option value="Từ từ rồi làm">Tư từ rồi làm</option>
                  </select>
                </td>
                <td className="white Button">
                  <button className="btSave" onClick={handleSave}>
                    Lưu
                  </button>
                  <button className="btCancel" onClick={handleCancel}>
                    Hủy
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={item.id}>
                <td className="scope">{item.id}</td>
                <td className="white">
                  <input
                    value={item.job}
                    className="inputLock"
                    disabled
                    name="job"
                    style={{
                      outline: "none",
                    }}
                  />
                </td>
                <td className="scope">
                  <select
                    value={item.level}
                    className="lockSelect"
                    name="level"
                    disabled
                    style={{
                      appearance: "none",
                      border: "none",
                    }}
                  >
                    <option value="Nguy cấp">Nguy cấp</option>
                    <option value="Bình thường">Bình thường</option>
                    <option value="Từ từ rồi làm">Tư từ rồi làm</option>
                  </select>
                </td>
                <td className="white Button">
                  <div>
                    <button
                      className="btUpdate"
                      onClick={() => handleUpdate(item.id)}
                    >
                      Sửa
                    </button>
                  </div>
                  <div>
                    <button className="btDelete" onClick={handleDelete}>
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
