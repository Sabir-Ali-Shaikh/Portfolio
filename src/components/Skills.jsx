import React from "react";
import showSkills from "../data/skill";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#111111]  text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#00CDAE] ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {showSkills.map((val, index) => {
            return (
              <div
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
                index={index}
              >
                <img className="w-20 mx-auto" src={val.icon} alt="HTML icon" />
                <p className="my-4">{val.skillName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
