import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
    const {user, logout} = useAuth()
    
    const links = <>
        <li className="hover:text-primary"><NavLink to={'/features'} className={({isActive}) => isActive ? 'text-primary' : ''}>Features</NavLink></li>
        <li className="hover:text-primary"><NavLink to={'/pricing'} className={({isActive}) => isActive ? 'text-primary' : ''}>Pricing</NavLink></li>
        {
            user ? <li className="hover:text-primary"><NavLink to={'/dashboard'} className={({isActive}) => isActive ? 'text-primary' : ''}>Dashboard</NavLink></li>
            : <li className="hover:text-primary"><NavLink to={'/login'} className={({isActive}) => isActive ? 'text-primary' : ''}>Login</NavLink></li>
        }
    </>
    return (
        <div className="drawer fixed top-0 z-30">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar items-center bg-base-100 bg-opacity-70 text-gray-600 p-3 md:px-6 lg:px-8">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                    <div className="flex-1 justify-center lg:justify-start">
                        <h1 className="text-2xl md:text-3xl font-bold flex items-center text-primary -ml-6 lg:ml-0">Task <span className="text-3xl md:text-4xl mb-1">+</span></h1>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className=" menu-horizontal items-center font-semibold gap-8">
                        {/* Navbar menu content here */}
                            {links}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
            </div> 
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="p-6 py-10 flex flex-col gap-2 w-64 min-h-full bg-white bg-opacity-80 font-semibold space-y-1">
                {/* Sidebar content here */}
                    <li className=""><NavLink to={'/features'} className={({isActive}) => isActive ? 'text-primary bg-[#aaa6f239]' : 'p-2 px-3 hover:bg-[#aaa6f239] rounded-lg'}>Features</NavLink></li>
                    <li className=""><NavLink to={'/pricing'} className={({isActive}) => isActive ? 'text-primary bg-[#aaa6f239]' : 'p-2 px-3 hover:bg-[#aaa6f239] rounded-lg'}>Pricing</NavLink></li>
                    {
                        user ? <li className=""><NavLink to={'/dashboard'} className={({isActive}) => isActive ? 'text-primary bg-[#aaa6f239]' : 'p-2 px-3 hover:bg-[#aaa6f239] rounded-lg'}>Dashboard</NavLink></li>
                        : <li className=""><NavLink to={'/login'} className={({isActive}) => isActive ? 'text-primary bg-[#aaa6f239]' : 'p-2 px-3 hover:bg-[#aaa6f239] rounded-lg'}>Login</NavLink></li>
                    }
                    {
                        user && <li className="px-3 hover:bg-[#aaa6f239] rounded-lg"><Link onClick={() => logout()}>Logout</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;