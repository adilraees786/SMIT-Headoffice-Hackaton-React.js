import { RouterProvider, createBrowserRouter } from "react-router-dom";
 import  Home  from "./Screen/Home";
 import Notfound from "./Screen/Notfound";
 import Signup from "./Screen/Signup";
 import Login from "./Screen/Login";
 import Navbar from "./components/Navbar";
 import Donars from "./Screen/Donars";
 import Chat from "./Screen/Chat"

import BloodDonorForm from "./components/RegisterDonar";

export default function App() {

   const router = createBrowserRouter([

      { path: "/", element: <Home />, },
      { path: "/home", element: <Home />, },
      { path: "/notfound", element: <Notfound />, },
      { path: "/login", element: <Login />, },
      { path: "/signup", element: <Signup />, },
      { path: "/navbar", element: <Navbar />, },
      { path: "/donars", element: <Donars />, },
      { path: "/registerDonar", element: <BloodDonorForm />, },
      { path: "/chat", element: <Chat />, },

   ]);

   return (
      <RouterProvider router={router} />

   )

}