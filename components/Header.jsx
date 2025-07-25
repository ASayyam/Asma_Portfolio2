import Link from "next/link"
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-2 xl:py-4 text-white bg-pink-50/20">
     <div className="container mx-auto flex justify-between item-center">
        <Link href= "/">
        <h1 className="text-4xl font-semibold">
          Sayyam <span className="text-accent">.</span>
        </h1>
        </Link>


{/* desktop nav & hire me button*/}
<div className="hidden xl:flex item-center gap-8">
<Nav  />
<Link href="/contact">
{/* <Button>Hire me</Button> */}
</Link>
</div>
{/* mobile nav*/}
<div className="xl:hidde">
<MobileNav />
</div>
     </div>
    </header>
  );
};

export default Header