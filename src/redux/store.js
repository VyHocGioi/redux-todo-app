// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const composeEnhancer = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhancer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/FilterSlice";
import todoListSlice from "../components/TodoList/TodoSlice";
const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});
export default store;
