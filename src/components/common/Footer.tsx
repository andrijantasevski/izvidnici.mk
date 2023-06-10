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
    <footer className="footer-container mt-auto h-full w-full">
      <div className="flex items-center justify-center pt-24">
        <Image src={footerIcon} alt="Banner Image" />
      </div>
      <div className="mx-auto  my-10 w-6/12">
        <ul className="flex w-full flex-wrap justify-center">
          {footerLinks.map((link, index) => (
            <li key={index} className="mx-2 my-1">
              <Link href={link.linkTo}>
                <p className="text-slate-100 hover:text-slate-50">
                  {link.siteName}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto sm:w-6/12">
        <div className="mt-4 flex justify-between">
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
      </div>
    </footer>
  );
};

export default Footer;
