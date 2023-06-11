import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { IconArrowNarrowDown } from "@tabler/icons-react";
import CardGrid from "@/components/landing-page/CardAnimation";
import PuzzleAnimation from "@/components/landing-page/PuzzleAnimation";
import { useRef } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { env } from "@/env.mjs";
import { GetStaticProps } from "next";

type EventType = {
  id: number;
  picture: string;
  title: string;
  place: string;
  desc: string;
  start_date: string;
  end_date: string;
  created_at: string | null;
  updated_at: string | null;
};

type RazvigorciPageProps = {
  events: EventType[];
};

export default function Home({ events }: RazvigorciPageProps) {
  const [eventOne, eventTwo, eventThree] = events;
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
              <button
                onClick={handleClick}
                className="flex flex-col items-center justify-center gap-2 text-base-100 hover:text-base-200"
              >
                <IconArrowNarrowDown className="h-7 w-7" />
                <span>Scroll down</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ref}
        className="bg-gradient-to-r from-[#24463B] to-[#1C362D] py-10"
      >
        <CardGrid />

        <PuzzleAnimation />

        <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-6 text-center">
          <h2 className="font text-xl font-semibold text-primary-content md:text-5xl">
            ЗАЧЛЕНИ СЕ!
          </h2>

          <p className=" text-center text-lg leading-10 text-primary-content">
            Со повеќе од 57 милиони активни членови во 173 земји и територии,
            извидништвото е едно од најголемите младински движења во светот! Од
            стреличарење и планинарење до јавно говорење и обуки за лидерство,
            извидниците учат преку работа и развиваат вештини кои ќе им помогнат
            да напредуваат и да станат агенти на позитивни промени во нашиот
            свет.  Контактирајте го вашиот локален извиднички одред за да
            дознаете како да го започнете вашето извидничко патешествие.
          </p>
        </div>

        <div className="pb-10">
          <div className="mx-auto mt-10 grid w-11/12 max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 md:w-10/12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div className="relative">
              <div className="mb-5">
                <Image
                  className="w-full rounded-lg object-cover shadow-lg"
                  src="/img/landing-page/lending-1.png"
                  alt="Picture 1"
                  width={267}
                  height={424}
                />
              </div>
              <div className="mt-2 border-b-2 border-t-2 border-secondary py-2 text-center">
                <h4 className="text-lg font-medium text-primary-content">
                  РАЗВИГОРЦИ
                </h4>
                <p className="text-sm text-primary-content">
                  Деца на возраст 7-10 години
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="mb-5">
                <Image
                  className="w-full rounded-lg object-cover shadow-lg"
                  src="/img/landing-page/lending-2.png"
                  alt="Picture 1"
                  width={267}
                  height={424}
                />
              </div>
              <div className="mt-2 border-b-2 border-t-2 border-secondary py-2 text-center">
                <h4 className="text-lg font-medium text-primary-content">
                  ИЗВИДНИЦИ
                </h4>
                <p className="text-sm text-primary-content">
                  Деца на возраст 11-14 години
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="mb-5">
                <Image
                  className="w-full rounded-lg object-cover shadow-lg"
                  src="/img/landing-page/lending-3.png"
                  alt="Picture 1"
                  width={267}
                  height={424}
                />
              </div>
              <div className="mt-2 border-b-2 border-t-2 border-secondary py-2 text-center">
                <h4 className="text-lg font-medium text-primary-content">
                  ИСТРАЖУВАЧИ
                </h4>
                <p className="text-sm text-primary-content">
                  Млади на возраст 15-17 години
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="mb-5">
                <Image
                  className="w-full rounded-lg object-cover shadow-lg"
                  src="/img/landing-page/lending-4.png"
                  alt="Picture 1"
                  width={267}
                  height={424}
                />
              </div>
              <div className="mt-2 border-b-2 border-t-2 border-secondary py-2 text-center">
                <h4 className="text-lg font-medium text-primary-content">
                  РОВЕРИ
                </h4>
                <p className="text-sm text-primary-content">
                  Млади на возраст 18-29 години
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="mb-5">
                <Image
                  className="w-full rounded-lg object-cover shadow-lg"
                  src="/img/landing-page/lending-5.png"
                  alt="Picture 1"
                  width={267}
                  height={424}
                />
              </div>
              <div className="mt-2 border-b-2 border-t-2 border-secondary py-2 text-center">
                <h4 className="text-lg font-medium text-primary-content">
                  СЕНИОРИ
                </h4>
                <p className="text-sm text-primary-content">
                  Возрасни над 30 години
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="relative w-full">
          <Image
            src="/img/cards/svg/lending-big.svg"
            alt="Big Image"
            width={2307}
            height={1700}
            className="w-full object-cover"
          />

          <div className="absolute left-1/2 top-16 mx-auto w-full max-w-screen-xl -translate-x-1/2 -translate-y-1/2 transform text-center text-white md:top-[40%] lg:w-1/2">
            <h5 className="mx-auto w-11/12  text-xs leading-5 md:w-8/12 md:text-lg">
              „ Давам чесен збор,
              <br />  дека ќе ја запознаам и сакам својата татковина,  дека ќе
              ја прифатам духовната реалност  и ќе го барам нејзиното потполно
              значење.  Дека секогаш ќе им помагам на луѓето,  дека ќе живеам и
              работам по извидничките закони.“
            </h5>
          </div>

          <div className="absolute bottom-0 left-0 right-0  mt-5 text-center text-white ">
            <p className="text-xl font-semibold md:text-5xl ">
              НОВА АВАНТУРА ТЕ ЧЕКА!
            </p>
          </div>
          <div className="absolute inset-0 top-24 flex items-center justify-center md:top-80">
            <motion.div
              className="p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src="/img/cards/svg/icon-lending.svg"
                alt="icon"
                className=" mx-auto w-3/6 md:w-full"
              />
            </motion.div>
          </div>
        </section>

        <div className=" bg-black text-center">
          <div className="  mx-auto w-11/12 max-w-screen-xl md:w-7/12">
            <p className="text-sm leading-10 text-primary-content">
              Независно од полот, возраста, позадината или определбата секој
              заинтересиран може да се вклучи и придонесе во најголемото
              младинско образовно движење во Македонија, и тоа на еден или
              повеќе начини:
            </p>
          </div>
          <div className="bg-gradient-to-r from-black to-[#1C362D]">
            <div className="mx-auto  mt-10 grid w-11/12 max-w-screen-xl grid-cols-1 gap-6 py-10 sm:grid-cols-2 md:w-10/12 md:grid-cols-3 lg:grid-cols-4 ">
              <div className="relative">
                <div className="mb-10">
                  <Image
                    className="w-full rounded-lg object-cover shadow-lg"
                    src="/img/cards/leadind-cards-1.png"
                    alt="Picture 1"
                    width={413}
                    height={688}
                  />
                </div>
                <div className="mt-2  border-t-2 border-secondary py-2 text-center">
                  <h4 className="text-lg font-medium text-primary-content">
                    ЗАЧЛЕНИ СЕ
                  </h4>
                </div>
              </div>

              <div className="relative">
                <div className="mb-10">
                  <Image
                    className="w-full rounded-lg object-cover shadow-lg"
                    src="/img/cards/leading-cards-2.png"
                    alt="Picture 1"
                    width={413}
                    height={688}
                  />
                </div>
                <div className="mt-2  border-t-2 border-secondary py-2 text-center">
                  <h4 className="text-lg font-medium text-primary-content">
                    ВОЛОНТИРАЈ
                  </h4>
                </div>
              </div>
              <div className="relative">
                <div className="mb-10">
                  <Image
                    className="w-full rounded-lg object-cover shadow-lg"
                    src="/img/cards/leading-cards-3.png"
                    alt="Picture 1"
                    width={413}
                    height={688}
                  />
                </div>
                <div className="mt-2  border-t-2 border-secondary py-2 text-center">
                  <h4 className="text-lg font-medium text-primary-content">
                    ДОНИРАЈ
                  </h4>
                </div>
              </div>
              <div className="relative">
                <div className="mb-10">
                  <Image
                    className="w-full rounded-lg object-cover shadow-lg"
                    src="/img/cards/leading-cards-4.png"
                    alt="Picture 1"
                    width={413}
                    height={688}
                  />
                </div>
                <div className="mt-2  border-t-2 border-secondary py-2 text-center">
                  <h4 className="text-lg font-medium text-primary-content">
                    ОТВОРИ ОДРЕД
                  </h4>
                </div>
              </div>
            </div>

            <section className="mx-auto w-11/12 max-w-screen-xl flex-col gap-20 py-20 md:flex">
              <div className=" text-center">
                <h2 className="font text-xl font-semibold text-primary-content md:text-5xl">
                  НАСТАНИ
                </h2>
                <div className="  mx-auto w-11/12 max-w-screen-xl py-10 md:w-7/12">
                  <p className=" text-center text-lg leading-10 text-primary-content">
                    СИМ, како и повеќе од 17 извиднички одреди ширум Македонија
                    на годишно ниво организираат еднодневни и повеќедневни
                    активности, хајкови, тренинзи, обуки, работилници и
                    кампување. Придружи ни се!
                  </p>
                </div>
              </div>

              <div className=" w-full gap-4 lg:flex">
                <div className="relative mb-5 self-stretch bg-opacity-10 md:mb-0">
                  <Image
                    src="/img/landing-page/img-left-lending.png"
                    alt="img"
                    width={848}
                    height={888}
                    className="h-full w-full rounded-xl object-cover brightness-75"
                  />

                  <div className="absolute inset-x-0 bottom-4 flex flex-col gap-2 text-center text-white">
                    <div>
                      <Button
                        variant={"secondary-underlined"}
                        rounding="none"
                        uppercase
                        asChild
                      >
                        <Link href={`/event/${eventOne.id}`}>
                          следен настан
                        </Link>
                      </Button>
                    </div>
                    <p>
                      {format(new Date(eventOne.start_date), "P")} |{" "}
                      {eventOne.place}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="relative w-full bg-opacity-10">
                    <Image
                      src="/img/landing-page/img-lending-top.png"
                      alt="img"
                      width={848}
                      height={432}
                      className="w-full brightness-75"
                    />

                    <div className="absolute inset-x-0 bottom-4 text-center">
                      <Button
                        variant={"secondary-underlined"}
                        rounding="none"
                        uppercase
                        asChild
                      >
                        <Link href={`/event/${eventTwo.id}`}>настан</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative w-full bg-opacity-10">
                    <Image
                      src="/img/landing-page/img-lending-botom.png"
                      alt="img"
                      width={848}
                      height={432}
                      className="w-full brightness-75"
                    />

                    <div className="absolute inset-x-0 bottom-4 text-center text-white">
                      <Button
                        variant={"secondary-underlined"}
                        rounding="none"
                        uppercase
                        asChild
                      >
                        <Link href={`/event/${eventThree.id}`}>настан</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `${env.API_BASE_URL}/api/events?upcoming&limit=3`
  );

  const upcomingEvents = await response.json();

  return {
    props: { events: upcomingEvents.events },
  };
};
