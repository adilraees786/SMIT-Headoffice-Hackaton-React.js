import { RouterProvider, createBrowserRouter } from "react-router-dom";
 import  Home  from "./Screen/Home";
 import Signup from "./Screen/Signup";
 import Login from "./Screen/Login";
 import Navbar from "./components/Navbar";
 import Donars from "./Screen/Donars";
 import Chat from "./Screen/Chat"

import BloodDonorForm from "./components/RegisterDonar";
import NotFound from "./Screen/Notfound";
import Loading from "./Screen/Loading";

export default function App() {

   const router = createBrowserRouter([
      { path: "*", element: <NotFound />, },
      { path: "/", element: <Loading />, },
      { path: "/home", element: <Home />, },
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