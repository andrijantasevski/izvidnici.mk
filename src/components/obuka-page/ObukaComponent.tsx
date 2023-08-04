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
      "Прогресивната патека за личен развој во извидничкото движење започнува токму со оваа школа. Истата опфаќа теоретска едукација и развој на лидерски вештини кај секој учесник, основни меки вештини, имплементирање на веќе постоечки програми за деца и млади од основната програма на СИМ и вештини за промоција на извидништвото и извидничките вредности. Накратко, се имплементира курикулум создаден од комбинација на меки вештини, лидерски вештини и основни извиднички вештини.",
    ForHoItis: "ЗА КОГО Е НАМЕНЕТА",
    forHoText:
      "Регистрирани членови во извидничката организација, на возраст над 14 години.",
    Svg: "/img/obuka-page/poligon.svg",
    SvgText: "ШКОЛА ЗА ВОДАЧИ 1",
    HowisWon: "КАКО СЕ ОСВОЈУВА",
    HowisWonText:
      "Со активно учество на ШЗВ 1; Со планирање и имплементација на сесија / работилница во рамките на Летен / Зимски Камп, Ден на извидници, Извиднички караван.",
  },
];

const ObukaComponent: React.FC = () => (
  <div className="relative bg-[#455227]">
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
        <div className=" relative mx-auto w-10/12 max-w-screen-xl rounded-3xl border border-base-100 px-7 py-10 text-white ">
          <div className="ml-7">
            <h2 className="mb-4 text-xl font-semibold">{item.whatisLearn}</h2>
          </div>
          <div className="flex gap-5">
            <div className=" mt-2 h-2 w-2 rounded-full bg-white md:block"></div>
            <div className=" w-11/12">
              <p>{item.learnText}</p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid w-10/12 max-w-screen-xl gap-10 py-10 md:grid-cols-3 md:gap-40">
          <div className="relative z-40 mx-auto flex w-11/12  flex-col justify-center space-y-10 rounded-3xl border border-base-100 px-7 py-4 text-white ">
            <div className="ml-4">
              <h2 className="mb-4  text-xl font-semibold">
                {item.ForHoItis}
              </h2>
            </div>
            <div className="flex gap-5">
              <div className=" mt-2 h-2 w-2 rounded-full bg-white md:block"></div>
              <div className=" w-11/12">
                <p>{item.forHoText}</p>
              </div>
            </div>
          </div>
          <div className="z-40 flex flex-col items-center justify-between  rounded-3xl px-4 py-4 text-white">
            <Image src={item.Svg} alt="SVG Icon" width={348} height={320} />
            <p className="mt-5 text-center text-xl font-semibold">
              {item.SvgText}
            </p>
          </div>
          <div className=" relative mx-auto flex w-11/12 flex-col justify-center space-y-10 rounded-3xl border border-base-100 px-7 py-4 text-white">
            <div className="ml-4">
              <h2 className="mb-4 text-xl font-semibold">{item.HowisWon}</h2>
            </div>
            <div className="flex gap-5">
              <div className=" mt-2 h-2 w-2 rounded-full bg-white md:block"></div>
              <div className=" w-11/12">
                <p>{item.HowisWonText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ObukaComponent;
