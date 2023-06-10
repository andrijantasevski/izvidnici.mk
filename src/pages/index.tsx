import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { IconArrowNarrowDown } from "@tabler/icons-react";
import CardGrid from "@/components/landing-page/CardAnimation";

export default function Home() {
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

          <div className="flex w-full flex-col-reverse gap-10 lg:flex-col lg:gap-4">
            <div className="flex w-full items-center justify-center gap-6 lg:justify-end">
              <Button variant="white" uppercase className="px-8">
                <Link href="/zacleni-se">зачлени се</Link>
              </Button>

              <Button
                variant="outline-white"
                uppercase
                asChild
                className="px-8"
              >
                <Link href="/donacija">донирај</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center">
              <button className="flex flex-col items-center justify-center gap-2 text-base-100 hover:text-base-200">
                <IconArrowNarrowDown className="h-7 w-7" />
                <span className="text-xl">Scroll down</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <CardGrid />
    </main>
  );
}
