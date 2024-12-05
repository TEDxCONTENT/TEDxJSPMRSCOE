import React from 'react';
import { sponsors } from './Sponsorship_logo';

const Sponsorship = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-5xl text-center text-gray-800 mb-4 font-bold">Our Sponsors</h2>
      <div className="flex justify-center items-center">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.logo}
            alt={sponsor.name}
            className="mx-4 my-2 bg-transparent"
            style={{
              height: sponsor.name === "Cloud Entertainment" ? '20%' : '10%',
              width: sponsor.name === "Cloud Entertainment" ? '20%' : '10%',
            }}
          />

        ))}
      </div>
    </div>
  );
};

export default Sponsorship;
