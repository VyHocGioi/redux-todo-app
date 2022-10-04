// const initState = [
//   { id: 1, name: "learn JS", completed: true, priority: "Low" },
//   { id: 2, name: "learn ReactJS", completed: false, priority: "Medium" },
//   { id: 3, name: "learn Redux", completed: false, priority: "High" },
// ];
// const todoListReducer = (state = initState, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "learn JS", completed: true, priority: "Low" },
    { id: 2, name: "learn ReactJS", completed: false, priority: "Medium" },
    { id: 3, name: "learn Redux", completed: false, priority: "High" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
