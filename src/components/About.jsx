import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#111111] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00CDAE]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Sabir Ali Shaikh, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am a recent B.Tech Computer Science graduate (2023)
            , Proficient in HTML, JavaScript, and CSS, I've
              also ventured into advanced frameworks like React and Redux.
              Hailing from Kolkata, I value teamwork and possess excellent
              interpersonal skills. Seeking opportunities in web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
