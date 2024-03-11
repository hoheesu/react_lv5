import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_MOCK_SERVER,
});

export const todoInstance = axios.create({
  baseURL: process.env.REACT_APP_TODO_SERVER,
});
