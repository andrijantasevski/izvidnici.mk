import ObukaComponent from "@/components/obuka-page/ObukaComponent";
import ObukaFour from "@/components/obuka-page/ObukaFour";
import ObukaSecond from "@/components/obuka-page/ObukaSecond";
import ObukaThree from "@/components/obuka-page/ObukaThree";
import SectionBetween from "@/components/obuka-page/SectionBetween";
import Head from "next/head";
import Image from "next/image";

export default function obuka() {
  return (
    <>
      <Head>
        <title>Obuka</title>
      </Head>
      <main>
        <section className="relative w-full ">
          <div className="relative">
            <Image
              src="/img/obuka-page/obuka.png"
              width={1920}
              height={576}
              alt="Два извидника покажуваат знак со нивните раце."
              className="h-[45vh] w-full object-cover brightness-90 md:h-[60vh]"
              priority
            />

            <h1
              className="top[50%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-lg text-base-100  2xl:text-5xl"
              style={{ lineHeight: "1.5" }}
            >
              ПАТЕКА ЗА ЛИЧЕН РАЗВОЈ ВО ИЗВИДНИШТВОТО
            </h1>
          </div>
        </section>
        <section className="relative my-10 flex h-[365px] items-center justify-center md:my-0 ">
          <div className="mx-auto w-11/12 text-center text-lg md:w-7/12">
            Покрај областите на личен развој предвидени за категориите
            развигорци и извидници, за нашите истражувачи, ровери и сениори има
            креирано пргресивна тренинг рамка која одговара на потребите и
            стремежите на младите од денешницата. Сојуз на извидници на
            Македонија продолжува да се залага за креирање на конструктивни
            индивидуи кои позитивно влијаат и придонесуваат во заедницата во
            која делуваат.
          </div>

          <div className="absolute right-0 hidden lg:block">
            <Image
              src="/img/obuka-page/obuka.svg"
              width={386}
              height={386}
              priority
              alt="Pattern"
            />
          </div>
        </section>
        <ObukaComponent />
        <SectionBetween />
        <ObukaSecond />
        <SectionBetween />
        <ObukaThree />
        <SectionBetween />
        <ObukaFour />
        <div className=" py-10">
          <h4 className=" py-14 text-center text-xl font-bold md:text-2xl">
            Работен век на еден извидник
          </h4>
          <div className=" mx-auto w-10/12">
            <Image
              src="./img/obuka-page/obuka-last.svg"
              width={1720}
              height={718}
              className="z-0 w-full object-cover"
              alt="image svg"
            />
          </div>
        </div>
      </main>
    </>
  );
}
