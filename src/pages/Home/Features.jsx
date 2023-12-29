import { AiOutlineProject } from "react-icons/ai";
import { FaArrowRight, FaCode } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { LuShapes } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Features = () => {
    return (
        <div className="font-dmsans py-20 px-4 md:px-6 lg:px-8">
            <div data-aos="fade-up" className="max-w-screen-lg mx-auto text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">A platform built for a new way of working</h1>
                <h4 className="text-base md:text-xl lg:text-2xl mb-8 text-gray-700">Automate tasks and streamline processes with an easy-to-use platform</h4>
                <h4 className="text-base md:text-xl lg:text-2xl text-gray-700">What would you like to manage?</h4>
            </div>
            <div data-aos="zoom-in" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-screen-lg mx-auto text-center text-gray-500 py-16">
                <div className="shadow-lg shadow-indigo-100 border rounded-xl p-4 flex flex-col items-center space-y-4">
                    <LuShapes className="text-4xl text-pink-400"/>
                    <h5 className="leading-tight">Create and design</h5>
                </div>
                <div className="shadow-lg shadow-indigo-100 border rounded-xl p-4 flex flex-col items-center space-y-4">
                    <FaCode className="text-4xl text-sky-400"/>
                    <h5 className="leading-tight">Software development</h5>
                </div>
                <div className="shadow-lg shadow-indigo-100 border rounded-xl p-4 flex flex-col items-center space-y-4">
                    <AiOutlineProject className="text-4xl text-orange-400"/>
                    <h5 className="leading-tight">Project management</h5>
                </div>
                <div className="shadow-lg shadow-indigo-100 border rounded-xl p-4 flex flex-col items-center space-y-4">
                    <HiOutlineSpeakerphone className="text-4xl text-pink-500"/>
                    <h5 className="leading-tight">Marketing</h5>
                </div>
                <div className="shadow-lg shadow-indigo-100 border rounded-xl p-4 flex flex-col items-center space-y-4">
                    <FaCheck className="text-4xl text-green-600"/>
                    <h5 className="leading-tight">Task management</h5>
                </div>
                <div className="shadow-lg shadow-indigo-100 border rounded-xl p-4 flex flex-col items-center space-y-4">
                    <PiStudentBold className="text-4xl text-indigo-500"/>
                    <h5 className="leading-tight">Learning and study</h5>
                </div>
            </div>
            <div data-aos="flip-right" className="flex justify-center">
                <Link to={"/dashboard"} className="btn btn-primary text-base md:text-lg md:font-semibold group">Get Started <FaArrowRight className="transform group-hover:translate-x-2 transition"/></Link>
            </div>
        </div>
    );
};

export default Features;