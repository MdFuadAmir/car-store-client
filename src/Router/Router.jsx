import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Componrntes/Home/Home";
import Login from "../Componrntes/Login/Login";
import Register from "../Componrntes/Register/Register";
import AddCars from "../Componrntes/AddCars/AddCars";
import UpdateCars from "../Componrntes/UpdateCars/UpdateCars";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/car')
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
            path: 'addCars',
            element: <AddCars></AddCars>
        },
        {
            path: 'updateCars/:id',
            element: <UpdateCars></UpdateCars>,
            loader: ({params}) =>fetch(`http://localhost:5000/car/${params.id}`)
        }
      ]
    },
  ]);

export default router
