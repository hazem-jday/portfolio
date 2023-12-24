import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import projects from "../../../utils/constants";
import ProjectCard from "../../ProjectCard";
import { ModalInfo } from "../../ModalInfo";

const AllProjects = () => {
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
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my best web applications here.</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    project={project}
                    setSelectedProject={setSelectedProject}
                    handleModalInfo={handleModalInfo}
                    />
                ))}
                </div>
                {modalIsOpen && (
                    <ModalInfo SelectedProject={SelectedProject} closeModal={closeModal} />
                )}
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
