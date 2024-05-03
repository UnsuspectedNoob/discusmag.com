import React from "react";
import Timer from "../components/Timer";

function MainPage() {
  return (
    <div>
      <div className={`bg-hero-image bg-center py-32 pl-5 space-y-5 bg-cover`}>
        <h1 className="uppercase font-ussf font-black text-white text-[24px] w-2/3 leading-none">
          DISCUS is excited to extend an open invitation to all artistes,
          creatives, models, PR’s, sport and fashion enthusiast and visionaries
          to join our inclusive community.
        </h1>

        <h2 className="font-ussf font-bold text-white text-[20px] w-3/4 leading-none">
          Our ecosystem fosters networking, collaboration, and inspiration,
          providing a supportive environment where members can thrive and grow
          in their respective fields. We're a full-service entertainment company
          built on the belief that passion deserves a platform.
        </h2>
      </div>

      <div className="flex flex-col items-center px-[18px] mt-10 gap-y-4 mb-10">
        <h3 className="font-montserrat font-semibold text-xl uppercase text-center ">
          Invitation is open <br /> until 31st of May
        </h3>

        <Timer />

        <button className="bg-[#1a1a1a] text-white text-nowrap text-center uppercase py-4 px-14 font-montserrat font-bold text-xl w-full max-w-3xl">
          Join the community
        </button>
      </div>
    </div>
  );
}

export default MainPage;
