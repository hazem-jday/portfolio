import React from "react";

const ProjectCard = ({ project, handleModalInfo }) => {
  const handleClickDemo = (demoUrl) => {
    const newWindow = window.open(demoUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  const handleClickCode = (codeUrl) => {
    const newWindow = window.open(codeUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  return (
    <div className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto">
      
      <div className="duration-200 hover:scale-105 cursor-pointer">
        <h3 className="flex justify-center self-center inline border-b-4 border-primary-color/60"
        onClick={() => handleModalInfo(project)}
        >
              {project.title}
        </h3>
        <img
          onClick={() => handleModalInfo(project)}
          src={project.src}
          alt="project card"
          className="rounded-md"
        />
      </div>
      <div className="flex items-center justify-center">
        

        {
          project.demo ? <button
          onClick={() => handleClickDemo(project.demo)}
          className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
        >
          Demo
        </button>:""
        }
        {
          project.code ?
          <button
          onClick={() => handleClickCode(project.code)}
          className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
        >
          Code
        </button>
          : <div className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125" style={{color:"red"}}>Code 🔒</div>
          
        }
        
        
      </div>
    </div>
  );
};

export default ProjectCard;
