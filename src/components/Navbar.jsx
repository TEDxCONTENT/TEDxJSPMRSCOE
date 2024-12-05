import { useState } from "react";
import tedxLogo from "../assets/tedlogo1.png";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <nav className="py-2 lg:px-16 p-4 flex justify-between items-center font-inter text-xl bg-transparent backdrop-blur-md">
        <Link to="/">
          <img className="w-48" src={tedxLogo} alt="logo"></img>
        </Link>
        <ul className="lg:flex hidden justify-center items-center gap-8 text-slate-800">
          <li className="cursor-pointer hover:text-red-500">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-red-500">
            <Link to="/speakers">TEDx2024</Link>
          </li>
          <li className="cursor-pointer hover:text-red-500">
            <Link to="/tedx2022">TEDx2022</Link>
          </li>
          <li className="cursor-pointer hover:text-red-500">
            <Link to="/contact">Contact </Link>
          </li>
        </ul>

        <div className="lg:hidden">
          <BiMenuAltRight
            onClick={() => {
              setClicked(true);
            }}
            className={`${!clicked ? "cursor-pointer lg:hidden " : "hidden"}`}
            size="2em"
            color="red"
          />
          <IoCloseSharp
            onClick={() => {
              setClicked(false);
            }}
            className={`${clicked ? "cursor-pointer lg:hidden " : "hidden"}`}
            size="2em"
            color="red"
          />
        </div>
      </nav>
      <div
        className={`${
          clicked
            ? "lg:hidden flex justify-evenly items-center gap-8 bg-red-500 text-white text-xl flex-col p-8 font-inter"
            : "hidden"
        }`}
      >
        <p className="cursor-pointer hover:text-slate-900">
          <Link to="/about">About</Link>
        </p>
        <p className="cursor-pointer hover:text-slate-900">
          <Link to="/speakers">Speakers</Link>
        </p>
        <p className="cursor-pointer hover:text-slate-900">
          <Link to="/tedx2022">TEDx2022</Link>
        </p>
        <p className="cursor-pointer hover:text-slate-900">
          <Link to="/contact">Contact </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;