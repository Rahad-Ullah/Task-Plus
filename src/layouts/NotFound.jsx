import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="font-dmsans flex justify-center items-center h-screen">
            <div className="text-center text-indigo-900 space-y-4">
                <h1 className="text-7xl font-bold">404</h1>
                <h4 className="text-xl">Oops! Page Not Found</h4>
                <Link to={'/'} className="btn btn-primary btn-outline text-base mt-2">Go Home</Link>
            </div>
        </div>
    );
};

export default NotFound;