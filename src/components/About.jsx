import React from "react";
import img from "../assets/laptop-computer-on-wooden-table.jpg";

const About = () => {
  return (
    <div className="py-28 w-full px-4 sm:px-10" id="about">
      <div className="lg:flex max-w-[1000px] mx-auto text-center">
        <div className="px-5 sm:px-0 mx-auto">
          <img className=" w-[400px] mx-auto rounded-2xl" alt="/" src={img} />
        </div>
        <div className="max-w-[480px]  lg:mr-0  mx-auto lg:text-left">
          <h2 className="text-blue-500 text-[17px] font-bold mb-3 mt-9">
            ABOUT ME
          </h2>
          <h1 className="font-bold mb-5 text-[25px]">
            A dedicated Front-end Developer based in Beirut, Lebanon 📍
          </h1>
          <p className="text-[#767676] font-minor text-[17px]">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, and Tailwind. I excel in
            designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
