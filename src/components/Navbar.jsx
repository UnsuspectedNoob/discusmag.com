import React, { useState } from "react";
import { menuOpen, menuClose } from "../assets/images";
import { logo } from "../assets/images";
import { links } from "../constants";
import { Link } from "react-router-dom";
import BlackLine from "./BlackLine";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* The Logo and Menu Button */}
      <div className="relative z-10 flex items-center justify-between px-8 py-12">
        <Link to="/" onClick={() => setNavOpen(false)}>
          <img src={logo} alt="logo" className="w-36" />
        </Link>

        <div>
          <img
            src={!navOpen ? menuOpen : menuClose}
            alt=""
            onClick={() => setNavOpen((prev) => !prev)}
          />
        </div>
      </div>

      {/* The Menu */}
      <div
        className={`${
          !navOpen ? "-translate-y-full top-0" : "translate-y-0"
        } flex flex-col items-center gap-y-3 transition bg-white absolute w-full px-6`}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <div>
          <button className="bg-button-orange text-white text-lg uppercase font-bold px-5 py-1 font-inter">
            Sign Up
          </button>
        </div>

        <div className="flex flex-col gap-y-3 items-center">
          {links.map((value) => (
            <a className="uppercase font-ussf text-xl" key={value}>
              {value}
            </a>
          ))}
        </div>

        <BlackLine />

        <Link to="about" className="uppercase font-ussf text-xl">
          about
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
