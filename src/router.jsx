import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostTodo from "./pages/PostTodo";
import TodoLists from "./pages/TodoLists";
import TodoDetail from "./pages/TodoDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/todo/post",
        element: <PostTodo />,
      },
      {
        path: "/todo/list",
        element: <TodoLists />,
      },
      {
        path: "/todo/list/:id",
        element: <TodoDetail />,
      },
    ],
  },
]);
