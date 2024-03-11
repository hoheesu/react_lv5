import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteTodoApi,
  getDetailTodoApi,
  editTodoApi,
  getTodosApi,
  postTodosApi,
} from "../../axios/todosApi";

export const getTodos = createAsyncThunk("todos/get", async () => {
  const res = await getTodosApi();
  return res;
});

export const postTodos = createAsyncThunk("todos/post", async (todo) => {
  const res = await postTodosApi(todo);
  return res;
});

export const deleteTodos = createAsyncThunk("todos/delete", async (id) => {
  const res = await deleteTodoApi(id);
  return res;
});

export const detailTodo = createAsyncThunk("todos/detail", async (id) => {
  const res = await getDetailTodoApi(id);
  return res;
});

export const editTodo = createAsyncThunk("todo/edit", async (editValue) => {
  const res = await editTodoApi(editValue);
  return res;
});

const todosReducer = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    todo: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(postTodos.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload];
    });
    builder.addCase(detailTodo.fulfilled, (state, action) => {
      state.todo = action.payload;
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.todo = action.payload;
    });
  },
});
export default todosReducer.reducer;
