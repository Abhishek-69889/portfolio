import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <div id="experience">

        <hr
          className="mt-10 border-4 rounded-3xl border-[#c72cb6] 
             w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] 
             mx-auto"
        />

        <section
          id="experience"
          className="py-20 px-6 text-white font-sans"
        >
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Experience</h2>
            <p className="text-gray-400 text-sm">
              Where I’m currently building and learning.
            </p>
          </div>

          {/* Experience Card */}
          <div className="max-w-2xl mx-auto bg-[#1f0032]/30 p-6 rounded-xl shadow-lg border border-purple-600">
            {/* Header Row */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <FaBriefcase className="text-purple-400" /> Full Stack Developer Intern
              </h3>
              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                🟢 Currently Working
              </span>
            </div>

            {/* Company & Duration */}
            <div className="text-sm text-purple-300 mb-1">
              HCL GUVI • Remote • June 2025 – Present
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              I'm working as a backend and frontend intern building real-world
              features using Node.js, Express, and React. I collaborate closely with
              senior developers to design scalable APIs and build UI modules that
              enhance user experience.
            </p>
          </div>
        </section>
        <hr
          className="mt-10 border-4 rounded-3xl border-[#c72cb6] 
             w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] 
             mx-auto"
        />

      </div>
    </>
  );
};

export default Experience;
