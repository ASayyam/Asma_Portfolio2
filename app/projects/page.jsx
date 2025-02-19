"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: '01',
    title: 'Teachers Chatbot',
    description: 'A chatbot application designed to assist teachers with common queries and tasks.',
    href: 'https://github.com/ASayyam/Teachers-Chatbot'
  },
 
  {
    num: '02',
    title: 'Asma Sayyam CV',
    description: 'A digital version of my curriculum vitae, highlighting my professional experience and skills.',
    href: 'https://github.com/ASayyam/Asma_Sayyam_CV'
  },
  {
    num: '03',
    title: 'AI Tutor Agent for Online Learning',
    description: 'An AI-powered tutor agent designed to enhance online learning experiences.',
    href: 'https://github.com/ASayyam/AI_Tutor_Agent_Online_Learning'
  },
  {
    num: '04',
    title: 'AI Teaching Agent with UI',
    description: 'An AI teaching assistant equipped with a user-friendly interface to facilitate learning.',
    href: 'https://github.com/ASayyam/AI_Teaching_Agent_With_UI'
  },
  {
    num: '05',
    title: 'Full Stack To-Do App',
    description: 'A full-stack application to manage daily tasks, built with modern web technologies.',
    href: 'https://github.com/ASayyam/Full_stack_todo_app'
  },
  {
    num: '06',
    title: 'Agents Using Crewai',
    description: 'A project demonstrating the use of Crewai for building intelligent agents.',
    href: 'https://github.com/ASayyam/Agents_Using_Crewai'
  },
  {
    num: '07',
    title: 'Student Self-Study Agent with Short Term Memory',
    description: 'An AI agent designed to assist students in self-study, equipped with short-term memory capabilities.',
    href: 'https://github.com/ASayyam/Student_Selfstudy_agent_with_Short_Term_Memory'
  },
  {
    num: '08',
    title: 'Crewai Poem Flow Agent',
    description: 'A project demonstrating the use of Crewai for building an agents that creats poems',
    href: 'https://github.com/ASayyam/Crewai_Poemflow_Agent'
  },
  {
    num: '09',
    title: 'Mart_Three_Services-using-Kafka-Dev.-Containers-',
    description: 'A Project of Online Mart using Kafka, Dev. containers and Microservices.',
    href: 'https://github.com/ASayyam/Mart_Three_Services-using-Kafka-Dev.-Containers-'
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
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {project.num}
                </div>
                <Link href={project.href} className="w-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
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



