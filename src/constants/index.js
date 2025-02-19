import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  angular,
  bbpl,
  threejs,
  iil,
  sms,
  portfolio,
  crm,
  itsCyberTech,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.JS Developer",
    icon: web,
  },
  {
    title: "Next.JS Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "angular",
    icon: angular,
  },
];

const experiences = [
  {
    title: "Frontend Developer ",
    company_name: " ITS Cybertech India Pvt Ltd",
    icon: itsCyberTech,
    iconBg: "#FFD731",
    class: "w-full h-full rounded-full",
    date: "August 2023 – Present",
    points: [
      "Fintech Product:",
      "Developed and maintained an invoice management system using React.js, improving efficiency in handling payments between vendors and buyers.",
      "Implemented features for tracking invoice due dates, payment processing, and notification alerts.",
      "Worked closely with backend developers to integrate APIs for secure and seamless financial transactions.",
      "Optimized application performance and ensured responsiveness across devices.",
      "Participated in code reviews, ensuring high-quality, maintainable code followingindustry best practices.",
    ],
  },
  {
    title: "Senior Officer-production",
    company_name: "Indian Immunologicals Ltd.",
    icon: iil,
    iconBg: "#FFD731",
    date: "June 2021-May 2023",
    points: [
      "Managed and monitored cell culture processes for the production of Hepatitis-A and Rubella vaccines, ensuring adherence to industry and safety standards.",
      "Documented production processes and maintained accurate records to ensure compliance with regulatory guidelines (e.g., GMP).",
      "Implemented quality control measures and standard operating procedures to ensure consistency in vaccine production.",
    ],
  },
  {
    title: " Junior Technical Officer- R&D",
    company_name: " Brilliant bio pharma pvt ltd",
    icon: bbpl,
    iconBg: "#FFF",
    date: "[July 2019 - May 2021",
    points: [
      "Developed vaccines for bacterial and viral diseases in animals.",
      "Diagnosed disease-causing organisms using molecular methods and characterized various cell lines.",
      "Formulated an experimental batch of Vero cell line-adapted Rabies vaccine using Pasteur Virus",
      "Worked on monolayer and suspension cell lines.",
      "Conducted stability studies for vaccines.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Portfolio",
    description:
      "I built a portfolio using React and Tailwind CSS, showcasing my skills in web development, animations, and interactive design. By leveraging modern technologies, I create visually appealing, responsive, and user-friendly interfaces. Each project highlights my creativity, technical expertise, and commitment to delivering high-quality digital experiences.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      },
      
    ],
    image: portfolio,
    source_code_link: "https://github.com/akhila-gopu/Akhila-portfolio",
  },
  {
    name: "CRM",
    description:
      "I developed a CRM project using Next.js, Tailwind CSS, and Node.js during my internship, focusing on managing customer data efficiently. I implemented analytical data processing, enhancing insights and improving customer relationship management.",
    tags: [
     
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    source_code_link: "https://github.com/DL-Super30/super30-008-node-webapp.git",
  },
  {
    name: "School Management system",
    description:
      "Developed a School Management System using Angular, CSS, and Bootstrap while learning Angular. Applied key concepts like component-based architecture, data binding, and routing to build a functional web application. Designed a responsive UI for managing students, teachers, and courses efficiently. This project showcases my ability to learn new technologies and implement them effectively.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: sms,
    source_code_link: "https://github.com/akhila-gopu/SchoolManagement.git",
  },
];

export { services, technologies, experiences, projects, testimonials };
