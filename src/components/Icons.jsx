import React from "react";

const Icons = () => {
  return (
    <div className="flex justify-between lg:w-[450px] flex-wrap gap-2 ">
      <div className="w-[65px] h-16 rounded-full bg-white shadow-level ">
        <img
          title="HTML5"
          className="  w-8 m-auto mt-[16px]"
          alt="/"
          src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
        />
      </div>
      <div className="w-[65px] h-16 rounded-full bg-white shadow-level">
        <img
          title="CSS3"
          className=" w-8 m-auto mt-[16px]"
          alt="/"
          src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
        />
      </div>
      <div className="w-[65px] h-16 rounded-full bg-white shadow-level">
        <img
          title="Javascript"
          className="  w-8 m-auto mt-[16px]"
          alt="/"
          src="https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg"
        />
      </div>
      <div className=" w-[65px] h-16 rounded-full bg-white shadow-level">
        <img
          title="React JS"
          className="  w-8 m-auto mt-[16px]"
          alt="/"
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        />
      </div>
      <div className=" w-[65px] h-16 rounded-full order-5 bg-white shadow-level">
        <img
          title="Tailwind CSS"
          className=" w-8 m-auto mt-[16px]"
          alt="/"
          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        />
      </div>
    </div>
  );
};

export default Icons;
