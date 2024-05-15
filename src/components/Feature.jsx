import React from "react";

function Feature({ photo, left, right = undefined }) {
  return (
    <div>
      <div>
        <img src={photo} className="w-full" alt="feature-image" />
      </div>

      <div
        className={`bg-greyish-black ${
          right == undefined ? "" : "grid grid-cols-2 gap-x-9"
        } px-4 pb-8 pt-6`}
      >
        <div>
          <h2 className={`font-oswald text-2xl font-medium text-white`}>
            {left.heading}
          </h2>

          <div className="mb-4 mt-8 w-1/3 border-2" />

          <p
            className={`${
              !(right == undefined)
                ? "font-inter font-medium"
                : "font-montserrat font-normal"
            } text-sm text-white`}
          >
            {left.body}
          </p>
        </div>

        {right == undefined ? (
          ""
        ) : (
          <div className="mb-10 flex flex-col">
            <h2
              className={`text-right font-oswald text-2xl font-medium text-white`}
            >
              {right.heading}
            </h2>

            <div className="mb-4 mt-8 w-1/3 self-end border-2" />

            <p className="text-right font-montserrat text-sm font-medium text-white">
              {right.body}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feature;
