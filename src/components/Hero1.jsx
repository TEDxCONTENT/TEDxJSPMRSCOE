import heroimg from "../assets/tedgif.png";
import theme from "../assets/theme.png";
import TedxImg from "../../public/R&B.png";
import team from "../assets/team.png";
import Navbar1 from "./Navbar1";

const Hero = () => {
    const redirectToForm = () => {
        window.open("https://forms.gle/vzyxToK2Qyy1Vayv9", "_blank");
    };

    return (
        <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${team})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            {/* Navbar */}
            <Navbar1 />

            {/* Black Overlay */}
            

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wide leading-tight">
                    TEDx<span className="text-red-500">JSPMRSCOE</span>
                </h1>
                <p className="mt-2 text-base md:text-lg lg:text-2xl font-bold max-w-2xl mx-auto">
                    An event to inspire, innovate, and ignite your passion. Coming in 2025!
                </p>
            </div>
        </div>
    );
};

export default Hero;
