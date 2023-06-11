import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Head from "next/head";

const razvigorci = () => {
  return (
    <>
      <Head>
        <title>Развигорци</title>
      </Head>

      <section className="relative">
        <Image
          src="/img/background-images/background-razvigorci-hero.png"
          width={1920}
          height={536}
          alt="Два извидника покажуваат знак со нивните раце."
          className="h-[60vh] w-full object-cover brightness-90 lg:h-[60vh]"
          priority
        />

        <div className="absolute left-1/2 top-1/2 flex w-full max-w-screen-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-8 text-center text-base-100">
          <h1 className="text-3xl uppercase lg:text-5xl 2xl:text-6xl">
            развигорци
          </h1>
        </div>
      </section>

      <section className="mx-auto w-11/12 max-w-screen-xl py-20">
        <p className="leading-loose">
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

      <section className="mx-auto mt-20 flex w-11/12 max-w-screen-xl flex-col gap-20 lg:flex-row">
        <div className="w-1/2">
          <Image
            src={"/img/razvigorci/areas-personal-growth.png"}
            alt="img"
            width={687}
            height={832}
          />
        </div>

        <div className="flex w-1/2 flex-col items-center justify-center">
          <Image
            src="/img/zacleni-se/pattern-white-section-centered.svg"
            width={266}
            height={120}
            alt="Pattern"
          />
          <div className="flex w-full flex-col items-center justify-center gap-10 rounded-3xl bg-primary p-20 text-center text-white">
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

      <section className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-20 py-20">
        <h2 className="text-center text-3xl font-semibold">СВЕДОШТВА</h2>

        <div className="flex gap-4">
          <div className="w-1/4 rounded-3xl">
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
              className="ml-20"
            />
          </div>

          <div className="w-1/4 rounded-3xl">
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
              className="ml-20"
            />
          </div>

          <div className="w-1/4 rounded-3xl">
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
              className="ml-20"
            />
          </div>

          <div className="w-1/4 rounded-3xl">
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
              className="ml-20"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center py-20">
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

      <section className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-20 py-20">
        <h2 className="text-center text-3xl font-semibold">НАСТАНИ</h2>

        <div className="flex justify-center">
          <div className="relative bg-opacity-10">
            <Image
              src={"/img/razvigorci/nastan-1.png"}
              alt="img"
              width={400}
              height={800}
            />

            <div className="absolute inset-0 mt-96 text-center text-white">
              <Button
                variant={"secondary-underlined"}
                className=" text-center "
              >
                СЛЕДЕН НАСТАН
              </Button>
              <p>02.03.2023 | Велес</p>
            </div>
          </div>

          <div>
            <div className="relative mb-2 ml-2 bg-opacity-10">
              <Image
                src={"/img/razvigorci/nastan-2.png"}
                alt="img"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 mt-40  text-center text-white">
                <Button
                  variant={"secondary-underlined"}
                  className=" text-center "
                >
                  СЛЕДЕН НАСТАН
                </Button>
              </div>
            </div>
            <div className="relative ml-2 bg-opacity-10">
              <Image
                src={"/img/razvigorci/nastan-3.png"}
                alt="img"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 mt-40  text-center text-white">
                <Button
                  variant={"secondary-underlined"}
                  className=" text-center "
                >
                  СЛЕДЕН НАСТАН
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default razvigorci;
