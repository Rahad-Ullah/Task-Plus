import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="bg-[#F3F4F8]">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;