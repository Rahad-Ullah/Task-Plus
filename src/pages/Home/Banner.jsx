import { Link } from "react-router-dom";
import task_demo from "../../assets/task-demo-half.jpg"
import { FaArrowRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
    return (
        <div className="font-dmsans border-b pt-20 px-4 md:px-6 lg:px-8">
            <div  data-aos="zoom-out" className="w-full md:max-w-screen-sm mx-auto space-y-8 py-16">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center text-gray-900">Organize your work and life, finally.</h1>
                <h4 className="text-base md:text-xl lg:text-2xl text-center text-gray-600">Become focused, organized, and calm with Task Plus. The world&apos;s #1 task manager and to-do list app.</h4>
                <div className="flex justify-center">
                    <Link to={"/dashboard"} className="btn btn-primary text-base md:text-lg md:font-semibold group">Let&apos;s Explore<FaArrowRight className="transform group-hover:translate-x-2 transition"/></Link>
                </div>
            </div>
            <div data-aos="fade-up" className="">
                <figure className="w-full md:w-4/5 mx-auto">
                    <img src={task_demo} alt="demo" className="rounded-t-xl shadow-[2px_-0.5px_30px_2px_rgba(99,99,99,0.2)]"/>
                </figure>
            </div>
        </div>
    );
};

export default Banner;