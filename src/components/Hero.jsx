import heroimg from "../assets/tedgif.png"
import theme from "../assets/theme.png"
import TedxImg from '../../public/R&B.png'
import team from '../assets/team.png'


const Hero = () => {
    const redirectToForm = () => {
        window.open("https://forms.gle/vzyxToK2Qyy1Vayv9", "_blank");
    };
    return (

        <div className='flex justify-center items-center relative bg-transparent overflow-hidden lg:pt-1 pt-8'>

            <div className="w-[90vw]">
                <div className="absolute left-64 top-0 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-blob"></div>
                <div className="absolute top-0 right-64 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-blob animation-delay-2s"></div>
                <div className="absolute bottom-0 left-48 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-blob animation-delay-2s"></div>
                <div className="absolute bottom-1 right-80 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-blob animation-delay-4s"></div>

                <div className='relative lg:w-full flex justify-center items-center'>
                    <div className='flex lg:flex-row flex-col justify-center items-center w-full lg:gap-32 gap-16 h-[85vh] font-inter-bold '>
                        <div className='animate-slideleft'>
                            <p className='lg:text-7xl text-5xl'>The</p>
                            <p className='lg:text-9xl text-6xl'><span className='lg:text-8xl text-6xl font-inter-bold text-red-500'>X</span><span className='main-special lg:text-9xl text-6xl'>Change</span></p>
                            <p className='lg:text-6xl text-4xl'>2024</p>
                            <div className="">
                                <button className='bg-red-500 px-4 rounded-lg mt-6 mr-4 text-white py-2 text-3xl'>Event Date : 20th April 2024</button>
                            </div>
                            <button className='bg-red-500 px-4 rounded-lg mt-6 text-white py-2 text-3xl mr-3'>
                                SLAB 2 OPEN
                            </button>
                            <button className='bg-red-500 px-4 rounded-lg mt-6 text-white py-2 text-3xl'
                                onClick={redirectToForm}>
                                Book Your ticket
                            </button>

                        </div>
                        <div className=''>
                            <img className="w-80 animate-slideright lg:pb-0 pb-4" src={TedxImg} alt="theme"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero