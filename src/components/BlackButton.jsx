import React from "react";

function BlackButton({ text }) {
  return (
    <button className="my-4 w-full bg-greyish-black py-4 text-center font-montserrat text-xl font-bold uppercase text-white">
      {text}
    </button>
  );
}

export default BlackButton;
