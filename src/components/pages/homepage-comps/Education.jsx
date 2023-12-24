import React from "react";


import { Link as ScrollLink } from "react-scroll";

const Education = () => {
  const exps = [
    {
      id: 1,
      src: "/images/isamm.png",
      title: "2021 - present",
      style: "shadow-orange-500",
      at : "ISAMM - Manouba University",
      description : "Engineering diploma in computer science",
    },
    {
      id: 2,
      src: "/images/fss.png",
      title: "2018 - 2021",
      style: "shadow-orange-500",
      at : "FSS - University of Sfax",
      description : "Licence in computer science",
    }
  ];

  return (
    <section
      name="Education"
      className="relative w-full md:h-screen h-unset"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
          Education
          </h2>
          <p className="py-6">This is my academic journey</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-center py-8 sm:px-0">
          {exps.map(({ id, src, title, description, at, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <h3 className="flex justify-center self-center inline border-b-4 border-primary-color/60"
              >{title}</h3>
              <img className="h-40 mx-auto mt-2" src={src} alt=""  />
              <h4 className="flex justify-center self-center inline "
              >{at}</h4>

              <p className="justify-center self-center inline mt-2">{description}</p>
              
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Contact"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Education;
