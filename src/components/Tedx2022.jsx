import React from "react";

import groupimg from "../assets/_SRB7501-93.jpg";
import SpeakersInfo from "./SpeakersInfo";
import Navbar from "./Navbar";

const Tedx2022 = () => {
  return (
    <>
    <Navbar />
      <div className="Tedx2022-bg flex flex-col justify-center font-inter items-center">
        <div className="text-white lg:text-6xl text-5xl font-bold text-center border-t-2 border-b-2 p-3">
          THE ESSENCE OF <div className="text-red-500">CHANGING THE WORLD</div>
        </div>
        <div className="text-white text-2xl font-bold m-4 font-inter">
          THEMEx<span className="text-red-500 m">2022</span>
        </div>
      </div>
      <div className="bg-red-500 px-6 pt-8 pb-4 mx-4 mt-4 flex flex-col justify-around items-start rounded-xl">
        <div className="text-white text-3xl lg:text-5xl font-bold font-inter py-2 px-8">
          EVENT OVERVIEW
        </div>
        <div className="flex flex-col-reverse justify-evenly items-center md:flex-row md:items-center">
          <p className="text-white text-left mx-8 lg:text-2xl text-xl font-inter">
            In the spirited reflection of last year's transformative event, "The
            Essence of Changing the World - 2022" stands out as an unforgettable
            gathering of visionaries and changemakers. This inspiring occasion
            brought together a diverse community of individuals united by a
            shared purpose: to explore the boundless potential for positive
            change within each of us and in the world around us. Featuring
            thought-provoking discussions, interactive workshops, and the
            vibrant exchange of ideas, the event celebrated the power of
            collective action
          </p>
          <img
            src={groupimg}
            alt="tedx2022"
            className="mb-4 w-4/5 md:w-2/5 aspect-video rounded-2xl"
          ></img>
        </div>
      </div>
      <SpeakersInfo></SpeakersInfo>
    </>
  );
};

export default Tedx2022;
