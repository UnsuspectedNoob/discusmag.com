import React from "react";

function TimerComponent({ value, name }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-24 w-28 bg-[#1a1a1a] p-6 text-center font-digital text-4xl text-white">
        {value}
      </div>
      <p className="font-montserrat text-base font-semibold">
        {name}
        {value == 1 ? "" : "S"}
      </p>
    </div>
  );
}

export default TimerComponent;
