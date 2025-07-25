import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"

const socials = [
{ icon: <FaGithub/>, path: "https://github.com/ASayyam"},
{ icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/asma-sayyam-1023b91b6/?originalSubdomain=pk"},
{ icon: <FaYoutube/>, path: "https://www.youtube.com/channel/UC7cCmAFYtNBfgWOizBFitpA"},

]

const Social = ({containerStyles, iconStyles}) => {
  return (
     <div className={containerStyles}>
{socials.map((item, index) => {
    return (

        <Link key={index} href={item.path} className={iconStyles}>
{item.icon}
        </Link>
    );
})}
</div>
  );
};

export default Social;