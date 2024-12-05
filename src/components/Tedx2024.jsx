import React from "react";

import groupimg from "../assets/team.png";
import SpeakersInfo from "./SpeakersInfo";
import SpeakersInfo2024 from "./SpeakerInfo2024";
import Navbar from "./Navbar";

const Tedx2024 = () => {
  return (
    <>
    <Navbar />
      <div className="Tedx2022-bg flex flex-col justify-center font-inter items-center">
        <div className="text-white lg:text-6xl text-5xl font-bold text-center border-t-2 border-b-2 p-3">
          THE <div className="text-red-500">X </div>CHANGE
        </div>
        <div className="text-white text-2xl font-bold m-4 font-inter">
          THEMEx<span className="text-red-500 m">2024</span>
        </div>
      </div>
      <div className="bg-red-500 px-6 pt-8 pb-4 mx-4 mt-4 flex flex-col justify-around items-start rounded-xl">
        <div className="text-white text-3xl lg:text-5xl font-bold font-inter py-2 px-8">
          EVENT OVERVIEW
        </div>
        <div className="flex flex-col-reverse justify-evenly items-center md:flex-row md:items-center">
          <p className="text-white text-left mx-8 lg:text-2xl text-xl font-inter">
          In the dynamic spirit of innovation and collaboration, "The XChange - 2024" became a stage where transformative ideas converged and evolved. This year’s TEDx theme celebrated the power of exchange—of ideas, perspectives, and experiences—as the catalyst for meaningful change. From thought-provoking talks to hands-on workshops and vibrant networking opportunities, The XChange called individuals to share their stories, challenge conventional thinking, and co-create solutions to global and local challenges. Together, we celebrated the limitless possibilities that arose when diverse minds united with a shared vision for a brighter future.
          </p>
          <img
            src={groupimg}
            alt="tedx2022"
            className="mb-4 w-4/5 md:w-2/5 aspect-video rounded-2xl"
          ></img>
        </div>
      </div>
      <SpeakersInfo2024></SpeakersInfo2024>
    </>
  );
};

export default Tedx2024;
