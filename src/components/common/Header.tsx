import React from "react";
import Link from "next/link";
import Image from "next/image";

const headerLinks = [
  {
    title: "за нас",
    href: "/zanas",
  },
  {
    title: "програми",
    href: "/programi",
  },
  {
    title: "календар",
    href: "/kalendar",
  },
  {
    title: "информации",
    href: "/informacii",
  },
  {
    title: "проекти",
    href: "/proekti",
  },
  {
    title: "блог",
    href: "/blog",
  },
  {
    title: "контакт",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <header className="fixed top-0 w-full py-8">
      <nav className="mx-auto flex w-11/12 max-w-screen-xl items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="text-white"
            priority
          />
        </Link>

        <div className="hidden items-center justify-between gap-7 text-base-100 lg:flex">
          {headerLinks.map((headerLink) => (
            <Link href={headerLink.href} className="font-semibold uppercase">
              {headerLink.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
