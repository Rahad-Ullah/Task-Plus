import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Todo from "../pages/TODO/Todo";
import Home from "../pages/Dashboard/Home";
import StaredTasks from "../pages/Dashboard/StaredTasks";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "home",
                element: <Home></Home>
            },
            {
                path: "all-tasks",
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