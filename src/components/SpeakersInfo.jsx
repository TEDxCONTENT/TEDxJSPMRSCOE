import React, { useEffect } from "react";
import Speakers from "./Speakers";
import AOS from "aos";

const SpeakersInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <h2>HII</h2> */}
      <div className="speakers-2022">
        <div className="text-center lg:text-5xl text-4xl font-inter font-bold lg:p-10 p-5 ">
          SPEAKERS FOR <span className="text-red-500">TEDxJSPMRSCOE-2022</span>
        </div>
        <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-2 gap-28 p-6">
          {Speakers?.map((elem, ind) => {
            return (
              // <div
              //   data-aos="zoom-in"
              //   key={Math.random() * 10}
              //   className={`bg-[#061923]  flex flex-col
              //    min-w-[24rem]
              //    border-2
              //    justify-self-center
              //    justify-between
              //    items-center w-2/5 text-white rounded-2xl p-6`}
              // >
              //   <img src={elem?.url} className=" w-80 rounded-[10rem]"></img>
              //   <div className="text-4xl font-medium">
              //     {elem?.name}{" "}
              //     <span className="text-red-500">{elem?.surname}</span>
              //   </div>
              //   <div className="text-xl font-inter">{elem?.desc}</div>
              // </div>
              <div
                data-aos="zoom-in"
                key={ind} // Replace `Math.random()` for consistent keys
                className={`container flex flex-col justify-self-center justify-between items-center text-white rounded-2xl p-6`}
              >
                <img
                  src={elem?.url}
                  alt={`${elem?.name} ${elem?.surname}`}
                  className="w-80 rounded-[10rem]"
                />
                <div className="text-4xl font-medium">
                  {elem?.name} <span className="text-red-500">{elem?.surname}</span>
                </div>
                <div className="text-xl font-inter">{elem?.desc}</div>
              </div>

            );
          })}
        </div>
      </div>
    </>
  );
};

export default SpeakersInfo;
