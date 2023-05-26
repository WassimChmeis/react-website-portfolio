import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";
const Contact = () => {
  return (
    <div
      className="w-full bg-white py-20 px-10 text-center md:text-left"
      id="contact"
    >
      <div className=" max-w-[1000px] mx-auto ">
        <div className="mb-14">
          <h3 className="text-[17px] text-blue-500 font-bold">CONTACT</h3>
          <h1 className="text-[25px] text-gray-900 font-bold">
            Don't be shy! Hit me up! 👇
          </h1>
        </div>
        <div className="flex flex-col md:flex-row  ">
          <div className="md:flex mb-10 md:mr-[90px]">
            <div className=" mb-4 mx-auto w-[75px] h-[73px] shadow-level rounded-full flex justify-center items-center">
              <FaMapMarkedAlt className="text-blue-500 text-[35px]" />
            </div>
            <div className="md:pt-2 md:ml-5">
              <h4 className=" mb-1 text-[17px] text-gray-900 font-bold ">
                Location
              </h4>
              <p className=" text-[17px] text-[#767676] hover:text-blue-500 transition-colors">
                Beirut, Lebanon
              </p>
            </div>
          </div>
          <div className="md:flex mb-10  ">
            <div className=" mb-4 mx-auto w-[75px] h-[73px]  rounded-full shadow-level flex justify-center items-center">
              <GoMailRead className="text-blue-500 text-[35px]  " />
            </div>
            <div className="md:pt-2 md:ml-5">
              <h4 className=" mb-1 text-[17px] text-gray-900 font-bold ">
                Mail
              </h4>
              <p className=" text-[17px] hover:text-blue-500 transition-colors text-[#767676]">
                wassimchmeis@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
