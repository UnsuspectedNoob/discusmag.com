import React from "react";

function TimerComponent({ value, name, seconds }) {
  return (
    <div className=" flex flex-col items-center">
      <div className="relative h-24 w-28 bg-[#1a1a1a] p-6 text-center font-digital text-4xl text-white">
        {value}

        {!seconds ? (
          ""
        ) : (
          <p className="absolute right-0 top-0 mb-1 mr-1 text-2xl text-gray-400">
            {`${seconds}`.padStart(2, "0")}
          </p>
        )}
      </div>
      <p className="font-montserrat text-base font-semibold">
        {name}
        {value == 1 ? "" : "S"}
      </p>
    </div>
  );
}

export default TimerComponent;
