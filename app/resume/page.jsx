"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodejs,
  FaDocker,
  FaPython,
  FaDatabase,
  FaJava,
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
      name: "html",
    },
    {
      icon: <FaDocker/>,
      name: "Docker",
  },
  {
    icon: <FaPython/>,
    name: "Python",
  },
  {
    icon: <FaDatabase/>,
    name: "Database",
  },
  {
    icon: <FaJs/>,
    name: "Javascript",
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
      <div className="min-h-[70vh] w-full">
        <TabsContent value="experience" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{experience.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">experience.description</p>
        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-col-2 gap-[30px]">
            {experience.items.map((item, index) => {
              return (
              <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center item-center lg-items-start gap-1 ">
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px]
              text-center lg:text-left">{item.position}</h3>
              <div className="flex item-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.company}</p>
              </div>
              </li>
              )
})}
          </ul>
        </ScrollArea>
        </div>
        </TabsContent>

<TabsContent value="education" className="w-full">
<div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{education.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">education.description</p>
        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-col-2 gap-[30px]">
            {education.items.map((item, index) => {
              return (
              <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center item-center lg-items-start gap-1 ">
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px]
              text-center lg:text-left">{item.degree}</h3>
              <div className="flex item-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.institution}</p>
              </div>
              </li>
              )
})}
          </ul>
        </ScrollArea>
        </div>
</TabsContent>

<TabsContent value="skills" className="w-full h-full">
  <div className="flex flex-col gap [30px]">
  <div className="flex flex-col gap [30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{skills.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
  </div>
  <ul className="grid grid-col-2 sm:grid-cols-3 md:grid-col-4 gap-4 xl:gap-[30px]">{skills.skillList.map((skill,index) => {
    return <li key={index}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center item-center group">
            <div className="text-6xl group-hover:text-accent transition-all duration-300">
               {skill.icon}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="capitalize">{skill.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      </li>
})}

  </ul>
  </div>
</TabsContent>

<TabsContent value="about" className="w-full text-center xl:text-left">
  <div className="flex flex-col gap-[30px]">
    <h3 className="text-4xl font-bold">{about.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
    <ul className="grid grid-col-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
      {about.info.map((item,index) =>{
        return (
          <li key={index} className="flex item-center justify-center
          xl:justify-start gap-4">
            <span className="text-white/60">{item.fieldName}</span>
            <span className="text-xl">{item.fieldValue}</span>
          </li>
        )
      }
    )}
    </ul>
  </div>
</TabsContent>

      </div>
    </Tabs>
  </div>
        </motion.div>
    )
    
  }
  
  export default Resume;
  