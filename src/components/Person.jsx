import React from "react";

function Person({ person }) {
  return (
    <div key={person.name} className="flex flex-col leading-none">
      <p className="font-ussf text-[28px] uppercase font-semibold">
        {person.name}
      </p>
      <p className="font-montserrat text-[12px]">{person.position}</p>
    </div>
  );
}

export default Person;
