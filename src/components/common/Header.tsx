import React, { useState } from "react";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

const headerLinks = [
  {
    title: "за нас",
    href: "/za-nas",
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

interface NavbarSlideInMenuItemProps {
  children: React.ReactNode;
  href: string;
  closeSlideInMenu: () => void;
}

const NavbarSlideInMenuItem = ({
  children,
  href,
  closeSlideInMenu,
}: NavbarSlideInMenuItemProps) => {
  const router = useRouter();

  return (
    <li>
      <Link
        onClick={closeSlideInMenu}
        className={`flex items-center gap-2 px-6 py-2 uppercase transition-colors ${
          href === router.pathname ? "bg-primary text-white" : ""
        }`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

interface Props {
  isSlideInMenuOpen: boolean;
  closeSlideInMenu: () => void;
}

const ModalNavigationMenu = ({
  isSlideInMenuOpen,
  closeSlideInMenu,
}: Props) => {
  return (
    <Transition.Root appear show={isSlideInMenuOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeSlideInMenu}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="relative flex h-full flex-col gap-4 overflow-y-auto bg-base-100 pt-4 shadow-xl lg:pt-6">
                    <div className="flex justify-end px-4 lg:px-6">
                      <button
                        onClick={closeSlideInMenu}
                        title="Затвори мени"
                        aria-label="Затвори мени"
                      >
                        <span className="sr-only">Затвори мени</span>
                        <IconX className="h-6 w-6" />
                      </button>
                    </div>

                    <ul className="grid grid-cols-1">
                      {headerLinks.map((headerLink) => (
                        <NavbarSlideInMenuItem
                          key={headerLink.href}
                          closeSlideInMenu={closeSlideInMenu}
                          href={headerLink.href}
                        >
                          {headerLink.title}
                        </NavbarSlideInMenuItem>
                      ))}
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const Header = () => {
  const [isSlideInMenuOpen, setIsSlideInMenuOpen] = useState(false);

  const openSlideInMenu = () => setIsSlideInMenuOpen(true);
  const closeSlideInMenu = () => setIsSlideInMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 z-10 w-full py-4 lg:py-8">
        <nav className="mx-auto flex w-11/12 max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="text-white"
              priority
            />
            <span className="font-bold text-base-100">Извидници</span>
          </Link>

          <div className="hidden items-center justify-between gap-7 text-base-100 lg:flex">
            {headerLinks.map((headerLink) => (
              <Link
                key={headerLink.href}
                href={headerLink.href}
                className="font-semibold uppercase hover:text-base-200"
              >
                {headerLink.title}
              </Link>
            ))}
          </div>

          <button
            onClick={openSlideInMenu}
            title="Отвори мени"
            className="flex items-center justify-center rounded-lg bg-primary p-2 lg:hidden"
          >
            <IconMenu2 className="h-7 w-7 text-secondary" />
          </button>
        </nav>
      </header>

      <ModalNavigationMenu
        isSlideInMenuOpen={isSlideInMenuOpen}
        closeSlideInMenu={closeSlideInMenu}
      />
    </>
  );
};

export default Header;
