import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="absolute w-full py-6 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between item-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Asma <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex item-center gap-8">
          <Nav />
        </div>

        <Link href="/contact" className="hidden xl:flex">
          <Button className="px-4 py-2 rounded-md">Contact</Button>
        </Link>
        {/* mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
