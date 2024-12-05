import { useContext, useEffect, useState } from "react";
import "./TodoAdd.scss";
import TodoListContext from "../store/TodoContext";
import { actions } from "../store/index";

function TodoAdd() {
  const [state, dispatch] = useContext(TodoListContext);
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState({
    id: 0,
    job: "",
    level: "Nguy cấp",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setItem({
      ...item,
      [name]: value,
    });
  }

  function handleLevel(event) {
    const { name, value } = event.target;

    setItem({
      ...item,
      [name]: value,
    });
  }

  function handleAdd() {
    const itemTodo = {
      id: item.id + 1,
      job: item.job,
      level: item.level,
    };

    state.TodoInput = { ...itemTodo };

    setTodo([...todo, itemTodo]);

    setItem({
      id: item.id + 1,
      job: "",
      level: "Nguy cấp",
    });

    dispatch(actions.setAdd);
  }

  useEffect(() => {
    console.log("Noi dung", todo);
  }, [todo]);

  function handleCancel() {}

  return (
    <div className="contain_TodoAdd">
      <h2 className="">Thêm công việc</h2>
      <div className="input">
        <label htmlFor="myInput">Tên công việc</label>
        <input
          name="job"
          id="myInput"
          placeholder="Nhập công việc"
          className="input"
          value={item.job}
          onChange={handleInput}
        />
      </div>
      <div className="level">
        <label>Mức độ</label>
        <select
          value={item.level}
          className="level"
          onChange={handleLevel}
          name="level"
        >
          <option value="Nguy cấp">Nguy cấp</option>
          <option value="Bình thường">Bình thường</option>
          <option value="Từ từ rồi làm">Tư từ rồi làm</option>
        </select>
      </div>

      <div className="controll">
        <button className="Cancel" onClick={handleCancel}>
          Hủy bỏ
        </button>
        <button className="Add" onClick={handleAdd}>
          Thêm
        </button>
      </div>
    </div>
  );
}

export default TodoAdd;
