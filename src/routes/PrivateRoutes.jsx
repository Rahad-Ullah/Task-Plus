import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    console.log(user, loading)
    
    if(loading){
        return <div className="flex flex-col lg:flex-row justify-center items-center gap-12 h-screen">
            <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-12 w-full"></div>
                <div className="skeleton h-36 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-12 w-full"></div>
                <div className="skeleton h-36 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-12 w-full"></div>
                <div className="skeleton h-36 w-full"></div>
            </div>
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}}></Navigate>
};

export default PrivateRoutes;