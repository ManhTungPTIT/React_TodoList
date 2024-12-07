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
    case "ADD_ITEM": //Khi nhận dữ liệu thì mới bắt đầu thêm vào vào todo
      console.log("here");
      console.log(state);
      return {
        ...state, // Giữ nguyên các phần khác của state
        todo: [...state.todo, state.todoInput], // Cập nhật mảng todo
      };
    case "CANCEL": {
      return state;
    }
    case "UPDATE_ITEM": {
      state.todo.forEach((item) => {
        if (item.id === state.todoInput.id) {
          item.job = state.todoInput.job;
          item.level = state.todoInput.level;
        }
      });
      return {
        ...state,
        todoInput: {
          id: 0,
          job: "",
          level: "Nguy cấp",
        },
      };
    }
    case "DELETE_ITEM": {
      state.todo = state.todo.splice(state.todoInput.id);
      return {
        ...state,
        todoInput: {
          id: 0,
          job: "",
          level: "Nguy cấp",
        },
      };
    }
    default:
      throw new Error("Wrong");
  }
}

export { initState };
export default reducer;
