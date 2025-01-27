import React from "react";
import singer from "../../public/Speakers2025/singer.png"

const EntertainmentSession = () => {
  const session = {
    url: singer, // Replace with your image URL
    title: "Chinansha Sharma",
    name: "Chinansha",
    surname: "Sharma",
    description: "Experience the soulful melodies of a talented singer in a mesmerizing TEDx entertainment session."
  };

  return (
    <div className="entertainment-session p-10 text-center">
      {/* H1 Tag */}
      <h1 className="text-5xl font-bold mb-6">
        <span className="text-red-500">Entertainment Session</span>
      </h1>
      {/* Content */}
      <div className="container flex flex-col max-w-2xl justify-self-center justify-between items-center text-white rounded-2xl p-6">
        <img
          src={session.url}
          alt={session.title}
          className="w-80 rounded-[10rem]"
        />
        <div className="text-4xl font-medium">
        {session.name} <span className="text-red-500">{session.surname}</span>
                </div>
        <p className="text-xl font-inter">
          {session.description}
        </p>
      </div>
    </div>
  );
};

export default EntertainmentSession;
