/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";

const Cards = (props) => {
  const positioning = props.id % 2;
  return (
    <div className="bg-white    min-h-[340px] px-4  lg:max-w-[990px] mx-auto grid sm:max-w-[570px] lg:grid-cols-2 shadow-lg rounded-2xl mb-14">
      <div
        className={`w-[95%] lg:w-[450px]  rounded-2xl shadow-md  mx-auto my-5  ${
          positioning === 1 ? "lg:order-1 " : "lg:order-2 "
        } `}
      >
        <img className=" h-full w-full rounded-2xl" alt="/" src={props.image} />
      </div>
      <div
        className={`text-center  py-6 max-w-[350px] mx-auto ${
          positioning === 1 ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <h1 className="text-[17px] text-gray-800 font-bold mb-4">
          {props.title}
        </h1>
        <p className="text-[17px] text-[#767676]">{props.content}</p>
        <div className="max-w-[250px] mx-auto">
          <div className="flex   text-gray-800 text-[17px]">
            <div className=" w-fit m-4 py-2 px-2 shadow-md font-bold">
              <p>{props.tech[0]}</p>
            </div>
            <div className=" w-fit m-4 py-2 px-2 shadow-md font-bold">
              <p>{props.tech[1]}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-[17px] text-gray-800 font-bold px-6 mt-6">
          <a href={props.codeLink} target="_blank">
            <div className="flex hover:text-blue-400 transition-colors">
              <h3>Code </h3>
              <FaGithub className="ml-1 text-[25px]" />
            </div>
          </a>
          <div className="flex hover:text-blue-400 transition-colors">
            <h3>Live Demo </h3>
            <FiLink2 className="ml-1 text-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
