import React from "react";

const ProjectTheme = ({
  projectTitle = "Project Title",
  projectDescription = "This is a sample project description.",
  projectScreenshot = null,
  projectUrl = "#"
}) => {
  return (
    <div className="flex justify-center items-start w-screen font-mono p-5 box-border">
      <div className="w-full max-w-[1400px]">
        {/* Single Terminal */}
        <div className="bg-[#111] rounded-lg shadow-lg overflow-hidden w-full">
          {/* Title Bar */}
          <div className="h-10 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] grid grid-cols-[auto_1fr_auto] items-center px-2 text-[#ccc] font-bold text-[clamp(0.8rem,1vw+0.5rem,1.5rem)]">
            <div className="flex gap-[6px]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-center">{projectTitle}</div>
            <div className="w-[54px]" />
          </div>

          {/* Terminal Body - Grid for description + image */}
          <div className={`p-5 text-[#00ff88] text-[clamp(0.8rem,0.8vw+0.5rem,1.2rem)] whitespace-pre-wrap ${projectScreenshot ? "grid md:grid-cols-2 gap-5" : "block"}`}>
            {/* Description */}
            <div className="text-justify">
              {projectDescription}
            </div>

            {/* Image inside same terminal */}
            {projectScreenshot && (
              <div
                onClick={() => window.open(projectUrl, "_blank")}
                className="flex justify-center items-center bg-black rounded-md overflow-hidden cursor-pointer"
              >
                <img
                  src={projectScreenshot}
                  alt="Project Screenshot"
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTheme;
