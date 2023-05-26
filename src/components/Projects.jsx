import React from "react";
import Cards from "./Cards";
import projectData from "../data/projectsData";

const Projects = () => {
  function createCard(cardItem) {
    return (
      <Cards
        key={cardItem.key}
        id={cardItem.id}
        image={cardItem.image}
        title={cardItem.title}
        codeLink={cardItem.codeLink}
        content={cardItem.discription}
        tech={cardItem.techUsed}
      />
    );
  }

  return (
    <div
      className="w-full bg-[#f9f9f9] pt-32 pb-24 px-3 sm:px-10 text-center lg:text-left"
      id="projects"
    >
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-blue-500 text-[17px] font-bold  px-2">PORTFOLIO</h2>
        <h1 className="font-bold text-[25px] mb-16 px-2">
          Each Project is a unique piece of development 🧩
        </h1>
        {projectData.map(createCard)}
      </div>
    </div>
  );
};

export default Projects;
