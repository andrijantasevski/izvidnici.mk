import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { IconArrowNarrowDown } from "@tabler/icons-react";
import CardGrid from "@/components/landing-page/CardAnimation";
import PuzzleAnimation from "@/components/landing-page/PuzzleAnimation";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="h-screen bg-landing-first-section bg-cover bg-center bg-no-repeat py-10">
        <div className="mx-auto flex h-full w-11/12 max-w-screen-xl flex-col items-center justify-between">
          <div />
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/img/logos/logo-landing-page-first-section.svg"
              width={117}
              height={159}
              alt="Извидници лого"
              priority
            />
            <Image
              src="/img/landing-page/izvidnici-text.svg"
              width={369}
              height={42}
              alt="Извидници лого"
              priority
            />
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full items-center justify-end gap-6">
              <Button variant="white" uppercase className="px-8">
                <Link href="/">зачлени се</Link>
              </Button>

              <Button
                variant="outline-white"
                uppercase
                asChild
                className="px-8"
              >
                <Link href="/">донирај</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={handleClick}
                className="flex flex-col items-center justify-center text-base-100"
              >
                <IconArrowNarrowDown />
                <span>Scroll down</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        ref={ref}
        className="bg-gradient-to-r from-[#24463B] to-[#1C362D] py-10"
      >
        <CardGrid />
        <div>
          <PuzzleAnimation />
        </div>
      </div>
    </main>
  );
}
