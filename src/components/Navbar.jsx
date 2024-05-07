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
      <div className="relative z-10 flex items-center justify-between px-8 pb-6 pt-12">
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
          !navOpen ? "top-0 -translate-y-full" : "h-screen translate-y-0"
        } absolute flex w-full flex-col items-center gap-y-3 bg-white px-6 transition`}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <div>
          <button className="bg-button-orange px-5 py-1 font-inter text-lg font-bold uppercase text-white">
            Sign Up
          </button>
        </div>

        <div className="flex flex-col items-center gap-y-3">
          {links.map((value) => (
            <a className="font-ussf text-xl uppercase" key={value}>
              {value}
            </a>
          ))}
        </div>

        <BlackLine />

        <Link to="about" className="font-ussf text-xl uppercase">
          about
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
