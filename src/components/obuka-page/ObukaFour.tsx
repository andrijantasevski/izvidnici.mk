import React from "react";
import Image from "next/image";

interface ObukaData {
  whatisLearn: string;
  learnText: string;
  ForHoItis: string;
  forHoText: string;
  Svg: string;
  Name: string;
  SvgText: string;
  HowisWon: string;
  HowisWonText: string;
}

const data: ObukaData[] = [
  {
    whatisLearn: "ШТО СЕ ИЗУЧУВА",
    learnText:
      "Последниот стадиум на патеката за личен развој е оваа школа, која се имплементира според светскиот WoodBadge метод на едукација практикуван во сите национални извиднички организации / сојузи - членки во Светската Извидничка Организација. Инструкторската школа цели кон стекнување на напредни лидерски вештини, зајакнување на организациските вештини кај еден поединец, како и стекнување напредни вештини за проектно пишување и проектен менаџмент, мониторинг и евалуација. Со завршувањето на оваа школа, младите се подготвени да се впуштат во посериозни обврски и позиции во работата на една организација на национално или локално ниво, а дополнително и да работат на развивање на вештините на останатите млади во и вон организацијата. Програмата е базирана на WoodBadge компетенциите на светската извидничка организација препознаена од 174 држави во светот.",
    ForHoItis: "ЗА КОГО Е НАМЕНЕТА",
    forHoText:
      " Регистрирани членови во извидничката организација, на возраст над 21 година, со веќе поминати и освоени Школа за водачи 1, Школа за Водачи 2 и Тренинг за Тренери.",
    Svg: "/img/obuka-page/obuka-four.png",
    Name: "ПАПАДИМИТРОВ П.",
    SvgText: "ОБУКА ЗА ИНСТРУКТОРИ",
    HowisWon: "КАКО СЕ ОСВОЈУВА",
    HowisWonText:
      "Со активно учество и помината теоретска и практична настава на Инструкторска школа;  Со спроведен инструкторски проект на национално ниво.",
  },
];

const ObukaFour: React.FC = () => (
  <div className="relative bg-[#533628]">
    <div className="absolute bottom-0 right-0 hidden md:block">
      <Image
        src="./img/cards/svg/back-card.svg"
        width={474}
        height={490}
        className="z-0 w-full object-cover"
        alt="image svg"
      />
    </div>
    <div className="absolute bottom-0 left-0 hidden md:block">
      <Image
        src="./img/cards/svg/svg-cards.svg"
        width={474}
        height={490}
        className="z-0 w-full object-cover"
        alt="image svg"
      />
    </div>

    {data.map((item) => (
      <div key={item.whatisLearn} className="py-10">
        <div className=" relative mx-auto w-10/12 rounded-3xl border border-base-100 px-7 py-10 text-white ">
          <h2 className="mb-4 text-xl font-semibold">{item.whatisLearn}</h2>
          <p>{item.learnText}</p>
          <div className="absolute left-3 top-[93px] hidden h-2 w-2 rounded-full bg-white md:block"></div>
        </div>
        <div className="mx-auto grid w-10/12 gap-10 py-10 md:grid-cols-3 md:gap-40">
          <div className="relative z-40 mx-auto flex w-11/12 flex-col justify-center space-y-10 rounded-3xl border border-base-100 px-7 py-4 text-white ">
            <h2 className="mb-7 whitespace-nowrap text-xl font-semibold ">
              {item.ForHoItis}
            </h2>
            <p>{item.forHoText}</p>
            <div className="absolute left-3 top-[142px] hidden h-2 w-2 rounded-full bg-white md:block"></div>
          </div>
          <div className="z-40 flex flex-col items-center justify-between  rounded-3xl px-4 py-4 text-white">
            <Image src={item.Svg} alt="SVG Icon" width={348} height={320} />
            <p className="mt-5 text-center text-xl font-semibold">
              {item.Name}
            </p>
            <p className="mt-5 text-center text-xl font-semibold">
              {item.SvgText}
            </p>
          </div>
          <div className=" relative mx-auto flex w-11/12 flex-col justify-center space-y-10 rounded-3xl border border-base-100 px-7 py-4 text-white">
            <h2 className="mb-4  text-xl font-semibold">{item.HowisWon}</h2>
            <p>{item.HowisWonText}</p>
            <div className="absolute left-3 top-[138px] hidden h-2 w-2 rounded-full bg-white md:block"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ObukaFour;
