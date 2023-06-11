import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

const Programi = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const images = [
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
    "/img/programi/image 173.png",
    "/img/programi/image 173.png",
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
    "/img/programi/image 172.png",
    "/img/programi/image 172.png",
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
  ];

  const onNext = () => {
    if (currentCard + 4 < images.length) {
      setCurrentCard(currentCard + 4);
    } else {
      setCurrentCard(0);
    }
  };

  const onPrev = () => {
    if (currentCard - 4 >= 0) {
      setCurrentCard(currentCard - 4);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentCard + 4 < images.length) {
        setCurrentCard(currentCard + 4);
      } else {
        setCurrentCard(0);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentCard, images.length]);

  const displayedBlogs = images.slice(currentCard, currentCard + 4);

  return (
    <>
      <section className="relative">
        <Image
          src="/img/background-images/programi-hero.png"
          width={1920}
          height={536}
          alt="Два извидника покажуваат знак со нивните раце."
          className="h-[60vh] w-full object-cover brightness-90 lg:h-[60vh]"
          priority
        />

        <div className="absolute left-1/2 top-1/2 flex w-full max-w-screen-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-8 text-center text-base-100">
          <h1 className="text-3xl lg:text-5xl 2xl:text-6xl">
            ИЗВИДНИЧКА ПРОГРАМА
          </h1>

          <p className="text-lg">
            Програма за деца и млади базирана на нивните потреби и стремежи
          </p>
        </div>
      </section>

      {/* TODO */}
      {/* BETTER SOLUTION FOR FIXED VALUES */}
      <section className="relative flex h-[420px] items-center justify-end lg:h-[320px]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-lg">
          Програмата за деца и млади во извидништвото е збир на образовни
          можности од кои младите имаат корист (Што), создадени за придонес кон
          постигнување на целта на извидништвото (Зошто), а се искусени преку
          извидничкиот метод (Како).
        </div>

        <Image
          src="/img/zacleni-se/second-section-pattern.svg"
          width={320}
          height={320}
          priority
          alt="Pattern"
          className="hidden lg:block"
        />
      </section>

      <section className="hidden bg-primary bg-programi-up-right py-5 lg:block">
        <div className="flex items-center justify-around">
          <div onClick={onPrev}>
            <Image
              src={"/img/programi/Mask group.png"}
              alt="prev"
              width={50}
              height={50}
            />
          </div>
          {displayedBlogs.map((img, index) => {
            return (
              <Image
                key={index}
                src={img}
                alt="blog"
                width={250}
                height={200}
              />
            );
          })}
          <div onClick={onNext}>
            <Image
              src={"/img/programi/Mask group (1).png"}
              alt="next"
              width={50}
              height={50}
            />
          </div>
        </div>
      </section>

      <section className="mb-3 hidden justify-center lg:flex">
        <Image
          src={"/img/programi/Group 352.png"}
          alt="img"
          width={150}
          height={150}
        />
      </section>

      <section className="mx-auto mt-10 flex w-11/12 max-w-screen-xl flex-col justify-center gap-10">
        <div className="relative flex rounded-lg bg-primary text-base-100">
          <Image
            className="absolute top-0"
            src="/img/programi/info-container-pattern.svg"
            width={402}
            height={414}
            alt="Pattern"
          />

          <div className="z-10 flex w-full flex-col justify-between gap-6 rounded-2xl p-12 text-white lg:w-1/2">
            <h2 className="text-center text-3xl font-semibold">
              <span className="uppercase">Развигорци</span> 7-10 години
            </h2>
            <p className="text-center leading-loose lg:text-left">
              Ја запознаваат природата, учат да ја сакаат и се грижат за неа.
              Учат како да се снајдат во природа и да станат свесни за нејзините
              вредности и опасности. Ги познаваат своите права и обврски и
              развиваат чувство за правда и еднаквост. Го запознаваат,
              почитуваат и соработуваат со светот во кој живеат. Слободно ги
              истражуваат своите мисли и чувства. Се грижат за своето здравје и
              дух. Се снаоѓаат во времето и просторот, креативно истражуваат, ги
              користат основните технички уреди и средства за комуникација. Ја
              ценат својата и културата на другите, го прифаќаат кодексот на
              фино однесување и етиката. Се запознаваат со работата и принципите
              на организацијата, учествувајќи во изградба на својата патрола,
              учејќи да го почитуваат, ценат и сакаат извидништвото, знаејќи ги
              своите права и должности во организацијата
            </p>

            <div className="text-center">
              <Button
                asChild
                rounding="none"
                variant={"secondary-underlined"}
                uppercase
              >
                <Link href="">програма за развигорци</Link>
              </Button>
            </div>
          </div>

          <div className="hidden w-1/2 lg:block">
            <Image
              src={"/img/programi/Rectangle 301.png"}
              alt="img"
              width={847}
              height={1032}
              className="h-full object-cover"
            />
          </div>
        </div>

        <div className="relative flex rounded-lg bg-primary text-base-100">
          <Image
            className="absolute right-0 top-0 -rotate-180"
            src="/img/programi/info-container-pattern.svg"
            width={402}
            height={414}
            alt="Pattern"
          />

          <div className="hidden w-1/2 lg:block">
            <Image
              src={"/img/programi/Rectangle 303.png"}
              alt="img"
              width={847}
              height={1032}
              className="h-full object-cover"
            />
          </div>

          <div className="z-10 flex w-full flex-col justify-between gap-6 rounded-2xl p-12 text-white lg:w-1/2">
            <h2 className="text-center text-3xl font-semibold">
              <span className="uppercase">извидници</span> 11-14 години
            </h2>
            <p className="text-center leading-loose lg:text-left">
              Истражуваат, следат, проценуваат, забележуваат и се снаоѓаат во
              животната средина. Така, учат да живеат во склоп на природата,
              ненарушувајќи ја. Ги прифаќаат граѓанските вредности и ја
              почитуваат својата и културата на другите, со што придонесуваат
              кон развојот на својата средина. Ги познаваат општите правила на
              однесување и комуникација, се усовршуваат со трендовите, го
              разбираат културното и своето духовно наследство, како и на
              другите, а со тоа се развиваат во свесни и одговорни личности, кои
              ги планираат ресурсите и се грижат за здравјето и хигиената. Горди
              се како членови на организацијата и ги ценат нејзините вредности и
              принципи, познавајќи ја структурата на организацијата, своите
              права и должности, нејзината традиција и развојот во земјата и
              светот.
            </p>

            <div className="text-center">
              <Button
                asChild
                rounding="none"
                variant={"secondary-underlined"}
                uppercase
              >
                <Link href="">програма за извидници</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex rounded-lg bg-primary text-base-100">
          <Image
            className="absolute top-0"
            src="/img/programi/info-container-pattern.svg"
            width={402}
            height={414}
            alt="Pattern"
          />

          <div className="z-10 flex w-full flex-col justify-between gap-6 rounded-2xl p-12 text-white lg:w-1/2">
            <h2 className="text-center text-3xl font-semibold">
              <span className="uppercase">ИСТРАЖУВАЧИ</span> 15-17 години
            </h2>
            <p className="text-center leading-loose lg:text-left">
              Кампуваат во природа и рационално ги користат природните
              богатства. Способни се самостојно да преживеат во природа и да се
              снајдат во просторот. Ја почитуваат природната средина, одговорни
              се со истата и тој пристап го пренесуваат на другите. Ги
              почитуваат и разбираат останатите и развиваат универзални човечки
              вредности. Се застапуваат за мир и човекови права, со што
              создаваат свет без предрасуди, стереотипи и сите облици на
              дискриминација. Придонесуваат кон зачувување на традицијата и
              културата. Oдговорни и иновативни личности, со изграден идентитет,
              способни активно да учествуваат во друштвениот живот и да живеат
              во склоп со духовната и социјалната реалност во заедницата. Ја
              познаваат организациската структура и учествуваат во зачувување на
              нејзините вредности, култура и традиција; учествуваат во
              спроведување на програмата, систематско донесување одлуки и
              унапредување на работата; како и размена на искуства со други
              организации внатре во извидничката фамилија, но и надвор од неа,
              чувајќи и застапувајќи ги вредностите на извидништвото.
            </p>

            <div className="text-center">
              <Button
                asChild
                rounding="none"
                variant={"secondary-underlined"}
                uppercase
              >
                <Link href="">програма за истражувачи</Link>
              </Button>
            </div>
          </div>

          <div className="hidden w-1/2 lg:block">
            <Image
              src={"/img/programi/Rectangle 302.png"}
              alt="img"
              width={847}
              height={1032}
              className="h-full object-cover"
            />
          </div>
        </div>

        <div className="relative flex rounded-lg bg-primary text-base-100">
          <Image
            className="absolute right-0 top-0 -rotate-180"
            src="/img/programi/info-container-pattern.svg"
            width={402}
            height={414}
            alt="Pattern"
          />

          <div className="hidden w-1/2 lg:block">
            <Image
              src={
                "/img/programi/307129506_5653441804717661_7339693875923801490_n 1.png"
              }
              alt="img"
              width={847}
              height={1032}
              className="h-full object-cover"
            />
          </div>

          <div className="z-10 flex w-full flex-col justify-between gap-6 rounded-2xl p-12 text-white lg:w-1/2">
            <h2 className="text-center text-3xl font-semibold">
              <span className="uppercase">ровери</span> 18-29 години
            </h2>
            <p className="text-center leading-loose lg:text-left">
              Роверите се организираат во клубови, кои се основните видови на
              организирање и работни групи, преку кои ги реализираат своите
              програмски и друштвени активности. Во клубовите, за полесно
              спроведување на активностите, се формираат секции и групи, кои
              можат да бидат со постојан и привремен карактер, во зависност од
              склоностите на членството и видовите на активности со кои тие
              сакаат да се занимаваат. Клубот делува во рамките на извидничкиот
              одред, во полна синхронизација и координација со работата на
              останатите членови, а повремено можат да се здружат и со другите
              клубови, на сите нивоа во организирање. Клубот има свое име и знак
              или знаме, во склоп со важечките правилници. Роверскиот клуб може
              да биде формиран и од повеќе извидници-ровери од различни
              извиднички одреди, студенти и слично.
            </p>

            <div className="text-center">
              <Button
                asChild
                rounding="none"
                variant={"secondary-underlined"}
                uppercase
              >
                <Link href="">програма за ровери</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex rounded-lg bg-primary text-base-100">
          <Image
            className="absolute top-0"
            src="/img/programi/info-container-pattern.svg"
            width={402}
            height={414}
            alt="Pattern"
          />

          <div className="z-10 flex w-full flex-col justify-between gap-6 rounded-2xl p-12 text-white lg:w-1/2">
            <h2 className="text-center text-3xl font-semibold">
              <span className="uppercase">сениори</span> 29+ години
            </h2>

            <div className="flex flex-col gap-4">
              <p className="text-center leading-loose lg:text-left">
                Дали имате пасија за активности во природа? Дали поддржувате
                здрав и активен начин на живот како основа за подобар животен
                квалитет? Дали верувате дека имате нешто да понудите во
                неформалната едукација на младите? Дали сакате да придонесете во
                развојот на младите во вашата заедница? Дали сакате да создадете
                подобар свет за младите?
              </p>

              <p className="text-center leading-loose lg:text-left">
                Возрасните можат да бидат од клучна важност во насочување на
                младите да изберат правилен пат во својот живот. Возрасните може
                да станат дел од извидничката организација која нуди простор и
                можности за секој возрасен во согласност со слободното време и
                желба да придонесе кон извидништвото. Преку извидничката
                организација, возрасните можат да ја градат својата самодоверба
                и да ги развиваат организациските и лидерски способности.
                Вклученоста на возрасните во извидништвото е секогаш
                добредојдена како на локално така и на национално ниво.
              </p>
            </div>

            <div className="text-center">
              <Button
                asChild
                rounding="none"
                variant={"secondary-underlined"}
                uppercase
              >
                <Link href="">аплицирај како сениор</Link>
              </Button>
            </div>
          </div>

          <div className="hidden w-1/2 lg:block">
            <Image
              src={"/img/programi/Rectangle 304.png"}
              alt="img"
              width={847}
              height={1032}
              className="h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-11/12 max-w-screen-xl flex-col items-center justify-center gap-10 py-20 lg:flex-row">
        <div className="flex w-full flex-col gap-10 lg:w-1/2">
          <h2 className="text-center text-2xl font-semibold uppercase">
            извиднички вештарства
          </h2>

          <p className="leading-loose">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            rerum dolor eveniet enim saepe consequuntur nisi modi quia nobis at
            sunt unde ab odio natus ea animi illum provident sequi voluptatem
            perferendis cupiditate architecto debitis delectus excepturi? Cum
            repellendus placeat, tenetur ex, distinctio saepe fugiat ipsam
            officia incidunt necessitatibus cumque?
          </p>

          <div className="text-center ">
            <Button
              asChild
              variant={"secondary-underlined"}
              rounding="none"
              className="text-black"
              uppercase
            >
              <Link href="/">повеќе за вештарствата</Link>
            </Button>
          </div>
        </div>

        <div className="grid w-full grid-cols-3 flex-wrap gap-10 lg:w-1/2">
          {[...Array(9)].map((_, i) => (
            <Image
              key={i}
              src={`/img/programi/photo-${i + 1}.png`}
              width={270}
              height={270}
              alt=""
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Programi;
