import React from "react";
import Image from "next/image";
import Head from "next/head";
import { IconCircleFilled } from "@tabler/icons-react";
import CountUp from "react-countup";
import HeroBanner from "@/components/common/HeroBanner";

const storyLine = [
  {
    year: 1921,
    description:
      "Сојузот на извидници на Македонија припаѓа на Европскиот извиднички регион и има долга историја која датира уште од далечната 1921 година. Во тогашна Македонија се формирани првите стегови, на територијата на Скопје; а во текот на 1923 год. и 1924 год., формирани се повеќе такви стегови, и тоа во Куманово, Штип, Битола, Струмица и Гостивар, а со тоа и формиран и Вардарскиот скаутски регион, со седиште во Скопје. Во почетокот, од 1921 до 1940 година, се споменува дека се организирани многу летни логори и школи, од кои како една од најмасовните акции/активности во тој период е заведена прославата на осумдесеттиот роденден на основачот на Светското извидничко движење, лордот Роберт Баден Пауел. За време на Втората светска војна, поради затекнатата ситуација, престануваат сите активности на извидничката организација во Македонија. ",
  },
  {
    year: 1953,
    description:
      "Во 1953 година, од страна на поранешни членови на Извидничката организација, се основа слична организација на неа, но со ново име - Сојуз на извидници на Македонија (СИМ). Од тогаш Сојузот неуморно работи на развојот на младите и на проширувањето на извидништвото во секое ќоше во државата. Карактеристично за овој период е што биле остварени првите меѓународни контакти и тоа, во 1959-1960, со белгиските Црвени ѓаволи, кои престојувале во Извидничкиот Центар Охрид. ",
  },
  {
    year: 1991,
    description:
      "По осамостојувањето на Република Македонија на 8-ми септември 1991 год., меѓународната соработка на СИМ е на завидно ниво; покрај соработката со Сојузот на извидници на Југославија (СИЈ) и Сојузот на извидниците на Словенија (ЗТС), плодна соработка е остварена и со Сојузот на извидниците и извидничките на Баварија (БДП) и со Шпанската извидничка федерација (АСДЕ). /n Во овој период, по осамостојувањето, СИМ ги остварува и првите контакти со Светската извидничка организација, а се однесуваат за прием во WOSM (Светска организација на извидничкото движење). Во тие три години, додека се чекаше на прием, СИМ оствари повеќе активности од меѓународен карактер, и тоа учество на Европската конференција во 1995 год, XVIII и XIX Светско џамбори во Холандија и Чиле, XXXIV и XXXV Конференција на WOSM, X Светски мут во Шведска (во 1996 год). /n Не треба да се заборави учеството на голем број на извидници од СИМ на голем број школи и семинари одржани во Словенија, Кипар, Унгарија, Франција, одржани од страна на Европското извидничко биро. ",
  },
  {
    year: 1997,
    description:
      "Официјално, на 25.07.1997, Сојуз на извидници на Македонија станува дел од Светското извидничко движење. Како членка во WOSM, СИМ за своето членство добива голем број на придобивки, од кои дел се: сервиси и консултации за подобро управување, можности за градење на капацитетите за своето членство, можност за учество во интернационални семинари, обуки и кампови, како и можност за директно вклучување, застапување и креирање политики во рамките на регионот или на глобално ниво.  ",
  },
  {
    year: "Денес",
    description:
      "Извидничкото движење во Македонија кое се споменува моментално е организирано во 23 извиднички одреди (единици), во речиси сите региони ширум Mакедонија, со членство кое брои над 2500 индивидуи и многу иницијативи за нови одреди кои моментално се во процедура за исполнување на условите за полноправно членство во СИМ. Во овие над 70 години постоење, СИМ има традиција на организирање голем број на ориентациони и полигонски натпреварувања, семинари и обуки, школи за водачи, каравани и акции, кампањи, летни и зимски кампови и многу други извиднички активности. Покрај активностите на СИМ, одредите ширум државата организираат голем број на ориентациони натпреварувања и школи за обука на кадри; а приоритет им е работата, воспитувањето и едукацијата на децата и младите - членови во извидничкото движење. Овие активности се организираат во природа или, пак, онаму каде што постојат извиднички центри, како што се оние на Охридското Езеро во Охрид и Струга; и ширум цела Македонија каде што се наоѓаат извиднички домови во планина, село или град.",
  },
];

type StoryLineItemType = {
  year: string | number;
  description: string;
};

type StoryLineItemProps = {
  storyLineItem: StoryLineItemType;
  idx: number;
};

function StoryLineItem({ storyLineItem, idx }: StoryLineItemProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-1/12 text-center text-2xl font-semibold uppercase text-base-100">
        {storyLineItem.year}
      </div>

      <div className="flex">
        <div className={`flex w-1/12 justify-center self-stretch`}>
          <div
            className={`relative h-full w-1 ${
              idx + 1 === storyLine.length ? "bg-transparent" : "bg-base-300"
            }`}
          >
            <IconCircleFilled
              className={`absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 ${
                idx + 1 === storyLine.length
                  ? "text-transparent"
                  : "text-base-300"
              }`}
            />
            <IconCircleFilled
              className={`absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 text-base-300 ${
                idx + 1 === storyLine.length
                  ? "text-transparent"
                  : "text-base-300"
              }`}
            />
          </div>
        </div>

        <div className="w-11/12 rounded-xl bg-base-300 p-6 leading-loose text-base-content">
          {storyLineItem.description}
        </div>
      </div>
    </div>
  );
}

export default function ZaNasPage() {
  return (
    <>
      <Head>
        <title>За нас</title>
      </Head>

      <HeroBanner
        imageSrc="/img/background-images/about-hero.png"
        imageAlt="Два извидника покажуваат знак со нивните раце."
        title="За нас"
      />

      <section className="mx-auto flex w-11/12 max-w-screen-xl flex-col justify-between gap-10 py-10 text-center text-2xl font-semibold lg:flex-row lg:py-20">
        <div className="flex flex-col gap-4 uppercase">
          <p className="text-secondary">
            <CountUp end={70} duration={3.2} />
          </p>
          <p>години</p>
        </div>
        <div className="flex flex-col gap-4 uppercase">
          <p className="text-secondary">
            <CountUp end={17} duration={3.2} />
          </p>
          <p>градови</p>
        </div>
        <div className="flex flex-col gap-4 uppercase">
          <p className="text-secondary">
            <CountUp end={2500} duration={3.2} />+
          </p>
          <p>членови</p>
        </div>
        <div className="flex flex-col gap-4 uppercase">
          <p className="text-secondary">
            <CountUp end={280} duration={3.2} />+
          </p>
          <p>активисти</p>
        </div>
        <div className="flex flex-col gap-4 uppercase">
          <p className="text-secondary">
            <CountUp end={52} duration={3.2} />+
          </p>
          <p>вештарства</p>
        </div>
      </section>

      <section className="hidden bg-base-100 lg:block">
        <Image
          src="/img/kalendar/pattern.svg"
          width={1920}
          height={115}
          alt="Pattern"
          className="-mb-0.5 w-full"
          priority
        />
      </section>

      <section className="bg-primary py-10 lg:py-20">
        <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-10 text-base-100">
          <p className="text-center font-semibold leading-loose">
            Сојузот на извидници на Македонија е национална организација
            регистрирана соглесно законот за здруженија и фондации на 19.11.1984
            година и регистрирана како младинска чадор организација во 2020
            година согласно законот за младинско учество и младински политики.
            Како организација активно делува и постои од 1953 година,
            имплементирајќи програми за животни вештини за деца и млади на
            територијата на цела држава.
          </p>

          <div className="flex gap-10">
            <div className="flex w-full flex-col gap-10 lg:w-8/12">
              {storyLine.map((storyLineItem, idx) => (
                <StoryLineItem
                  key={storyLineItem.year}
                  storyLineItem={storyLineItem}
                  idx={idx}
                />
              ))}
            </div>
            <div className="hidden w-4/12 flex-col justify-between py-40 lg:flex">
              <Image
                src={"/img/za-nas/Image (26) 1.png"}
                alt="img"
                width={2557}
                height={436}
              />

              <Image
                src={
                  "/img/za-nas/56828043_2260394420689100_3371333616922525696_n 1.png"
                }
                alt="img"
                width={557}
                height={436}
              />

              <Image
                src={"/img/za-nas/DSC_2064 1.png"}
                alt="img"
                width={557}
                height={436}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-10 py-10 text-center lg:py-10">
        <h2 className="text-3xl font-semibold">ИЗВИДНИЧКИ МЕТОД</h2>
        <p className="leading-loose">
          Суштински систем за постигнување на образовниот предлог на
          извидничкото движење, дефиниран како систем на прогресивно
          самообразование. Претставува метод заснован на интеракција на
          подеднакво важни елементи кои функционираат заедно како кохезивен
          систем, а имплементацијата на овие елементи на комбиниран и балансиран
          начин е она што го прави извидништвото уникатно. Извидничкиот метод е
          основа на извидништвото и е изразен преку следните елементи:
        </p>

        <div className="flex justify-center">
          <Image
            src={"/img/za-nas/izvidnichki-metod.jpg"}
            alt="img"
            width={1011}
            height={1075}
          />
        </div>
      </section>

      <section className="relative bg-primary text-center text-base-100">
        <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-10 py-10 lg:py-20">
          <h2 className="text-3xl font-semibold">НАШАТА ВИЗИЈА</h2>
          <p className="text-lg font-medium leading-loose">
            Сојузот на извидници на Македонија е релевантна, атрактивна и
            самоодржлива организација која обединува млади луѓе преку современа
            прогресивна програма која ги исполнува општествените потреби на
            младите во Р. Македонија и го гради нивниот карактер врз база на
            позитивните извиднички вредности и принципи.
          </p>

          <p className="text-xl font-semibold uppercase">биди подготвен!</p>
        </div>

        <Image
          className="absolute bottom-0 hidden lg:block"
          src="/img/zacleni-se/scout-types-pattern.svg"
          width={318}
          height={329}
          alt="Pattern"
        />

        <Image
          className="absolute right-0 top-0 hidden rotate-180 lg:block"
          src="/img/zacleni-se/scout-types-pattern.svg"
          width={318}
          height={329}
          alt="Pattern"
        />
      </section>

      <section className="flex justify-center pb-40">
        <Image
          src={"/img/za-nas/Group 352 (2).png"}
          alt="img"
          width={266}
          height={135}
        />
      </section>
    </>
  );
}
