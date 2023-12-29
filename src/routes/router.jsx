import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Todo from "../pages/TODO/Todo";
import StaredTasks from "../pages/Dashboard/StaredTasks";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Home/Home";
import NotFound from "../layouts/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "sign-up",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                index: true,
                element: <Todo></Todo>
            },
            {
                path: "stared-tasks",
                element: <StaredTasks></StaredTasks>
            },
        ]
    }
])

export default router;