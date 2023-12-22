import { FaBars, FaHome, FaRegStar } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css"
import DashboardNav from "../../components/DashboardNav";

const Dashboard = () => {   
    return (
    <div className="bg-[#F3F4F8]">
        <DashboardNav></DashboardNav>
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center min-h-screen bg-gray-50">
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
                        <li><NavLink to={'/dashboard/user-home'} className={   ({isActive}) => isActive ? 'text-primary flex items-center gap-4' : 'text-gray-500 flex items-center gap-4'}>
                            <FaHome className="text-lg"/> 
                            Home</NavLink></li>
                        <li><NavLink to={'/dashboard/add-pet'} className={   ({isActive}) => isActive ? 'text-primary flex items-center gap-4' : 'text-gray-500 flex items-center gap-4'}>
                            <GrTask className="text-lg"/> 
                            All Tasks</NavLink></li>
                        <li><NavLink to={'/dashboard/my-donations'} className={   ({isActive}) => isActive ? 'text-primary flex items-center gap-4' : 'text-gray-500 flex items-center gap-4'}>
                            <FaRegStar className="text-lg"/> 
                            Starred Tasks</NavLink></li>
                    </>
                    // <>
                    //     <li><NavLink to={'/dashboard/user-home'}><AiFillHome className="text-xl"/> User Home</NavLink></li>
                    //     <li><NavLink to={'/dashboard/reservation'}><FaCalendarAlt className="text-xl"/> Reservation</NavLink></li>
                    //     <li><NavLink to={'/dashboard/payment-history'}><IoWalletSharp className="text-xl"/> Payment History</NavLink></li>
                    //     <li><NavLink to={'/dashboard/cart'}><FaCartShopping  className="text-xl"/> My Cart ({cart.length})</NavLink></li>
                    //     <li><NavLink to={'/dashboard/review'}><MdReviews   className="text-xl"/> Add Review</NavLink></li>
                    // </>

                    }
                    {/* divider */}
                    <div className="divider before:bg-white after:bg-white"></div>
                    {/* <li><NavLink to={'/'}><AiFillHome className="text-xl"/> Home</NavLink></li>
                    <li><NavLink to={'/menu'}><FaBars className="text-xl"/> Menu</NavLink></li>
                    <li><NavLink to={'/order/pizza'}><IoBag className="text-xl"/> Shop</NavLink></li>
                    <li><NavLink to={'/contact-us'}><IoMail className="text-xl"/> Contact</NavLink></li> */}
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Dashboard;