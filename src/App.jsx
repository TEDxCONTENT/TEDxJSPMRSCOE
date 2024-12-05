import { Routes, Route } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import HomePage from "./components/HomePage";
import Tedx2022 from "./components/Tedx2022";
import Speakers from "./components/Speakers";
import SpeakersInfo from "./components/SpeakersInfo";
import Contact from "./components/Contact";
import ComingSoon from "./components/ComingSoon"
import SpeakersInfo2024 from "./components/SpeakerInfo2024";
import Tedx2024 from "./components/Tedx2024";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route index path="/" Component={ComingSoon}></Route> */}
        <Route index path="/" Component={HomePage}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/tedx2022" Component={Tedx2022}></Route>
        <Route path="/speakers" Component={Tedx2024}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
