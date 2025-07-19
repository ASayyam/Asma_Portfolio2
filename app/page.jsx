import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return ( 
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className=" flex flex-col xl:flex-row item-center justify-between xl:pt-8 xl:pb-24"> 
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Full Stack Website Developer</span>
<h1 className="h1 mt-5"  >
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=jetbrainsMono&size=37&duration=650&pause=1000&color=3EF775&random=false&width=505&lines=Hello+I'm+Asma+Sayyam" alt="Typing SVG" /></a>
</h1>
<p className="max-w-[500px] mb-9 text-white/80 text-justify">
As a passionate Full‑Stack Developer and Agentic AI Engineer, I blend creativity with technical precision to build seamless, scalable digital experiences. From crafting responsive frontends in React and Next.js to engineering robust Django backends and AI-powered applications, I thrive on transforming complex ideas into user-focused solutions. My commitment to lifelong learning and hands-on experimentation with modern tools—like Tailwind CSS, PostgreSQL, and OpenAI SDKs—ensures that I stay at the forefront of tech innovation. Let’s collaborate to bring your vision to life and create solutions that stand out in a fast-evolving digital world.
</p>
<div className="flex flex-col xl:flex-row items-center gap-20">

 
  <a href="" download>  
  <Button variant="outline" size="lg" className="text-accent uppercase flex items-center gap-2 border">
    <span>Download CV</span>
    <FiDownload className="text-xl"/>
  </Button>
</a>

  <div className="mb-8 xl:mb-0">
    <Social containerStyle="flex gap-6"
     iconStyles="w-9 border border-accent rounded-full flex 
    justify-center item-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>

  </div>
</div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo/>
        </div>
        </div>
      </div>
</section>
  );
};
export default Home