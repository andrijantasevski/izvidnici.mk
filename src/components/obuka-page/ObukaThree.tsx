import React from "react";
import Image from "next/image";

interface ObukaData {
  whatisLearn: string;
  learnText: string;
  ForHoItis: string;
  forHoText: string;
  Svg: string;
  SvgText: string;
  HowisWon: string;
  HowisWonText: string;
}

const data: ObukaData[] = [
  {
    whatisLearn: "ШТО СЕ ИЗУЧУВА",
    learnText:
      "Овој тренинг претставува можност младите да ги развијат и доразвијат своите тренерски вештини. Преку овој тренинг младите стекнуваат вештини за давање на конструктивен фидбек, изучуваат тренинг методи и најразлични тренинг помагала, се стекнуваат со презентациски вештини, како и вештини за планирање и имплементација на тренинг. Во оваа етапа не се изоставени ни методите за ефикасно искуствено учење, како и истражување на начините на кои учат различните возрасни категории на публиката. Тренингот за тренери е наменет за стекнување на вештини за фасилитирање и организирање на тренинзи согласно извидничкиот метод на работа.",
    ForHoItis: "ЗА КОГО Е НАМЕНЕТА",
    forHoText:
      " Регистрирани членови во извидничката организација, на возраст над 18 години, со веќе поминати и освоени Школа за водачи 1 и Школа за Водачи 2.",
    Svg: "/img/obuka-page/obuka-three.svg",
    SvgText: "ОБУКА ЗА ОБУЧУВАЧИ",
    HowisWon: "КАКО СЕ ОСВОЈУВА",
    HowisWonText:
      "Со активно учество на Тренинг за тренери; Со планирање и имплементација на работилница / сесија за Школа за водачи 1 или Школа за водачи 2.",
  },
];

const ObukaThree: React.FC = () => (
  <div className="relative bg-[#B94514]">
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
            <div className="absolute left-3 top-[140px] hidden h-2 w-2 rounded-full bg-white md:block"></div>
          </div>
          <div className="z-40 flex flex-col items-center justify-between  rounded-3xl px-4 py-4 text-white">
            <Image src={item.Svg} alt="SVG Icon" width={348} height={320} />
            <p className="mt-5 text-center text-xl font-semibold">
              {item.SvgText}
            </p>
          </div>
          <div className=" relative mx-auto flex w-11/12 flex-col justify-center space-y-10 rounded-3xl border border-base-100 px-7 py-4 text-white">
            <h2 className="mb-4  text-xl font-semibold">{item.HowisWon}</h2>
            <p>{item.HowisWonText}</p>
            <div className="absolute left-3 top-[124px] hidden h-2 w-2 rounded-full bg-white md:block"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ObukaThree;