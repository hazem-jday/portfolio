import React from "react";
import tekab from "../../../assets/tekab.png";
import quebec from "../../../assets/quebec.png";


import { Link as ScrollLink } from "react-scroll";

const Experience = () => {
  const exps = [
    {
      id: 1,
      src: quebec,
      title: "Mobile Dev - Internship",
      style: "shadow-orange-500",
      at : "Quebec Center",
      description : "Developed an interactive language e-leaning app for kids based on text to speech and speech recognition.",
      technologies : [
        "Android Studio",
        "Kotlin",
        "Node Js",
        "Firebase"
      ]
    },
    {
      id: 2,
      src: tekab,
      title: "Web dev - Internship",
      style: "shadow-orange-500",
      at : "Tekab Dev",
      description : "Worked on a survey creation, broadcasting and analysis platform / Contributing to a code generation tool",
      technologies : [
        "Nest JS",
        "Docker",
        "Supabase",
      ]
    },
    {
      id: 3,
      src: tekab,
      title: "Web dev - CIVP Internship",
      style: "shadow-orange-500",
      at : "Tekab Dev",
      description : "Developed backend services for a video streaming platform / Resolve streaming related problems.",
      technologies : [
        "Golang",
        "React JS",
        "Docker",
        "Nginx",
        "AWS"
      ]
    },
    {
      id: 4,
      src: tekab,
      title: "Web dev - PFE Internship",
      style: "shadow-orange-500",
      at : "Tekab Dev",
      description : "Developed a design-to-web automatic conversion solution depending on the analysis of the design file structure.",
      technologies : [
        "Golang",
        "React JS",
        "Docker"
      ]
    }
  ];

  return (
    <section
      name="Experience"
      className="relative w-full md:h-screen h-unset"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
            Experience
          </h2>
          <p className="py-6">This is my professional experience</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 sm:px-0">
          {exps.map(({ id, src, title, description, technologies, at, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <h3 className="flex justify-center self-center inline border-b-4 border-primary-color/60"
              >{title}</h3>
              <img className="w-20 h-20 mx-auto px-2 py-2 mt-2 md:py-4 bg-gradient-to-r from-green-100 to-green-200 rounded-lg" src={src} alt=""  />
              <h4 className="flex justify-center self-center inline "
              >{at}</h4>

              <p className="mt-4 md:mt-2 text-left px-2">{description}</p>
              <div>
               {technologies.map((d,i) => (
                <div className="inline-flex" key={i}>
                <span  className="whitespace-nowrap bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{d}</span>
                {" "}
                </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Projects"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Experience;
