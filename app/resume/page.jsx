"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodejs,
  } from "react-icons/fa";

    
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    info: [
{
fieldNAme: "Name",
fileValue: "Asma Sayyam"
},
{
fieldNAme: "Phone",
fileValue: "+92 336-5582358"
  },
  {
    fieldNAme: "Experience",
    fileValue: "1 year"
    },
    {
      fieldNAme: "Skype",
      fileValue: ".............."
      },
      {
        fieldNAme: "Nationality",
        fileValue: "Pakistani"
        },
        {
          fieldNAme: "Email",
          fileValue: "asmasayyam@gmail.com"
          },
          {
            fieldNAme: "Freelance",
            fileValue: "Available"
            },
            {
              fieldNAme: "Language",
              fileValue: "Urdu, English"
              },
    ]
}


const experience = {
icon: '/assets/resume/..........',
title: 'My experience',
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
items: [
  {
    company: "Tech Solutions Inc.",
    position: "Web Developer",
    duration: "2018 - 2020",
  },
  {
    company: "Web design studio",
    position: "front end developer intern",
    duration: "summer 2021",
  },
  {
    company: "E-commerce Startup",
    position: "Freelance web Developer",
    duration: "2022-2023",
  },
  {
    company: "Tech Academy",
    position: "Teaching Assistant",
    duration: "2023-present",
  },
  {
    company: "Software Development Firm",
    position: "Junior Developer",
    duration: "2018-19",
  },


]
}

const education = {
  // icon: '/assets/resume/filename',
  title: 'My education',
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  items: [
    {
      institution: "Presidential Initiative for Artificial Intelligence & Computing(PIAIC)",
      position: "Certified Cloud Applied Generative AI Engineer (GenEng)",
      duration: "2023 - present",
    },
   
    {
      institution: "Coursera",
      position: "Python for Data Science, AI & Development",
      duration: "2024",
    },
  ]
  }

  const skills = {
    title:"My Skills",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html 5",
    },
    {
      icon: <FaCss3/>,
      name: "css 3",
  },
  {
    icon: <FaJs/>,
    name: "javascript",
  },
  {
    icon: <FaReact/>,
    name: "react.js",
  },
  {
    icon: <FaFigma/>,
    name: "figma",
  },
  {
    icon: <FaNodejs/>,
    name: "nodejs",
  },
  {
    icon: <SiTailwindcss/>,
    name: "tailwindcss",

  },
  {
    icon: <SiNextdotjs/>,
    name: "next.js",
  },

  ]

  }

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";


const Resume = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,
        transition:{delay: 2.4, duration: 0.4, ease:"easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
>
  <div className="container mx-auto">
    <Tabs 
    defaultValue="experience"
    className="flex flex-col xl:flex-row gap-[60px]"
    >
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="about">About me</TabsTrigger>
      </TabsList>
      <div>content</div>
    </Tabs>
  </div>
        </motion.div>
    )
    
  }
  
  export default Resume;
  