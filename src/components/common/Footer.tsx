import React from "react";
import Link from "next/link";
import Image from "next/image";
import footerIcon from "../../../public/images/footer-icon.svg";
import { BsTiktok, BsFacebook, BsInstagram } from "react-icons/bs";

interface FooterLink {
  linkTo: string;
  siteName: string;
}

const footerLinks: FooterLink[] = [
  { linkTo: "/", siteName: "Contact" },
  { linkTo: "/", siteName: "Careers" },
  { linkTo: "/", siteName: "Privacy" },
  { linkTo: "/", siteName: "Cookies policy" },
  { linkTo: "/", siteName: "Help" },
  { linkTo: "/", siteName: "FAQ’s" },
  { linkTo: "/", siteName: "Newsletter" },
  { linkTo: "/", siteName: "Brand" },
];

const Footer = () => {
  return (
    <footer className="relative mt-auto w-full bg-primary text-base-100">
      <Image
        src="/img/background-images/background-footer.svg"
        width={1940}
        height={723}
        alt="Позадина footer"
        className="w-full"
      />

      <div className="absolute inset-x-0 bottom-6 mx-auto flex w-11/12 max-w-2xl flex-col gap-6">
        <div className="flex w-full items-center justify-center">
          <Image src={footerIcon} alt="Banner Image" />
        </div>

        <ul className="flex w-full flex-wrap justify-center">
          {footerLinks.map((link, index) => (
            <li key={index} className="mx-2 my-1">
              <Link href={link.linkTo}>{link.siteName}</Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-between">
          <div className="flex items-center">
            <BsTiktok className="mr-4 text-2xl text-slate-100" />
            <BsFacebook className="mr-4 text-2xl text-slate-100" />
            <BsInstagram className="text-2xl text-slate-100" />
          </div>

          <ul className="flex items-center">
            <li className="mr-4">
              <a href="mailto:sim@scout.org.mk" className="text-slate-100">
                sim@scout.org.mk
              </a>
            </li>
            <li>
              <a href="tel:+023112254" className="text-slate-100">
                02 311 2254
              </a>
            </li>
          </ul>
        </div>

        <p className="text-center">
          © {new Date().getFullYear()} Сојуз на Извидници на Македонија
        </p>
      </div>
    </footer>
  );
};

export default Footer;
