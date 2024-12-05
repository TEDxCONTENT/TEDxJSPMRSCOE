import { useEffect } from "react";
import tedxLogo from "../assets/tedlogo1.png";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="bg-red-500 w-[100%] h-2"></div>
      <div className="py-12 lg:px-16 px-4 flex justify-around lg:items-center items-start lg:flex-row flex-col-reverse gap-8">
        <img className="w-48" src={tedxLogo} alt="logo"></img>
        <div className="w-40vw">
          <p className="text-xl font-inter lg:w-100%">
            TED is a nonprofit organization devoted to Ideas Worth Spreading.
          </p>
          <div className="flex justify-center items-center" style={{
            marginTop: '1rem',
          }}>
            <p className="text-xl font-inter-bold">
              Shashank Channawar: +91 92841 58759
            </p>
          </div>
        </div>
        <div className="flex justify-center items-start gap-1 flex-col">
          <p className="text-xl font-inter-bold">Follow us on</p>
          <div className="flex justify-center items-center gap-2">
            <a
              href="https://www.instagram.com/tedxjspmrscoe/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram size="1.5em" />
            </a>
            <a
              href="https://www.youtube.com/@tedxjspmrscoe"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube size="2em" />
            </a>
            <a
              href="https://www.linkedin.com/company/tedxjspmrscoe/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin size="1.5em" />
            </a>
            <a
              href="https://twitter.com/tedxjspmrscoe"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter size="2em" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
