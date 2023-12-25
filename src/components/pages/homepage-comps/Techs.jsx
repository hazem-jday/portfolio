import React from "react";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/javascript.png";
import react from "../../../assets/react.png";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import flutter from "../../../assets/flutter.png";
import node from "../../../assets/node.png";
import java from "../../../assets/java.png";
import unity from "../../../assets/unity.png";
import kotlin from "../../../assets/kotlin.png";
import docker from "../../../assets/docker.png";
import blender from "../../../assets/blender.png";
import python from "../../../assets/python.png";
import linux from "../../../assets/linux.png";
import csharp from "../../../assets/csharp.png";
import nginx from "../../../assets/nginx.png";
import go from "../../../assets/go.png";


import { Link as ScrollLink } from "react-scroll";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      src: node,
      title: "Node JS",
      style: "shadow-lime-400",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-cyan-700",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-purple-400",
    },
    {
      id: 9,
      src: unity,
      title: "Unity",
      style: "shadow-white",
    },
    {
      id: 10,
      src: blender,
      title: "Blender",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 13,
      src: go,
      title: "Go",
      style: "shadow-cyan-700",
    },
    {
      id: 14,
      src: flutter,
      title: "Flutter",
      style: "shadow-blue-500",
    },
    
    {
      id: 15,
      src: csharp,
      title: "C#",
      style: "shadow-purple-400",
    },
    {
      id: 16,
      src: docker,
      title: "Docker",
      style: "shadow-cyan-700",
    },
    {
      id: 17,
      src: nginx,
      title: "Nginx",
      style: "shadow-green-500",
    },
    {
      id: 18,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-100",
    },
  ];

  return (
    <section
      name="Technologies"
      className="relative w-full md:h-screen h-unset"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
            Technologies
          </h2>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-10 mx-auto py-2 md:py-4" src={src} alt="" />
              <p className="mt-4 md:mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Education"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Techs;
