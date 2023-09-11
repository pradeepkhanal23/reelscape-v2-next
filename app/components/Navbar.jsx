import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";

const Navbar = () => {
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
          <Link href="/">Movies</Link>
          <Link href="/">TV shows</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
