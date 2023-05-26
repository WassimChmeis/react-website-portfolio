/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Image from "../assets/PHOTO-2022-06-23-15-18-100.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Icons from "./Icons";
// import Typed from "react-typed";
const Hero = () => {
  return (
    <div
      className=" bg-[#f9f9f9] mx-auto  py-14  w-full text-center pt-40 "
      id="home"
    >
      <div className=" px-4 sm:px-10 lg:w-[1000px] mx-auto">
        <div className="grid lg:grid-cols-2 lg:text-left">
          <img
            className="sm:w-[280px] w-[220px] lg:mr-0 shadow-lg rounded-2xl mx-auto lg:mt-5 lg:order-2"
            src={Image}
            alt="/"
          />
          <div className=" sm:max-w-[500px] mx-auto lg:order-1">
            <h1 className="text-[40px] my-[20px] text-gray-900 font-bold lg:text-[50px]">
              Front-End React Developer👋{" "}
            </h1>
            <p className="text-gray-500 mb-7 text-[18px]">
              Hi, I'm Wassim Chmeis. A passionate Front-end React Developer
              based in Beirut, Lebanon. 📍
              {/* <Typed
                strings={[
                  "",
                ]}
                typeSpeed={30}
                showCursor={false}
              /> */}
              <p className="my-3 text-blue-500">
                This Portfolio was developed professionally by
                <div className="font-semibold">React, Tailwind css. </div>
                {/* <Typed
                  className="text-blue-500"
                  strings={["This Portfolio was developed professionally by "]}
                  typeSpeed={30}
                  showCursor={false}
                />{" "} */}
              </p>
            </p>
            <div className="flex justify-center text-[30px] lg:justify-start  text-gray-900">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/wassim-chmeis-988678236/"
              >
                <FaLinkedin className="mr-2 my-2 hover:text-blue-500 transition-colors" />
              </a>
              <a target="_blank" href="https://github.com/WassimChmeis">
                <FaGithub className="m-2 hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:w-[500px] w-[95%] lg:mx-0 lg:w-full mx-auto lg:flex lg:mt-7">
          <h2 className="mb-4 mt-20 lg:mt-5 lg:mr-14 border-b-2 border-gray-500 lg:mx-0 lg:border-r-2 lg:pr-4 lg:border-b-0 lg:h-6 h-9 w-fit mx-auto font-medium text-gray-900">
            Teck Stack
          </h2>

          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
