import React from "react";
import {
  instagram,
  linkedIn,
  logoAlt,
  pinterst,
  whatsapp,
  x,
} from "../assets/images";
import { links } from "../constants";

function Footer() {
  return (
    <div className="bg-[#1a1a1a] pt-16 pb-8">
      <div className="flex flex-col items-center gap-y-16">
        <div className="w-40">
          <img src={logoAlt} alt="logo" className="w-full" />
        </div>
        <div className="grid grid-cols-2 gap-y-7">
          {links.map((link, index) => (
            <a
              href="#"
              key={link}
              className={`text-[20px] text-white font-oswald uppercase ${
                index % 2 == 1 ? "place-self-end" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex gap-x-3">
          {[x, instagram, linkedIn, pinterst, whatsapp].map((link, index) => (
            <img src={link} key={index} />
          ))}
        </div>
      </div>

      <p className="text-center text-[#d9d9d9] uppercase font-montserrat font-semibold tracking-[2px] text-xs mt-16">
        &copy; Discus 2024 all rights reserved
      </p>
    </div>
  );
}

export default Footer;
