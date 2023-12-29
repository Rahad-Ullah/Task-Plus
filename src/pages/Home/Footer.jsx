import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Footer = () => {
    return (
        <div data-aos="fade-up" className='bg-indigo-100 font-dmsans px-4 md:px-6 lg:px-8'>
            <footer className="footer grid-cols-1 lg:grid-cols-5 w-full lg:max-w-6xl mx-auto py-10 text-gray-900">
                <aside className='md:col-span-2'>
                    <h1 className="text-2xl md:text-3xl font-bold flex items-center text-primary">Task <span className="text-3xl md:text-4xl mb-1">+</span></h1>
                    <p className='text-lg font-medium max-w-80'>Join millions of people who organize work and life with Taskplus.</p>
                    <div className='mt-2'>
                        <ul className='flex items-center'>
                            <li><Link className='btn btn-ghost text-xl'><FaTwitter /></Link></li>
                            <li><Link className='btn btn-ghost text-xl'><FaYoutube /></Link></li>
                            <li><Link className='btn btn-ghost text-xl'><FaFacebook /></Link></li>
                            <li><Link className='btn btn-ghost text-xl'><FaInstagram /></Link></li>
                        </ul>
                    </div>
                </aside> 
                <nav className='gap-2'>
                    <header className="footer-title text-base normal-case px-3 text-primary opacity-100">Features</header> 
                    <a className="btn btn-sm btn-ghost text-base">To-do list</a>
                    <a className="btn btn-sm btn-ghost text-base">Priority sorting</a>
                    <a className="btn btn-sm btn-ghost text-base">Drag and drop</a>
                    <a className="btn btn-sm btn-ghost text-base">Nofication</a>
                </nav> 
                <nav className='gap-2'>
                    <header className="footer-title text-base normal-case px-3 text-primary opacity-100">Use cases</header> 
                    <a className="btn btn-sm btn-ghost text-base">Marketing</a>
                    <a className="btn btn-sm btn-ghost text-base">Project managment</a>
                    <a className="btn btn-sm btn-ghost text-base">Developers</a>
                    <a className="btn btn-sm btn-ghost text-base">Learning</a>
                    <a className="btn btn-sm btn-ghost text-base">Operations</a>
                    <a className="btn btn-sm btn-ghost text-base">Construction</a>
                    <a className="btn btn-sm btn-ghost text-base">Sales</a>
                    <a className="btn btn-sm btn-ghost text-base">Designing</a>
                </nav> 
                <nav className='gap-2'>
                    <header className="footer-title text-base normal-case px-3 text-primary opacity-100">Company</header> 
                    <a className="btn btn-sm btn-ghost text-base">About us</a>
                    <a className="btn btn-sm btn-ghost text-base">Contact us</a>
                    <a className="btn btn-sm btn-ghost text-base">Terms of service</a>
                    <a className="btn btn-sm btn-ghost text-base">Privacy policy</a>
                </nav>
            </footer>
            <div>
                <p className='text-sm text-gray-500 text-center py-4'>&copy; Task Plus | All rights reserved 2023</p>
            </div>
        </div>
    );
};

export default Footer;