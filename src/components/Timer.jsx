import React, { useState, useEffect } from "react";
import TimerComponent from "./TimerComponent";

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
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
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
      <TimerComponent name={"DAY"} value={time.days} key={"Day"} />
      <TimerComponent name={"HOUR"} value={time.hours} key={"Hour"} />
      <TimerComponent
        name={"MINUTE"}
        value={time.minutes}
        key={"Minute"}
        seconds={time.seconds}
      />
    </div>
  );
}

export default Timer;
