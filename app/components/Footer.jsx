import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { socialLinks } from "../utils/constants";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-between w-full p-4 uppercase relative bottom-0">
        <Link href="#homepage">
          <Image
            src={Logo}
            alt="reelscape"
            height={60}
            width={60}
            className="cursor-pointer "
          />
        </Link>
        <div
          id="social-icons"
          className="flex items-center justify-between gap-3 cursor-pointer md:gap-5"
        >
          {socialLinks.map((social) => {
            const { id, name, url, icon } = social;
            return (
              <>
                <Link key={id} href={url} target="_blank" rel="noreferrer">
                  <Image
                    src={icon}
                    alt={name}
                    height={40}
                    width={40}
                    className="cursor-pointer "
                  />
                </Link>
              </>
            );
          })}
        </div>
      </footer>
    </>
  );
};
export default Footer;
