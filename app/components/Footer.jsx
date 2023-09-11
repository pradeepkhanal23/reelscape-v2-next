import Image from "next/image";
import Logo from "../../public/logo.png";
import Facebook from "../../public/facebook.png";
import Instagram from "../../public/instagram.png";
import Twitter from "../../public/twitter.png";
import Link from "next/link";

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
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={Facebook}
              alt="reelscape"
              height={40}
              width={40}
              className="cursor-pointer "
            />
          </Link>

          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={Instagram}
              alt="reelscape"
              height={40}
              width={40}
              className="cursor-pointer "
            />
          </Link>

          <Link href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Image
              src={Twitter}
              alt="reelscape"
              height={40}
              width={40}
              className="cursor-pointer "
            />
          </Link>
        </div>
      </footer>
    </>
  );
};
export default Footer;
