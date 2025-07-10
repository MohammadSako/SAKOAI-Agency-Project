import React from "react";
import ProjectTitle from "./components/title";
import Project1 from "@/components/projects/project1";
import Project2 from "@/components/projects/project2";

function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <ProjectTitle />
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-[#b4c0e0] to-[#2948ba] p-8 rounded-xl shadow-xl">
          <Project1 />
        </div>
        <div className="bg-gradient-to-r from-[#69635E] to-[#5C3E2D] p-8 rounded-xl shadow-xl">
          <Project2 />
        </div>
        <div className="bg-gradient-to-r from-[#58c172] to-[#0d5c35] p-8 rounded-xl shadow-xl">
          <Project1 />
        </div>
        <div className="bg-gradient-to-r from-[#e593db] to-[#750d70] p-8 rounded-xl shadow-xl">
          <Project2 />
        </div>
      </div>
    </main>
  );
}

export default Projects;
