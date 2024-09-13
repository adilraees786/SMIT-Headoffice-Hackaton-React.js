import { RouterProvider, createBrowserRouter } from "react-router-dom";
 import  Home  from "./Screen/Home";
 import Notfound from "./Screen/Notfound";
 import Signup from "./Screen/Signup";
 import Login from "./Screen/Login";

export default function App() {

   const router = createBrowserRouter([

      { path: "/home", element: <Home />, },
      { path: "/notfound", element: <Notfound />, },
      { path: "/login", element: <Login />, },
      { path: "/signup", element: <Signup />, },

   ]);

   return (
      <RouterProvider router={router} />

   )

}