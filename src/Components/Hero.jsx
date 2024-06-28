import React from "react";
import Video from "./Video";
import { video, heroContent } from "../data";

const Hero = () => {
  return (
    <div className="relative h-full w-full">
      <Video src={video} />
      <div className="absolute inset-0 z-10 flex bg-black/40"></div>
      <div className="absolute inset-0 z-20 m-1 flex flex-col items-center justify-center p-1">
        <h1 className="self-center p-1 text-4xl font-semibold text-white">
          {heroContent.heading}
        </h1>
        <p className="self-center p-1 text-2xl font-semibold text-slate-200">
          {heroContent.subheading}
        </p>
      </div>
    </div>
  );
};

export default Hero;
