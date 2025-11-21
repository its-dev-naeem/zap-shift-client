import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import BeRider from "../Pages/BeRider";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/rider',
            element: <BeRider/>
        },
    ]
  },
]);