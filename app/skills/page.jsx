"use client";

import { motion } from "framer-motion";

const skills = [
  "Education Leadership",
  "Teaching Methodologies",
  "Curriculum Development",
  "Agentic AI",
  "Generative AI",
  "TypeScript",
  "Next.js",
  "Python",
  "FastAPI",
  "Azure Deployment",
  "Docker",
  "SQL",
  "PostgreSQL",
  "Tailwind CSS",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black px-4 pt-32 flex flex-col items-center text-white">
      <motion.h1
        className="text-5xl font-bold text-green-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills & Expertise
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mb-8 max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        With 12+ years of experience in education, AI, and software development,
        I bring a unique blend of leadership and technical expertise to every
        project.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="px-4 py-2 bg-gray-900 border border-green-400 text-green-300 text-lg font-semibold rounded-md shadow-lg hover:bg-green-400 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
