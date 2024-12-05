import React from "react";
import TedLogo from "../assets/Ted-logo.png";
import TedxLogo from "../assets/tedx-logo.png";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about font-inter">
        <div className="text-4xl bg-red-500 text-white font-bold text-center p-4">
          So What's Exactly TED And TEDx?
        </div>
        <div className="flex mt-3 gap-2 p-2 lg:p-8 flex-col md:flex-row">
          <div className="flex justify-center items-center m-4 lg:m-10">
            <iframe
              width="650"
              height="350"
              className="border-4 border-red-500 rounded-lg"
              src="https://www.youtube.com/embed/d0NHOpeczUU?si=eCsTd1ytCeJ_CpS2"
            ></iframe>
          </div>
          <div className="min-h-96 lg:w-1/2 p-8 flex flex-col justify-around items-center rounded-tr-xl rounded-br-xl">
            <img
              src={TedxLogo}
              className="w-52 border-b-2 border-b-red-500 p-2"
            ></img>
            <div className="text-black p-3 text-xl font-medium">
              TEDx is a program of local, self-organized events that bring
              people to get her to share TED- like experience. TEDx is a
              grassroots initiative, created in the spirit of TED’s overall
              mission to research and discover “ideas worth spreading.” TEDx
              brings the spirit of TED to local communities around the globe
              through TEDx events. These events are organized by passionate
              individuals who seek to uncover new ideas and to share the latest
              research in their local areas that spark conversations in their
              communities.
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center m-10">
          <div className=" min-h-96  bg-red-500 p-6 flex flex-col justify-around items-center rounded-xl">
            <img src={TedLogo} className="w-44 border-b-2 p-2"></img>
            <div className="text-white p-3 text-xl font-medium">
              TED is dedicated to researching and sharing knowledge that
              matters, through public speaking presentations. Our goal is to
              inform and educate global audiences in an accessible way.
              Scientists, technologists, business leaders, artists, and other
              world experts take the TED stage to present “Ideas Worth
              Spreading”: valuable new knowledge and innovative research in
              their fields. These TED talks are filmed at our flagship TED
              conferences, independent TEDx events, partner events and salons
              held in our NYC World Theater.
            </div>
          </div>
        </div>
        <div className="About-tedxRscoe flex flex-col gap-8 p-2 px-4 md:p-16">
          <div className="flex justify-center">
            <div className="text-red-500 text-4xl md:text-6xl  font-medium text-center border-b-2 border-b-white p-2 md:p-4">
              TEDx<span className="text-white">JSPMRSCOE</span>
            </div>
          </div>
          <div className="md:pl-14 md:pr-14 pt-8 flex flex-col gap-4">
            <p className="text-white text-xl md:text-2xl">
              At TEDxJSPMRSCOE, we are driven by an ambitious vision: to unite
              visionaries, innovators, problem solvers, doers, funders,
              connectors, and their communities within a single dynamic space.
              Our mission is to ignite minds and expose them to brilliant ideas
              that have the power to shape the world.
            </p>
            <p className="text-white text-xl md:text-2xl">
              Imagine the synergy that emerges when these diverse minds converge
              – sparks of inspiration fly, ideas gain momentum, and positive
              change takes root. This is the fertile ground where groundbreaking
              concepts are born, pushing boundaries and reinventing our local
              society. By becoming a part of TEDxJSPMRSCOE, you contribute to
              this transformative journey. Your support paves the way for a
              collective impact that resonates far beyond our immediate
              community.
            </p>
          </div>
          <div className="flex flex-col gap-10 mt-16">
            <div className="flex justify-center">
              <div className="bg-black rounded-xl p-3 ">
                <h3 className="text-red-500 text-center text-2xl font-bold">
                  Student Organiser
                </h3>
                <h3 className="text-white text-center text-2xl font-medium">
                  Tejas Nagare
                </h3>
              </div>
            </div>
            <div className=" g flex justify-evenly">
              <div className="bg-black rounded-xl p-3">
                <h3 className="text-red-500 text-center text-2xl font-bold">
                  Co-Organiser
                </h3>
                <h3 className="text-white text-center text-2xl font-medium">
                  Nishant Survase
                </h3>
              </div>
              <div className="bg-black rounded-xl p-3">
                <h3 className="text-red-500 text-center text-2xl font-bold">
                  Event Director
                </h3>
                <h3 className="text-white text-center text-2xl font-medium">
                  Shantanu Wararkar
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
