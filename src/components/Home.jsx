import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import resume from "../assets/pdf/sabircv.pdf";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#111111]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#00CDAE]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sabir Ali Shaikh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-end Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Front-end Developer specializing in building exceptional digital
          experiences. Currently, I'm focused on building responsive web
          applications.
        </p>
        <div>
          <a
            href={resume}
            download="resume"
            className="text-white group w-[10rem] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00CDAE] hover:border-[#00CDAE]"
          >
            {/* <a href={resume} className="w-full" download="resume">
              Download Resume
            </a> */}
            Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
