import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { env } from "@/env.mjs";
import { format } from "date-fns";
import HeroBanner from "@/components/common/HeroBanner";
import upcomingEvents from "../../data/upcoming-events.json";

export type EventType = {
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

const Razvigorci: NextPage<RazvigorciPageProps> = ({ events }) => {
  const [eventOne, eventTwo, eventThree] = events;

  return (
    <>
      <Head>
        <title>Развигорци</title>
      </Head>

      <HeroBanner
        title="развигорци"
        imageSrc="/img/background-images/background-razvigorci-hero.png"
        imageAlt="Два извидника покажуваат знак со нивните раце."
      />

      <section className="mx-auto w-11/12 max-w-screen-xl py-10 lg:py-20">
        <p className="mx-auto w-11/12 text-center leading-loose md:w-10/12">
          Ја запознаваат природата, учат да ја сакаат и се грижат за неа. Учат
          како да се снајдат во природата и да станат свесни за нејзините
          вредности и опасности. Ги познаваат своите права и обврски и развиваат
          чувство за правда и еднаквост. Го запознаваат, почитуваат и
          соработуваат со светот во кој што живеат. Слободно ги истражуваат
          своите мисли и чувства. Се грижат за своето здравје и дух. Се снаоќаат
          во времето и просторот, креативно истражуваат, ги користат основните
          технички уреди и средства за комуникација. Ја ценат својата и
          културата на другите, го прифаќаат кодексот на фино однесување и
          етиката. Се запознаваат со работата и принципите на организацијата,
          учествувајќи во изградба на својата патрола, учејќи да го почитуваат,
          ценат и сакат извидништвото, знаејќи ги своите права и должности во
          организацијата.
        </p>
      </section>

      <section className="mx-auto flex w-11/12 max-w-screen-xl flex-col justify-between gap-10 lg:flex-row">
        <div className="flex w-full flex-col justify-between rounded-3xl bg-primary bg-group-left bg-contain">
          <Image
            src={"/img/razvigorci/section-two-one.png"}
            alt="img"
            width={848}
            height={558}
          />

          <div className="flex h-full flex-col items-center justify-center gap-6 p-12">
            <p className="text-center text-white">
              Програмата за развигорци се состои од општи работи и посебни
              знаења, кои се темелат на оргиналните идеи на основачот на
              извидничкото движење. Преку спроведување на оваа програма,
              развигорците остваруваат напредок на нивниот интелектуален,
              телесен, емоционален, социјален, духовен и карактен развој.
            </p>

            <Button
              asChild
              variant={"secondary-underlined"}
              rounding="none"
              uppercase
            >
              <Link href="/">програма за развигорци</Link>
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between rounded-3xl bg-primary bg-group-left bg-contain">
          <Image
            src={"/img/razvigorci/section-two-two.png"}
            alt="img"
            width={848}
            height={558}
          />

          <div className="flex h-full flex-col items-center justify-center gap-6 p-12">
            <p className="text-center text-white">
              Впушти се во една поинаква авантура! Зачлени се во најголемото
              младинско движење во Македонија.
            </p>

            <Button
              asChild
              variant={"secondary-underlined"}
              rounding="none"
              uppercase
            >
              <Link href="/">стани член</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-10 py-10 lg:flex-row lg:gap-20 lg:py-20">
        <div className="w-full lg:w-1/2">
          <Image
            src={"/img/razvigorci/areas-personal-growth.png"}
            alt="img"
            width={687}
            height={832}
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
          <Image
            src="/img/zacleni-se/pattern-white-section-centered.svg"
            width={266}
            height={120}
            alt="Pattern"
          />
          <div className="flex w-full flex-col items-center justify-center gap-10 rounded-3xl bg-primary p-10 text-center text-white lg:p-20">
            <h2 className="text-2xl font-bold uppercase">
              области на личен развој за развигорците во извидничката програма
            </h2>

            <p className="leading-loose">
              Преку внимателно дизајнирани активности и методи за учење, на
              развигорците им е овозможен напредок во овие 6 развојни полиња.
              Нови вештини и пријателства се на повидок.
            </p>
          </div>
        </div>
      </section>
      {/* 
      {"/img/razvigorci/nastan-1.png"}
      {"/img/razvigorci/nastan-2.png"}
      {"/img/razvigorci/nastan-3.png"} */}
      <section className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-10 py-20">
        <h2 className="text-center text-3xl font-semibold">СВЕДОШТВА</h2>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex w-full flex-col items-center justify-center rounded-3xl lg:w-1/4">
            <Image
              src={"/img/razvigorci/8 1.png"}
              alt="img"
              width={400}
              height={400}
            />
            <div className="bg-primary p-10 text-center text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                nesciunt est facilis odit tempora doloribus aperiam ex
                laboriosam placeat unde, eligendi ipsum harum laborum magnam,
                doloremque sunt aut? Quibusdam, numquam ratione repudiandae
                molestias debitis molestiae consectetur iusto, fugiat fugit
                delectus expedita? Quidem odio omnis placeat perspiciatis ipsum!
                Placeat, excepturi vel?
              </p>
              <p className="pt-5">Ана, 10 години</p>
            </div>

            <Image
              src={"/img/razvigorci/Group 534.png"}
              alt="img"
              width={100}
              height={100}
            />
          </div>

          <div className="flex w-full flex-col items-center justify-center rounded-3xl lg:w-1/4">
            <Image
              src={"/img/razvigorci/8 2.png"}
              alt="img"
              width={400}
              height={400}
            />
            <div className="bg-primary p-10 text-center text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                nesciunt est facilis odit tempora doloribus aperiam ex
                laboriosam placeat unde, eligendi ipsum harum laborum magnam,
                doloremque sunt aut? Quibusdam, numquam ratione repudiandae
                molestias debitis molestiae consectetur iusto, fugiat fugit
                delectus expedita? Quidem odio omnis placeat perspiciatis ipsum!
                Placeat, excepturi vel?
              </p>
              <p className="pt-5">Ена, 9 години</p>
            </div>
            <Image
              src={"/img/razvigorci/Group 534.png"}
              alt="img"
              width={100}
              height={100}
            />
          </div>

          <div className="flex w-full flex-col items-center justify-center rounded-3xl lg:w-1/4">
            <Image
              src={"/img/razvigorci/8 3.png"}
              alt="img"
              width={400}
              height={400}
            />
            <div className="bg-primary p-10 text-center text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                nesciunt est facilis odit tempora doloribus aperiam ex
                laboriosam placeat unde, eligendi ipsum harum laborum magnam,
                doloremque sunt aut? Quibusdam, numquam ratione repudiandae
                molestias debitis molestiae consectetur iusto, fugiat fugit
                delectus expedita? Quidem odio omnis placeat perspiciatis ipsum!
                Placeat, excepturi vel?
              </p>
              <p className="pt-5">Лена, 6 години</p>
            </div>
            <Image
              src={"/img/razvigorci/Group 534.png"}
              alt="img"
              width={100}
              height={100}
            />
          </div>

          <div className="flex w-full flex-col items-center justify-center rounded-3xl lg:w-1/4">
            <Image
              src={"/img/razvigorci/8 4.png"}
              alt="img"
              width={400}
              height={400}
            />
            <div className="bg-primary p-10 text-center text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                nesciunt est facilis odit tempora doloribus aperiam ex
                laboriosam placeat unde, eligendi ipsum harum laborum magnam,
                doloremque sunt aut? Quibusdam, numquam ratione repudiandae
                molestias debitis molestiae consectetur iusto, fugiat fugit
                delectus expedita? Quidem odio omnis placeat perspiciatis ipsum!
                Placeat, excepturi vel?
              </p>
              <p className="pt-5">Ненеад, 11 години</p>
            </div>
            <Image
              src={"/img/razvigorci/Group 534.png"}
              alt="img"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center py-10">
        <Button
          variant={"secondary-underlined"}
          rounding="none"
          uppercase
          size="lg"
          className="text-center text-4xl text-black"
          asChild
        >
          <Link href="/">стани член</Link>
        </Button>
      </section>

      <section className="mx-auto w-11/12 max-w-screen-xl flex-col gap-20 py-20 md:flex">
        <div className=" text-center">
          <h2 className="font text-xl font-semibold md:text-5xl">НАСТАНИ</h2>
        </div>

        <div className=" w-full gap-4 lg:flex">
          <div className="relative mb-5 self-stretch bg-opacity-10 md:mb-0">
            <Image
              src={"/img/razvigorci/nastan-1.png"}
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
                  <Link href={`/nastani/${eventOne.id}`}>следен настан</Link>
                </Button>
              </div>
              <p>
                {format(new Date(eventOne.start_date), "P")} | {eventOne.place}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative w-full bg-opacity-10">
              <Image
                src={"/img/razvigorci/nastan-2.png"}
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
                  <Link href={`/nastani/${eventTwo.id}`}>настан</Link>
                </Button>
              </div>
            </div>

            <div className="relative w-full bg-opacity-10">
              <Image
                src={"/img/razvigorci/nastan-3.png"}
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
                  <Link href={`/nastani/${eventThree.id}`}>настан</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // UNCOMMENT WHEN API WORKS

  // const response = await fetch(
  //   `${env.API_BASE_URL}/api/events?upcoming&limit=3`
  // );

  // const upcomingEvents = await response.json();

  // return {
  //   props: { events: upcomingEvents.events },
  // };

  return {
    props: {
      events: upcomingEvents,
    },
  };
};

export default Razvigorci;
