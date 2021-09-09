import React from "react";
import data from "../public/data.json";

const Intro = () => {
  return (
    <div id="intro" className="space-y-5 mt-20 md:h-[70vh]">
      <h3 className="text-3xl text-neongreen font-fira">Hi, my name is</h3>
      <h1 className="text-5xl font-extrabold text-text md:text-8xl">
        {data.name}
      </h1>
      <h2 className="text-4xl text-textdark md:text-6xl">
        I build awesome websites!
      </h2>
      <p className="w-4/5 md:w-3/5 text-textdark">
        I&rsquo;m a <span className="text-neongreen">{data.profession}</span>{" "}
        {data.profession}
      </p>
      <button className="py-2 px-5 !mt-10 hover:bg-neongreen/90 hover:border-neongreen/90 hover:backdrop-blur-lg hover:text-white duration-100 border-neongreen border-2 text-neongreen rounded-lg">
        Reach out to me!
      </button>
    </div>
  );
};

export default Intro;
