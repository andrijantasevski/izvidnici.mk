import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-screen bg-landing-first-section bg-cover bg-no-repeat py-10">
        <div className="container mx-auto flex h-full flex-col items-center justify-between">
          <div />
          <div className="-mt-32 flex flex-col items-center justify-center gap-4">
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
              <button className="text-base-100">Scroll down</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
