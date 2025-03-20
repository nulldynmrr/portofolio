import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Allprojects } from "./../data/data";

export const Project = () => {
  return (
    <div id="bg-case" className="w-full pb-12 min-h-[850px]">
      <header
        id="bg-elemen-case"
        className="flex flex-col justify-center items-center relative h-[300px] overflow-hidden px-6 md:px-16 lg:px-24 text-white"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-center pt-[120px]">
          Project
        </h1>
      </header>

      <section className="w-full bg-red text-white px-6 md:px-16 lg:px-24 mt-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2">
          {Allprojects.map((project, index) => (
            <div key={index} className="w-full">
              <div className="relative w-full bg-slate-500 rounded-2xl overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h1 className="font-bold text-white text-xl md:text-2xl">
                    {project.title}
                  </h1>
                  <p className="font-thin text-white text-justify text-sm md:text-base">
                    {project.desc}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="card !px-4 !py-2 mt-4 md:mt-6 !border-none rounded-full text-center !text-white cursor-pointer"
                    >
                      Lihat Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
        <Link to="/">Kembali</Link>
      </button>
    </div>
  );
};

export default Project;
