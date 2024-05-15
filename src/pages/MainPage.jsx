import React from "react";
import Timer from "../components/Timer";
import Feature from "../components/Feature";
import { gridFeatures } from "../constants";
import { giwa, athlete, ally } from "../assets/images";
import BlackButton from "../components/BlackButton";

function MainPage() {
  const images = [athlete, giwa, ally];
  return (
    <div>
      {/* The Hero Section */}
      <div className={`space-y-5 bg-hero-image bg-cover bg-center py-32 pl-5`}>
        <h1 className="w-2/3 font-ussf text-[24px] font-black uppercase leading-none text-white">
          DISCUS is excited to extend an open invitation to all artistes,
          creatives, models, PR’s, sport and fashion enthusiast and visionaries
          to join our inclusive community.
        </h1>

        <h2 className="w-3/4 font-ussf text-[20px] font-bold leading-none text-white">
          Our ecosystem fosters networking, collaboration, and inspiration,
          providing a supportive environment where members can thrive and grow
          in their respective fields. We're a full-service entertainment company
          built on the belief that passion deserves a platform.
        </h2>
      </div>

      {/* Invitation and Deadline */}
      <div className="relative mb-10 mt-10 flex flex-col items-center gap-y-4 px-[18px]">
        <h3 className="text-center font-montserrat text-xl font-semibold uppercase ">
          Invitation is open <br /> until 6th of July
        </h3>

        <Timer />

        <BlackButton text={"Join the community"} />
      </div>

      {/* Features */}
      <div className="px-4">
        {gridFeatures.map((feature) => (
          <Feature
            photo={feature.photo}
            left={feature.left}
            right={feature.right}
            key={feature.photo}
          />
        ))}

        <BlackButton text={"Become a Member"} />
      </div>

      {/* Community Spotlight */}
      <div className="my-4 flex flex-col gap-y-2 px-5">
        <h2 className="text-center font-ussf text-xl font-bold uppercase">
          Community Spotlight
        </h2>
        <p className="pb-4 text-center font-oswald text-2xl font-extralight">
          Every month, we'll shine the spotlight on one outstanding member of
          our creative community. As our featured star, you'll receive exclusive
          access to unique opportunities tailored to your talents and interests.
          From being showcased in our monthly issue publications to
          collaborating on exciting projects, the possibilities are endless,
          with these opportunities spanning every sector of our community
          ecosystem.'
        </p>
      </div>

      {/* Magazine Covers */}
      <div className="mx-auto grid grid-cols-1 px-5 md:grid-cols-3">
        {images.map((image) => (
          <div key={image}>
            <img src={image} alt="magazine-image" className="w-full" />
          </div>
        ))}
      </div>

      <div className="px-5">
        <BlackButton text={"Join the community"} />
      </div>

      <div className="bg-newsletter bg-cover bg-center">
        <div className="flex flex-col gap-y-8 py-36">
          <p className="px-16 text-center font-ussf text-xl font-bold uppercase text-white">
            Subscribe to our Newsletter
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              let email = document.getElementById("email");
              console.log(
                `The email ${email.value} was submitted successfully.`,
              );
              email.value = "";
            }}
            className="flex justify-center"
          >
            <input type="email" name="email" id="email" className="" />
            <input
              type="submit"
              value="Submit"
              className="border-2 border-white bg-button-orange px-3 py-1 font-montserrat text-sm font-bold uppercase text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
