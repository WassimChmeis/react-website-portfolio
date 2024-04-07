/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-10 bg-[#2d2e32] py-14 text-white text-[17px] font-bold">
      <div className=" max-w-[1000px] mx-auto flex justify-between flex-col sm:flex-row text-center">
        <p className="mb-4 sm:mb-0">
          Copyright © 2024. All rights are reserved
        </p>
        <div className="flex w-[65px] justify-between  text-[25px] mx-auto sm:mx-0">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/wassim-chmeis-988678236/"
          >
            <FaLinkedin className=" hover:text-[28px] flex items-center transition-all" />
          </a>
          <a target="_blank" href="https://github.com/WassimChmeis">
            <FaGithub className=" hover:text-[28px] flex items-center transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
