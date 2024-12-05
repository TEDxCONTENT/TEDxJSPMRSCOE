
import buildTed from '../assets/change.png'
import tedx2024Theme from '../../public/TEDx2024_Theme.png'
const Theme = () => {
  return (
    <div>
        <div className='lg:h-[75vh] bg-[#000000] lg:px-16 px-4 py-12'>
             <p className='text-5xl text-center text-white font-inter-bold'>Theme 2024</p>
             <div className="flex lg:flex-row flex-col  justify-center items-center gap-16 py-8">
             
              <img className='w-72' src={tedx2024Theme} alt='illustration'></img>

              <p className="text-xl lg:w-1/2 text-white font-inter text-justify">
              Change is the only constant in life. It’s the process that transforms us, our communities, and the world around us. "The X Change" theme at our upcoming TEDx event dives deep into the world of transformation, evolution, and revolution. As we prepare for a future rife with uncertainties, this event beckons us to embrace change, highlighting its power and the potential it holds for both individual growth and collective advancement. Our speakers and topics have been meticulously curated to provide insights into how we can adapt, innovate, and thrive in this ever-changing world.</p>
            
             </div>
        </div>
    </div>
  )
}

export default Theme