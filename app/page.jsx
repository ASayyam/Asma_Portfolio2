import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="min-h-screen flex justify-center items-center pt-24">
      <div className="container mx-auto h-full">
        <div className=" flex flex-col xl:flex-row item-center justify-between">
          <div className="text-center xl:text-left order-2 xl:order-none flex flex-col justify-center">
            <span className="text-xl underline underline-offset-8">Agentic AI Engineer</span>
            <h1 className="h1 mt-5">
              <img
                src="https://readme-typing-svg.herokuapp.com?font=jetbrainsMono&size=37&duration=650&pause=1000&color=3EF775&random=false&width=505&lines=Hello+I'm+Asma+Sayyam"
                alt="Typing SVG"
              />
            </h1>
            <p className="w-full xl:max-w-[500px] mb-9 text-white/80 text-justify">
              As a passionate Agentic AI Engineer, I bring creativity,
              precision, and a commitment to excellence to every project I
              undertake. Whether it&apos;s designing intuitive user interfaces
              or architecting robust frontend backend systems. My dedication to
              continuous learning and staying abreast of industry trends allows
              me to deliver solutions that not only meet but exceed client
              expectations. Let&apos;s collaborLate to transform your vision into
              reality and elevate your digital presence.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://docs.google.com/document/d/1lb5QY03X5ZBEjenizQnnAnKOBO3fzqREA_ZaEDnSCQw/edit?tab=t.0"
                download
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-accent uppercase flex items-center gap-2 border"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
