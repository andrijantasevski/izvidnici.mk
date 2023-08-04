import HeroBanner from "@/components/common/HeroBanner";
import HeroDescription from "@/components/common/HeroDescription";
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
        <title>Обука</title>
      </Head>

      <main>
        <HeroBanner
          title="ПАТЕКА ЗА ЛИЧЕН РАЗВОЈ ВО ИЗВИДНИШТВОТО"
          imageSrc="/img/obuka-page/obuka.png"
          imageAlt="Два извидника покажуваат знак со нивните раце."
        />

        <HeroDescription
          imageSrc="/img/obuka-page/obuka.svg"
          imageAlt="Pattern"
          description="Покрај областите на личен развој предвидени за категориите развигорци и извидници, за нашите истражувачи, ровери и сениори има креирано прогресивна тренинг рамка која одговара на потребите и стремежите на младите од денешницата. Сојуз на извидници на Македонија продолжува да се залага за креирање на конструктивни индивидуи кои позитивно влијаат и придонесуваат во заедницата во која делуваат."
        />

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
          <div className=" mx-auto w-10/12 max-w-screen-xl">
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
