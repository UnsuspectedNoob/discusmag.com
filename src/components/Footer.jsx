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
    <div className="bg-greyish-black pb-8 pt-16">
      <div className="flex flex-col items-center gap-y-16">
        <div className="w-40">
          <img src={logoAlt} alt="logo" className="w-full" />
        </div>
        <div className="grid grid-cols-2 gap-y-7">
          {links.map((link, index) => (
            <a
              href="#"
              key={link}
              className={`font-oswald text-[20px] uppercase text-white ${
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

      <p className="mt-16 text-center font-montserrat text-xs font-semibold uppercase tracking-[2px] text-[#d9d9d9]">
        &copy; Discus 2024 all rights reserved
      </p>
    </div>
  );
}

export default Footer;
