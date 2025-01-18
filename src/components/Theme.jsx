import buildTed from '../assets/change.png';
import tedx2024Theme from '../../public/TEDx2024_Theme.png';
import tedx2025 from '../../public/TEDx2025.png';

const Theme = () => {
  return (
    <div>
      <div className="lg:h-[75vh] bg-gradient-to-b from-black via-gray-800 to-gray-900 lg:px-16 px-4 py-12">
        <p className="text-5xl text-center text-white font-bold tracking-wide drop-shadow-md">
          Theme 2025: EvolveX
        </p>

        <div className="flex lg:flex-row flex-col justify-center items-center gap-16 py-8">
          <img
            className="w-72 transform hover:scale-105 transition-transform duration-300 shadow-lg rounded-md"
            src={tedx2025}
            alt="illustration"
          />

          <p className="text-lg lg:w-1/2 text-white font-light leading-relaxed text-justify tracking-wide">
            <span className="font-semibold">EvolveX</span> is about how we grow and adapt in a constantly changing world. It’s about finding
            strength in challenges and thriving through new ideas and diversity. The theme explores how individuals,
            communities, and leaders evolve by balancing opposites, such as tradition and innovation, to create
            something unique. It celebrates stories of breakthroughs and personal growth that inspire everyone to
            dream bigger and make the extraordinary a part of everyday life. The core perspective is to cultivate
            awareness of the world and oneself, fostering growth both internally and externally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Theme;
