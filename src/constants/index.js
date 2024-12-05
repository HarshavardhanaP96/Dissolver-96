import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import shorturl from "../assets/projects/url_shortner.png";

export const HERO_CONTENT = `I am a passionate full stack developer with refined skills in front-end technologies like React and Next.js, and back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. I also utilize tools like Docker to enhance my development process. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = ``;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Fullstack Developer Intern",
    company: "Grudhra Solution Pvt. Ltd.",
    description: `Creating admin panel and app for farming managemnt using Next.Js and React. Databse creation, backend route handlings using express, authetication and role based autherisation etc.`,
    technologies: [
      "Javascript",
      "React.js",
      "Next.js",
      "Postgres",
      "Prisma",
      "Express",
    ],
  },
  {
    year: "2022 - 2024",
    role: "Junior Technical Support Engineer",
    company: "Glowtouch Technologies",
    description: `Provided tier-1 support to an US based company HqO. Provided technical support for the users of App users whcih includes users, company, owners profile configuration. finding root cause of the problems in owners admin panel, users app using tools like Datadog, Metabase, Internal adminpanel, postmark etc.`,
    technologies: ["Salesforce", "DataDog", "Metabase", "Postmark", "Nexudus"],
  },
  {
    year: "2021 - 2021",
    role: "Structural Analysis Intern",
    company: "Aviocian Tech",
    description: `Designed and anlysed components of the quadcoptors like frame, arm and legs using Msc. Patran, and Nastran solver. Prepared documentation and Analytical proof to match the resultus of the solver.`,
    technologies: ["Msc.Patran", "Nastran", "Solidworks"],
  },
  {
    year: "2021 - 2021",
    role: "Design Engineer",
    company: "Mardia Engineering",
    description: `Re-designing the broken components so that those can be fabricated again. Mesuring and designing 3d components of broken parts using Solidworks and making 2D diagram that is easily understandable to manufacturer`,
    technologies: ["Solidworks"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    reference: "https://github.com/HarshavardhanaP96/Ecommerce", //to be updated
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. admin panel and dashboard",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "React",
      "Node.js",
      "MongoDB",
      "Redux",
    ],
  },
  {
    title: "Sudoku Solver",
    image: project2,
    reference: "https://github.com/HarshavardhanaP96/sudoku-solver", //to be updated
    //to be updated
    description:
      "A platsofm that solves the sudoku using backtracking and greedy algorithm",
    technologies: ["HTML", "CSS", "React", "Javascript"], //to be updated
  },
  {
    title: "Video Streaming Platform",
    image: project3,
    reference: "https://github.com/HarshavardhanaP96/Streaming-platform", //to be updated
    description:
      "It is platform where users can upload the videos and can stream it later. To decrease the loading time, video is fragmented into small chunks so that small chunks will load one after the other instead of all at once.",
    technologies: ["React", "express", "ffmpeg"], //db to be added
  },

  // {
  //   title: "blogging Website",
  //   image: project4, //to be updated
  //   reference: "https://www.google.com", //to be updated
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"], //to be updated
  // },

  {
    title: "URL shortner",
    image: shorturl, //to be updated
    reference: "https://url-shortner-pi-eight.vercel.app/", //to be updated
    //to be updated
    description:
      "A platform where url are shortened using ------ algorithm, which is helpful in places where url lenght limit is less and also helps in reducing the file size where the file has laks of urls",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Javascript"], //to be updated
  },
];

export const CONTACT = {
  address: "Bantwal, Mangalore, KA - 574219",
  phoneNo: "+91-827497898",
  email: "pkhrao3112.harsha@gmail.com",
};
