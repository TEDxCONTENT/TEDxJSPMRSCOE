import { useState } from "react";
import tedxLogo from "../assets/tedlogo1.png";
import logo from "../assets/tedlogo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleMenuToggle = () => {
    setClicked(!clicked);

    // Prevent scrolling when menu is open
    if (!clicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="relative z-50">
      <nav className="py-2 lg:px-16 p-4 flex justify-between items-center font-inter text-xl bg-transparent backdrop-blur-md">
        <Link to="/">
          <img className="w-48" src={logo} alt="logo"></img>
        </Link>
        <ul className="lg:flex hidden justify-center items-center gap-8 text-white">
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
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger and Close Icons */}
        <div className="lg:hidden">
          <BiMenuAltRight
            onClick={handleMenuToggle}
            className={`${!clicked ? "cursor-pointer lg:hidden" : "hidden"}`}
            size="2em"
            color="red"
          />
          <IoCloseSharp
            onClick={handleMenuToggle}
            className={`${clicked ? "cursor-pointer lg:hidden" : "hidden"}`}
            size="2em"
            color="red"
          />
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 right-0 bg-red-500 text-white py-4 transform ${
          clicked ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } transition-all duration-300 origin-top`}
        style={{ zIndex: 1000 }}
      >
        <ul className="flex flex-col items-center space-y-4 text-xl font-medium">
          <li className="cursor-pointer hover:text-slate-900">
            <Link to="/about" onClick={handleMenuToggle}>
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:text-slate-900">
            <Link to="/speakers" onClick={handleMenuToggle}>
              TEDx2024
            </Link>
          </li>
          <li className="cursor-pointer hover:text-slate-900">
            <Link to="/tedx2022" onClick={handleMenuToggle}>
              TEDx2022
            </Link>
          </li>
          <li className="cursor-pointer hover:text-slate-900">
            <Link to="/contact" onClick={handleMenuToggle}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Background Overlay */}
      {clicked && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={handleMenuToggle}
          style={{ zIndex: 999 }}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
