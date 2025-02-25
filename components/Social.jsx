import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, 
    path: "https://github.com/ASayyam" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/asma-sayyam-1023b91b6/?originalSubdomain=pk",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/channel/UC7cCmAFYtNBfgWOizBFitpA",
  },
];

const Social = () => {
  return (
    <div className="flex gap-2">
      {socials.map((item, index) => {
        return (
          <Link 
            key={index} 
            href={item.path} 
            className="w-12 h-12 border border-accent rounded-full flex justify-center item-center text-accent text-xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
          >
            <div className="flex justify-center items-center">
              {item.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
