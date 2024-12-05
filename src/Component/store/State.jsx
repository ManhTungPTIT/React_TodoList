import { setAdd } from "./actions";

const initState = {
  todo: [],
  todoInput: {
    id: 0,
    job: "",
    level: "Nguy cấp",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case setAdd:
      return {
        ...state, // Giữ nguyên các phần khác của state
        todo: [...state.todo, state.todoInput], // Cập nhật mảng todo
        todoInput: {
          id: 0,
          job: "",
          level: "Nguy cấp",
        }, // Reset lại trường todoInput nếu cần
      };
    case "CANCEL": {
      return state;
    }
    default:
      throw new Error("Wrong");
  }
}

export { initState };
export default reducer;
