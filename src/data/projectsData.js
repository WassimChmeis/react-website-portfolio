import img from "../assets/to-do-list-bg.png";
import mobile2 from "../assets/mobile-arch.jpg";
import petmeet from "../assets/petmeet.png";

const data = [
  {
    key: 1,
    id: 1,
    image: img,
    title: "To-Do List",
    techUsed: ["Node.js", "MongoDB"],
    codeLink: "https://github.com/WassimChmeis/To-do-list",
    discription:
      "I developed a to-do list project where users can save their to-do lists to the database. It uses a Node.js and Express.js back-end connected to a MongoDB NoSQL database with Mongoose for data management.",
  },
  {
    key: 2,
    id: 2,
    image: mobile2,
    title: "Gym Management System",
    techUsed: ["Java", "Php"],
    codeLink: "https://github.com/jawadamer11/Jawad-Wassim",
    discription:
      "A Gym Management System built using Java, PHP, and MySQL for an Android application. It included a SQL database connected to the application, enabling trainees to sign in, register for plans, choose coaches, and coaches to manage athletes.",
  },
  {
    key: 3,
    id: 3,
    image: petmeet,
    title: "PetMeet Prototype",
    techUsed: ["Javascript", "Bootstrap"],
    codeLink: "https://github.com/WassimChmeis/PetMeet",
    discription:
      "I developed PetMeet, a pet meeting web prototype, using HTML, CSS, and Bootstrap. This responsive web application was designed to be compatible with desktops, mobiles, and tablets, providing a seamless experience for users.",
  },
];

export default data;
