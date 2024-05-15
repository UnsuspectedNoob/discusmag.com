import React from "react";
import Timer from "../components/Timer";

function MainPage() {
  return (
    <div>
      <div className={`space-y-5 bg-hero-image bg-cover bg-center py-32 pl-5`}>
        <h1 className="w-2/3 font-ussf text-[24px] font-black uppercase leading-none text-white">
          DISCUS is excited to extend an open invitation to all artistes,
          creatives, models, PR’s, sport and fashion enthusiast and visionaries
          to join our inclusive community.
        </h1>

        <h2 className="w-3/4 font-ussf text-[20px] font-bold leading-none text-white">
          Our ecosystem fosters networking, collaboration, and inspiration,
          providing a supportive environment where members can thrive and grow
          in their respective fields. We're a full-service entertainment company
          built on the belief that passion deserves a platform.
        </h2>
      </div>

      <div className="relative mb-10 mt-10 flex flex-col items-center gap-y-4 px-[18px]">
        <h3 className="text-center font-montserrat text-xl font-semibold uppercase ">
          Invitation is open <br /> until 30th of June
        </h3>

        <Timer />

        <button className="w-full max-w-3xl bg-[#1a1a1a] px-14 py-4 text-center font-montserrat text-xl font-bold uppercase text-white">
          Join the community
        </button>
      </div>
    </div>
  );
}

export default MainPage;
