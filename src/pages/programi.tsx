import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Head from "next/head";
import HeroBanner from "@/components/common/HeroBanner";
import HeroDescription from "@/components/common/HeroDescription";
import ProgrammesSlider from "@/components/programmes/ProgrammesSlider";
import Programme from "@/components/programmes/Programme";
import { programmesParsed } from "../../data/programmes";

export default function Programi() {
  return (
    <>
      <Head>
        <title>Програми</title>
      </Head>

      <HeroBanner
        title=" ИЗВИДНИЧКА ПРОГРАМА"
        subtitle=" Програма за деца и млади базирана на нивните потреби и стремежи"
        imageSrc="/img/background-images/programi-hero.png"
        imageAlt="Два извидника покажуваат знак со нивните раце."
      />

      <HeroDescription
        imageSrc="/img/zacleni-se/second-section-pattern.svg"
        imageAlt="Pattern"
        description="Програмата за деца и млади во извидништвото е збир на образовни
  можности од кои младите имаат корист (Што), создадени за придонес кон
  постигнување на целта на извидништвото (Зошто), а се искусени преку
  извидничкиот метод (Како)."
      />

      <ProgrammesSlider />

      <section className="mx-auto mt-10 flex w-11/12 max-w-screen-xl flex-col justify-center gap-10">
        {programmesParsed.map((programme, idx) => (
          <Programme
            key={programme.id}
            programme={programme}
            direction={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
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
}
