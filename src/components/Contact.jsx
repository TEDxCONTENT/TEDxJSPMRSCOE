import React from "react";
import LocationImg from "../assets/LocationIcon.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";
import Navbar from "./Navbar";

const Contact = () => {
  const handleMailClick = () => {
    window.location.href = 'mailto:tedx@jspmrscoe.edu.in';
  };
  return (
    <>
    <Navbar />
      <div className="flex flex-col sm:flex-row py-4 px-2 justify-center gap-6">
        <div className="bg-red-500 items-center p-10 text-white flex flex-col gap-2 card-shadow">
          <div className="text-2xl font-semibold italic">
            Applying For Speaker ??
          </div>
          <div className="text-xl">Please Fill out the Google form Below</div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmF21ygMKAOeKVCGOaffjk2XZOpP0aDGzHM72Wlso_5pH3SA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            <span className="flex gap-2 bg-white text-red-600 w-44 p-2 cursor-pointer rounded-md">
              <div className="text-2xl">
                <AiOutlineArrowRight />
              </div>
              <div>Take Me There!</div>
            </span>
          </a>
        </div>
        <div className="bg-red-500 p-10 text-white flex flex-col gap-2 items-center card-shadow">
          <div className="text-2xl font-semibold italic">
            For General inquiry
          </div>
          <div className="text-xl">
            Ask us On Our Insta Page or Reach us At
          </div>
          {/* <div className="flex justify-center items-center gap-2 bg-white text-red-600 w-64 p-2 cursor-pointer rounded-md">
            <div>
              <AiOutlineSend></AiOutlineSend>
            </div>
            <div>info@tedxjspmrscoe.com</div>
          </div> */}
          <div
            className="flex justify-center items-center gap-2 bg-white text-red-600 w-64 p-2 cursor-pointer rounded-md"
            onClick={handleMailClick}
          >
            <div>
              <AiOutlineSend />
            </div>
            <div>tedx@jspmrscoe.edu.in</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-24 font-inter mt-8">
        <div className="flex lg:pl-16 lg:flex-row flex-col justify-center lg:justify-start items-center gap-2  bg-rscoe">
          <div className="flex flex-col justify-center items-center text-white">
            <img src={LocationImg}></img>
            <div className="text-3xl font-bold">Venue Details</div>
            <div
              className="
          text-xl"
            >
              JSPM RSCOE Auditorium
            </div>
            <div
              className="
          text-xl"
            >
              B Building,4th Floor
            </div>
            <div
              className="
          text-xl"
            >
              Tathawade, Pune-411033
            </div>
            <div
              className="
          text-xl"
            >
              Maharashtra
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Contact;
