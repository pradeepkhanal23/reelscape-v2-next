"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  // const router = useRouter();
  const homePath = "/";
  const showsPath = "/shows";

  const [activeLink, setActiveLink] = useState("movies");

  return (
    <nav className="flex items-center justify-between w-full p-4 text-white bg-slate-800">
      <Link href="/" id="homepage">
        <div className="flex items-center cursor-pointer">
          <Image
            src={Logo}
            alt="Picture of the author"
            height={60}
            width={60}
            priority
          />
          <h2 className="font-bold uppercase md:ml-2 hidden md:block ">
            ReelScape
          </h2>
        </div>
      </Link>
      <div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Link
            href={homePath}
            className={`${activeLink === "movies" ? `active` : ``}`}
            onClick={() => setActiveLink("movies")}
          >
            Movies
          </Link>
          <Link
            href={showsPath}
            className={`${activeLink === "shows" ? `active` : ``}`}
            onClick={() => setActiveLink("shows")}
          >
            TV shows
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
