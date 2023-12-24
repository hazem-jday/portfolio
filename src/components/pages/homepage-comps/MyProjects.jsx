import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ModalInfo } from "../../ModalInfo";
import ProjectCard from "../../ProjectCard";
import projects from "../../../utils/constants";

const MyProjects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [SelectedProject, setSelectedProject] = useState({});

  const handleModalInfo = (project) => {
    setModalIsOpen(true);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section
      name="Projects"
      className="relative w-full text-white md:h-screen h-unset"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-4">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">
            Projects
          </h2>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-8 mb-6">
          {projects.slice(0,4).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setSelectedProject={setSelectedProject}
              handleModalInfo={handleModalInfo}
            />
          ))}
        </div>

        <div className="flex justify-end mr-4">
          <Link to='/projects' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                          See more
                          <span className=''><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                      </Link>
          </div>
      </div>

      <ScrollLink
        to="Technologies"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>

      {modalIsOpen && (
        <ModalInfo SelectedProject={SelectedProject} closeModal={closeModal} />
      )}
    </section>
  );
};

export default MyProjects;
