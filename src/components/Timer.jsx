import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("May 31, 2024 00:00:00").getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(intervalId);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" grid grid-cols-3 gap-x-4">
      <div className="flex flex-col items-center">
        <div className="p-6 bg-[#1a1a1a] text-white text-4xl font-digital w-28 h-24 text-center">
          {time.days}
        </div>
        <p className="font-montserrat font-semibold text-base">DAYS</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="p-6 bg-[#1a1a1a] text-white text-4xl font-digital w-28 h-24 text-center">
          {time.hours}
        </div>
        <p className="font-montserrat font-semibold text-base">HOURS</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="p-6 bg-[#1a1a1a] text-white text-4xl font-digital w-28 h-24 text-center">
          {time.minutes}
        </div>
        <p className="font-montserrat font-semibold text-base">MINUTES</p>
      </div>
    </div>
  );
}

export default Timer;
