import img from "../assets/to-do-list-bg.82cd37ce04315b80d880.png";
import mobile2 from "../assets/mobile-arch.jpg";
import petmeet from "../assets/Screenshot 2024-04-07 at 18-18-01 TsinDog.png";
import kryptoBg from "../assets/Screenshot 2024-04-07 at 16-04-25 Krypto.png";
import foodGuide from "../assets/Screenshot 2024-04-07 at 02-42-59 Vite React.png";

const data = [
  {
    key: 1,
    id: 1,
    image: foodGuide,
    title: "Food Guide 🍕",
    techUsed: ["React", "Tailwind"],
    codeLink: "https://github.com/WassimChmeis/food-guide",
    liveDemo: "https://food-guide-swart.vercel.app/",
    discription:
      "Food Guide is an online platform that provides users with a streamlined search experience to discover and share recipes and food options, promoting culinary creativity and healthy eating.",
  },
  {
    key: 2,
    id: 2,
    image: kryptoBg,
    title: "Krypto ⚡",
    techUsed: ["React", "Tailwind"],
    codeLink: "https://github.com/WassimChmeis/crypto-currency-app",
    liveDemo: "https://krypto-blue-seven.vercel.app/",
    discription:
      "Krypto is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
  },
  // {
  //   key: 3,
  //   id: 3,
  //   image: img,
  //   title: "To-Do List",
  //   techUsed: ["Node.js", "MongoDB"],
  //   codeLink: "https://github.com/WassimChmeis/To-do-list",
  //   discription:
  //     "I developed a to-do list project where users can save their to-do lists to the database. It uses a Node.js and Express.js back-end connected to a MongoDB NoSQL database with Mongoose for data management.",
  // },
  // {
  //   key: 4,
  //   id: 4,
  //   image: mobile2,
  //   title: "Gym Management System",
  //   techUsed: ["Java", "Php"],
  //   codeLink: "https://github.com/jawadamer11/Jawad-Wassim",
  //   discription:
  //     "A Gym Management System built using Java, PHP, and MySQL for an Android application. It included a SQL database connected to the application, enabling trainees to sign in, register for plans, choose coaches, and coaches to manage athletes.",
  // },
  {
    key: 5,
    id: 5,
    image: petmeet,
    title: "PetMeet Prototype",
    techUsed: ["Javascript", "Bootstrap"],
    codeLink: "https://github.com/WassimChmeis/PetMeet",
    discription:
      "I developed PetMeet, a pet meeting web prototype, using HTML, CSS, and Bootstrap. This responsive web application was designed to be compatible with desktops, mobiles, and tablets, providing a seamless experience for users.",
  },
];

export default data;
