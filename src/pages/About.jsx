import React from "react";
import { logo } from "../assets/images";
import { people } from "../constants";
import BlackLine from "../components/BlackLine";
import Person from "../components/Person";

function About() {
  return (
    <div className="px-[22px]">
      <div>
        <img src={logo} alt="logo" className="font mx-auto w-72 pb-12" />
      </div>

      <BlackLine />

      <div className="mb-3 mt-5 flex flex-col gap-y-3 font-montserrat text-lg font-light leading-[1]">
        <p>
          DISCUS is a Magazine, Full Service Entertainment Company and all
          inclusive management agency founded by{" "}
          <span className="font-semibold">Onaolapo Tonas</span> and{" "}
          <span className="font-semibold">Basil-Mmereole Precious</span>.
        </p>
        <p>
          DISCUS aims to become the ultimate source of Arts and Entertainment by
          Fostering its Diversity in our Ecosystem.
        </p>
        <p>
          We are passionate about cultivating inclusive community of passionate
          individuals in Music, Sports, Arts, Fashion, Photography, Film and so
          on. As a multi-faceted entertainment company, we offer a diverse range
          of services, events, and opportunities to support and empower talented
          individuals and organizations across various artistic disciplines
          through talent management, exclusive content, marketing and strategic
          brand development, we inspire and elevate our Sports and Creative
          Community
        </p>
      </div>

      <BlackLine />

      <div className="mt-5 flex flex-col gap-y-6 pb-7">
        {people.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      </div>
    </div>
  );
}

export default About;
