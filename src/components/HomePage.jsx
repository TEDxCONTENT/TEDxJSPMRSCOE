import { useState } from "react";
import Hero from "./Hero";
import Hero1 from "./Hero1"
import Theme from "./Theme";
import Sponsorship from "./Sponsorship";
import SpeakersInfo2024 from "./SpeakerInfo2024";
import SpeakersInfo2025 from "./SpeakerInfo2025";
import CountdownModal from "./CountDown";
import TeamPhoto from "./TeamPhoto";
import SpeakerBanner from "./SpeakerBanner";
import EntertainmentSession from "./EntertainmentSession";
// import Navbar1 from "./Navbar1";

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const targetDate = new Date('2024-04-20T10:00:00');

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };


  return (
    <>
    {/* <CountdownModal isOpen={modalIsOpen} onClose={handleCloseModal} targetDate={targetDate} /> */}
      {/* <Navbar1></Navbar1> */}
      <Hero1></Hero1>
      <Theme></Theme>
      {/* <SpeakerBanner/> */}
      <SpeakersInfo2025/>
      <EntertainmentSession/>
      {/* <TeamPhoto/> */}
      {/* <Sponsorship></Sponsorship> */}
    </>
  );
};

export default HomePage;
