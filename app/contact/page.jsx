"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 336 558 2358",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "asmasayyam@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Islamabad, Pakistan",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form Section */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">{"Let's work together"}</h3>
              <p className="text-white/60">
                {"Let's build the future together! As an agentic AI developer, I specialize in creating intelligent, autonomous solutions that enhance efficiency and innovation. Whether you're looking for AI-driven applications, automation tools, or cutting-edge web solutions, I'm here to help. Reach out, and let's turn your vision into reality!"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="tel" placeholder="Phone number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="frontend">Frontend development</SelectItem>
                    <SelectItem value="fullstack">Fullstack Web Development</SelectItem>
                    <SelectItem value="agentic-ai">Agentic AI development</SelectItem>
                    <SelectItem value="custom-ai">Customized AI Solutions</SelectItem>
                    <SelectItem value="custom-gpt">Customized GPT</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px]" placeholder="Type your message here." />
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-lg">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;