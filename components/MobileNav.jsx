// "use client"

// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
// import { usePathname } from 'next/navigation';
// import Link from "next/link";
// import { CiMenuFries } from 'react-icons/ci';

// const links = [
//     { name: "home", path: "/" },
//     { name: "services", path: "/services" },
//     { name: "projects", path: "/projects" },
//     { name: "skills", path: "/skills" },
//     { name: "contact", path: "/contact" },
// ];

// const MobileNav = () => {
//     const pathname = usePathname();

//     return (
//         <Sheet>
//             <SheetTrigger className='flex justify-center items-center'>
//                 <CiMenuFries className="text-[32px] text-accent" />
//             </SheetTrigger>
//             <SheetContent className='flex flex-col items-center'>
//                 {/* Logo Section */}
//                 <div className='mt-32 mb-40 text-center text-2xl'>
//                     <Link href="/">
//                         <h1 className='text-4xl font-semibold'>
//                             Asma Sayyam<span className='text-accent'>.</span>
//                         </h1>
//                     </Link>
//                 </div>

//                 {/* Navigation Links */}
//                 <nav className="flex flex-col space-y-6 text-center">
//                     {links.map((link, index) => (
//                         <Link
//                             href={link.path}
//                             key={index}
//                             className={`text-xl capitalize transition-all hover:text-accent ${
//                                 link.path === pathname ? "text-accent border-b-2 border-accent" : ""
//                             }`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </nav>
//             </SheetContent>
//         </Sheet>
//     );
// }

// export default MobileNav;

"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "projects", path: "/projects" },
    { name: "skills", path: "/skills" },
    { name: "contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent 
                side="right"  // ✅ Opens from the right side
                className="flex flex-col items-center overflow-y-auto"
            >
                {/* Logo Section */}
                <div className="mt-20 mb-10 text-center text-2xl">
                    <Link href="/" onClick={closeMenu}>
                        <h1 className="text-4xl font-semibold">
                            Asma Sayyam<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-6 text-center">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`text-xl capitalize transition-all hover:text-accent ${
                                link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                            }`}
                            onClick={closeMenu} // ✅ Closes menu when clicking a link
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;

