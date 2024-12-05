import React from "react";
// import tedxjspmrscoeteam2024 from '../../public/Team/IMG_7376.jpg';
import tedxjspmrscoeteam2024 from '../../public/Team/TeamPhoto.jpg';

export default function TeamPhoto() {
  return (
    <div className="bg-black pb-20">
      <div className="text-center lg:text-5xl text-4xl font-inter font-bold lg:p-10 p-5 text-red-500">TEDxJSPMRSCOE TEAM 2024</div>
      <div className="flex justify-center items-center"style={{
        width:'100%',
        height:'80%',
      }}>
        <img src={tedxjspmrscoeteam2024} alt="Team Photo" className="object-cover" style={{
        width:'80%',
        height:'100%',
      }} />
      </div>
    </div>
  );
}
