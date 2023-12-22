import { FaBars, FaHome, FaRegStar } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css"
import DashboardNav from "../../components/DashboardNav";

const Dashboard = () => {   
    return (
    <div className="bg-[#F3F4F8]">
        <DashboardNav></DashboardNav>
        <div className="drawer lg:drawer-open font-dmsans">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center min-h-screen bg-[#F3F4F8]">
                {/* Page content here */}
                <div className="w-full bg-white py-2 px-2 shadow fixed top-0 z-20 flex items-center lg:hidden">
                    <label htmlFor="my-drawer-2" className="btn btn-ghost btn-circle drawer-button"><FaBars className="text-xl"/></label>
                    <h1 className="text-xl font-bold">Dashboard</h1>
                </div>
                <div className="w-full p-10">
                    <Outlet></Outlet>
                </div>
            
            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="sidemenu p-4 w-72 min-h-full bg-base-100 font-semibold md:font-bold space-y-1 shadow border-t">
                    {/* Sidebar content here */}
                    {
                    <>
                        {/* <li><NavLink to={'/dashboard/home'} className={   ({isActive}) => isActive ? 'text-primary flex items-center gap-4' : 'text-gray-500 flex items-center gap-4'}>
                            <FaHome className="text-lg"/> 
                            Home</NavLink></li> */}
                        <li><NavLink to={'/dashboard/all-tasks'} className={   ({isActive}) => isActive ? 'text-primary flex items-center gap-4' : 'text-gray-500 flex items-center gap-4'}>
                            <GrTask className="text-lg"/> 
                            All Tasks</NavLink></li>
                        <li><NavLink to={'/dashboard/stared-tasks'} className={   ({isActive}) => isActive ? 'text-primary flex items-center gap-4' : 'text-gray-500 flex items-center gap-4'}>
                            <FaRegStar className="text-lg"/> 
                            Starred Tasks</NavLink></li>
                    </>
                    }
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Dashboard;