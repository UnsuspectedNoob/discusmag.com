import React from "react";
import { hero } from "../assets/images";

function MainPage() {
  return (
    <div>
      <div className={`bg-[url('${hero}')] bg-center py-32 pl-5`}>
        <h1 className="uppercase font-ussf font-black text-white text-[24px]">
          DISCUS is excited to extend an open invitation to all artistes,
          creatives, models, PR’s, sport and fashion enthusiast and visionaries
          to join our inclusive community.
        </h1>

        <h2 className="font-ussf font-bold text-white text-[20px]">
          Our ecosystem fosters networking, collaboration, and inspiration,
          providing a supportive environment where members can thrive and grow
          in their respective fields. We're a full-service entertainment company
          built on the belief that passion deserves a platform.
        </h2>
      </div>
    </div>
  );
}

export default MainPage;
