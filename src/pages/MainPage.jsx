import React from "react";
import { hero } from "../assets/images";

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

      <div>
        <h3>Invitation is open until 31st of May</h3>

        <div>
          <div>
            <div>20</div>
            <p>Days</p>
          </div>
          <div>
            <div>30</div>
            <p>minutes</p>
          </div>
          <div>
            <div>50</div>
            <p>seconds</p>
          </div>
        </div>

        <button>Join the community</button>
      </div>
    </div>
  );
}

export default MainPage;
