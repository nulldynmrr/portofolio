import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./home.css";
import "../index.css";
import imgAbout from "./../asset/about.svg";
import imgExpertise from "./../asset/ilustrasiExpertise.svg";
import imgMockup from "./../asset/mockup.svg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaLightbulb, FaExclamationTriangle } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";
import {
  organizationExperience,
  commiteExperience,
  skills,
  about,
  projects,
} from "../data/data";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <div id="bg"></div>
      <div id="bg-elemen" className="absolute min-h-[4444px]"></div>
      <div className="top-0 left px-[25px] md:px-[160px] lg:px-[200px]">
        <section className="flex flex-col items-center justify-center h-screen text-center leading-8 poppins text-white content">
          <h2 className="text-2xl md:text-3xl mb-8" data-aos="fade-up">
            Haii! 👋🏻
          </h2>
          <h1
            className="text-2xl md:text-7xl font-semibold"
            data-aos="zoom-in-up"
          >
            I'm Dinar Muhammad Akbar
          </h1>
          <h1
            className="text-2xl md:text-7xl font-semibold"
            data-aos="zoom-in-up"
          >
            UI/UX Designer and
          </h1>
          <h1
            className="text-2xl md:text-7xl font-semibold"
            data-aos="zoom-in-up"
          >
            Junior Front-End Developer.
          </h1>

          <p className="mt-20 max-w-[900px]" data-aos="zoom-in-up">
            Menciptakan solusi design yang mengutamakan kenyamanan pengguna
            dengan solusi inovatif untuk memecahkan suatu masalah sehari-hari.
          </p>
        </section>

        <section className="flex flex-col lg:flex-row justify-center items-center md:space-x-8 mt-[5rem] text-white">
          <img
            src={imgAbout}
            className="mb-6 lg:mb-0 lg:w-2/6 -mt-[80px] w-full max-w-[300px] sm:max-w-[400px]"
            alt="About Image"
          />
          <div className="lg:w-4/6 space-y-6 w-full px-4">
            <div className="card w-full">
              <h1 className="text-2xl philosopher-regular pt-4 mb-4">
                X About Me
              </h1>
              {about.map((item, index) => (
                <div key={index}>
                  <p className="text-justify font-light pb-4">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="card w-full">
              <h1 className="text-2xl philosopher-regular pt-4 mb-4">
                X Skills
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-6 text-5xl">
                {skills.map((item, index) => {
                  const Logo = item.logo;
                  return (
                    <div key={index} className="pb-2">
                      <Logo />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="text-center poppins text-white py-[100px] mb-4"
        >
          <h1 className="text-4xl font-semibold">Experience</h1>
          <p className="mb-12 font-extralight text-[20px]">
            Menjelajahi pengalaman berbagai proyek dan peran organisasi.
          </p>

          <div className="lg:flex justify-center gap-x-8">
            <div className="card lg:w-1/2 mb-12 lg:mb-0">
              <div id="organisasi">
                <h1 className="text-3xl text-left mb-8 philosopher-regular">
                  x Organizational Experience
                </h1>
                <div className="space-y-4">
                  {organizationExperience.map((item, index) => (
                    <div
                      key={index}
                      className="cardContent flex flex-col justify-start space-y-4 md:space-y-0 md:justify-between items-center md:items-start overflow-hidden gap-x-8"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between gap-y-4 w-full">
                        <div>
                          <h1 className="text-left text-xl font-medium">
                            {item.title}
                          </h1>
                          <p className="text-left text-[1rem] md:text-xl font-thin">
                            {item.role}
                          </p>
                        </div>
                        <div className="cardContentDateExperience text-[0.8rem] font-extralight md:self-start md:text-right md:ml-auto">
                          {item.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card lg:w-1/2">
              <div id="organisasi">
                <h1 className="text-3xl text-left mb-8 philosopher-regular">
                  x Committe Experience
                </h1>
                <div className="space-y-4">
                  {commiteExperience.map((item, index) => (
                    <div
                      key={index}
                      className="cardContent flex flex-col justify-start space-y-4 md:space-y-0 md:justify-between items-center md:items-start overflow-hidden gap-x-8"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between gap-y-4 w-full">
                        <div>
                          <h1 className="text-left text-xl font-medium">
                            {item.title}
                          </h1>
                          <p className="text-left text-[1rem] md:text-xl font-thin">
                            {item.role}
                          </p>
                        </div>
                        <div className="cardContentDateExperience text-[0.8rem] font-extralight md:self-start md:text-right md:ml-auto">
                          {item.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="expertise"
          className="section flex flex-col lg:flex-row items-center gap-x-8 text-white py-[100px]"
        >
          <img
            src={imgExpertise}
            alt="Expertise Illustration"
            className="block lg:hidden mb-10"
          />
          <div>
            <h1 className="text-4xl font-semibold mb-2 text-center md:text-left">
              Expertise me
            </h1>
            <h1 className="text-4xl font-semibold mb-12 text-center md:text-left">
              Exploring Design and Code Excellence
            </h1>
            <p className="text-[20px] font-light mb-12 text-center md:text-left">
              Saya fokus pada desain dan pemrograman untuk menciptakan
              pengalaman pengguna yang menarik dan responsif. Tujuan saya adalah
              menggabungkan kreativitas dengan fungsionalitas untuk interaksi
              yang berdampak kepada orang lain.
            </p>
          </div>
          <img
            src={imgExpertise}
            alt="Expertise Illustration"
            className="hidden lg:block "
          />
        </section>

        <section id="project" className="text-white text-center">
          <h1 className="text-4xl font-semibold mb-2">My Project</h1>
          <p className="mb-[6rem] font-extralight text-[20px]">
            Beberapa proyek yang menampilkan kreativitas untuk memecahkan
            masalah pada desain.
          </p>

          {projects.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row text-left mb-12"
            >
              {item.githubLink ? (
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col lg:flex-row text-left mb-12"
                >
                  <img
                    src={item.image}
                    alt="imgProject"
                    className="lg:w-[24rem] object-cover rounded-lg mb-4 lg:mb-0 lg:mr-4"
                  />
                  <div className="px-2">
                    <div className="mb-8">
                      <h1 className="text-2xl font-semibold mb-2">
                        {item.title}
                      </h1>
                      <p className="text-gray-400 text-xl font-light mb-4">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {item.kategori.map((label, i) => (
                        <p
                          key={i}
                          className="card !px-4 !py-2 !border-none rounded-full"
                        >
                          {label}
                        </p>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col lg:flex-row text-left mb-12">
                  <img
                    src={item.image}
                    alt="imgProject"
                    className="lg:w-[24rem] object-cover rounded-lg mb-4 lg:mb-0 lg:mr-4"
                  />
                  <div className="px-2">
                    <div className="mb-8">
                      <h1 className="text-2xl font-semibold mb-2">
                        {item.title}
                      </h1>
                      <p className="text-gray-400 text-xl font-light mb-4">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {item.kategori.map((label, i) => (
                        <p
                          key={i}
                          className="card !px-4 !py-2 !border-none rounded-full"
                        >
                          {label}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        <section id="studycase" className="text-white">
          <div className="lg:flex justify-between ">
            <div>
              <h1 className="text-4xl font-semibold">UI/UX Project</h1>
              <p className="mt-2 mb-8 text-xl font-light">MovApp</p>
            </div>
            <p className="cardContentProject flex justify-center items-center w-[250px] overflow-hidden">
              Created : 20 Agustus 2024
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-x-8">
            <img
              src={imgMockup}
              alt="mockupApp"
              className="block md:hidden w-3/8 h-[32em] mb-8"
            />
            <div className="w-5/8 space-y-4">
              <div className="flex items-center gap-2 cardContentProject !w-[85px]">
                <FaLightbulb className=" text-xl" />
                <h2 className="font-semibold text-lg">Ide</h2>
              </div>
              <p>
                Aplikasi platform untuk menonton film secara langsung dengan
                menawarkan layanan film Indonesia maupun luar negeri.
              </p>

              <div className="flex items-center !mt-[3em] gap-2 cardContentProject !w-[95px]">
                <LuGoal className="text-xl" />
                <h2 className="font-semibold text-lg">Tujuan</h2>
              </div>
              <p className="mb-8">
                Meningkatkan layanan aplikasi film untuk memudahkan pengguna
              </p>

              <div className="flex items-center  !mt-[3em] gap-2 cardContentProject !w-[100px]">
                <FaExclamationTriangle className="text-xl" />
                <h2 className="font-semibold text-lg">Masalah</h2>
              </div>
              <p className="mb-8">
                Banyak orang-orang merasa malas untuk pergi jauh ke bioskop.
              </p>
            </div>

            <img
              src={imgMockup}
              alt="mockupApp"
              className="hidden md:block w-3/8 h-[32em]"
            />
          </div>
          <button className="w-full md:w-[200px] !mt-[3em]  md:!-mt-[16px]  bg-white px-4 py-2 rounded-full text-black">
            <Link
              to="/movApp"
              className="flex items-center justify-center font-semibold"
            >
              Study Case <MdOutlineArrowOutward className="ml-2 font-bold" />
            </Link>
          </button>
        </section>
        <footer class="bg-gray-800 mt-12 text-white py-2 w-full rounded-tl-2xl rounded-tr-2xl">
          <div class="text-center px-4">
            <p>&copy; 2024 Dinar Muhammad Akbar. </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
