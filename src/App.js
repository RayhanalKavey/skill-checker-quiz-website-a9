import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./outlet/Main";
import Home from "./component/Home/Home";
import Statistics from "./component/Statistics/Statistics";
import Blog from "./component/Blog/Blog";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Quiz from "./component/Quiz/Quiz";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/statistics", element: <Statistics></Statistics> },
        { path: "/blog", element: <Blog></Blog> },
        {
          path: "/topic/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quiz></Quiz>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
