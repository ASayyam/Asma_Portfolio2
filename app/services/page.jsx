"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Programming Lab Management",
    description:
      "Established a programming lab at a high school to ensure students have access to the latest technology and resources for learning.",
    href: "https://github.com/ASayyam",
  },
  {
    num: "02",
    title: "TypeScript & Next.js Instruction",
    description:
      "Teaching students the fundamentals of TypeScript and Next.js to build scalable and efficient web applications.",
    href: "https://youtu.be/OpeY9W81Gek",
  },
  {
    num: "03",
    title: "Prompt Engineering",
    description:
      "Educating students on prompt engineering to enhance their skills in using AI and machine learning models effectively.",
    href: "https://youtu.be/QHoWkUed6Ag",
  },
  {
    num: "04",
    title: "Python Programming",
    description:
      "Introducing Python programming to students, covering basic to advanced concepts to prepare them for future opportunities in tech.",
    href: "https://youtu.be/2o4Z23GtTYE",
  },
  {
    num: "05",
    title: "Customized GPT",
    description:
      "Developed a customized GPT for a school to assist students with their queries and assignments.",
    href: "https://chatgpt.com/g/g-BGmcc58kS-sitara-trust",
  },
  {
    num: "06",
    title: "Client Portfolio Website",
    description:
      "Created a portfolio website for a client to showcase their work and skills.",
    href: "https://www.worshiper-arifsabir.com/",
  },
  {
    num: "07",
    title: "Teaching AI Agents with Crewai & Langgraph",
    description:
      "Teaching students the fundamentals of Crewai and Langgraph to build scalable and efficient AI agents.",
    href: "https://www.youtube.com/channel/UC7cCmAFYtNBfgWOizBFitpA",
  },
];

const Projects = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {project.num}
                </div>
                <Link
                  href={project.href}
                  className="w-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-2xl" />
                </Link>
              </div>
              <h2 className="text-[28px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;