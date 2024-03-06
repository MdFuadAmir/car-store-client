import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Componrntes/Home/Home";
import Login from "../Componrntes/Login/Login";
import Register from "../Componrntes/Register/Register";
import AddCars from "../Componrntes/AddCars/AddCars";
import UpdateCars from "../Componrntes/UpdateCars/UpdateCars";
import Users from "../Componrntes/Users/Users";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://cars-store-server-kpuhfdxox-md-fuad-amirs-projects.vercel.app/car')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/users',
            element: <Users></Users>,
            loader: () => fetch('https://cars-store-server-kpuhfdxox-md-fuad-amirs-projects.vercel.app/user')
        },
        {
            path: 'addCars',
            element: <AddCars></AddCars>
        },
        {
            path: 'updateCars/:id',
            element: <UpdateCars></UpdateCars>,
            loader: ({params}) =>fetch(`https://cars-store-server-kpuhfdxox-md-fuad-amirs-projects.vercel.app/car/${params.id}`)
        }
      ]
    },
  ]);

export default router
