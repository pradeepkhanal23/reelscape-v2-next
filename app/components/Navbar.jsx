"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between w-full py-4 px-6 ">
      <Link href="/" id="homepage">
        <div className="flex items-center cursor-pointer">
          <Image
            src={Logo}
            alt="Picture of the author"
            height={50}
            width={50}
            priority
          />
          <h2 className="font-bold text-2xl uppercase md:ml-2 hidden md:block ">
            ReelScape
          </h2>
        </div>
      </Link>
      <div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Link
            href="/"
            className={`${
              pathname === "/" ||
              pathname.startsWith("/movie-details/") ||
              pathname.startsWith("/search/movie")
                ? "active"
                : ""
            }`}
          >
            Movies
          </Link>
          <Link
            href="/shows"
            className={`${
              pathname === "/shows" ||
              pathname.startsWith("/show-details/") ||
              pathname.startsWith("/search/tv")
                ? "active"
                : ""
            }`}
          >
            TV shows
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
