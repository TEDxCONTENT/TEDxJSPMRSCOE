import heroimg from "../assets/tedgif.png";
import theme from "../assets/theme.png";
import TedxImg from "../../public/R&B.png";
import teamb from "../assets/teamb.png";
import evolvexLogo from "../../public/Group 12.png"; 
import Navbar1 from "./Navbar1";

const Hero = () => {
    const redirectToForm = () => {
        window.open("https://shorturl.at/ZZFdv", "_blank");
    };

    return (
        <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${teamb})` }}
        >
            {/* Navbar */}
            <Navbar1 />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
                {/* Evolve X Logo */}
                {/* <img
                    src={evolvexLogo}
                    alt="Evolve X Logo"
                    className="w-32 md:w-40 lg:w-48 mb-6"
                /> */}

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wide leading-tight">
                    TEDx<span className="text-red-500">JSPMRSCOE</span>
                </h1>

                {/* Event Description */}
                <p className="mt-2 text-base md:text-lg lg:text-2xl font-bold max-w-2xl mx-auto">
                    An event to inspire, innovate, and ignite your passion. Coming on <span className="text-yellow-400">January 31, 2025</span>!
                </p>

                {/* Button */}
                <button
                    onClick={redirectToForm}
                    className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg text-lg md:text-xl shadow-md transition-all duration-300"
                >
                    Get Your Tickets Now!
                </button>
            </div>
        </div>
    );
};

export default Hero;
