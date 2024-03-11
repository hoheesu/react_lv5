import { todoInstance } from "./axios";

export const getTodosApi = async () => {
  try {
    const res = await todoInstance.get();
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postTodosApi = async (inputValue) => {
  try {
    const res = await todoInstance.post("/", inputValue);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteTodoApi = async (id) => {
  try {
    const res = await todoInstance.delete(`/${id}`);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getDetailTodoApi = async (id) => {
  try {
    const res = await todoInstance.get(`/${id}`);
    return res.data;
  } catch (error) {}
};

export const editTodoApi = async (inputValue) => {
  try {
    const res = await todoInstance.patch(`/${inputValue.id}`, inputValue);
    return res.data;
  } catch (error) {
    throw new Error(error);
    // return Promise.reject(error);
  }
};
