import React from "react";
import Image from "next/image";
import ClenkiAndIzvidnici from "@/components/ClenkiAndIzvidnici/ClenkiAndIzvidnici";
import Head from "next/head";

const IzvidnickiCentri = () => {
  return (
    <>
      <Head>
        <title>Извиднички центри</title>
      </Head>
      <main>
        <section className="relative">
          <Image
            src="/img/background-images/izvidnicki-centri-hero.png"
            width={1920}
            height={536}
            alt="Тим од извидници."
            className="h-[50vh] w-full object-cover brightness-75 lg:h-[60vh]"
            priority
          />

          <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-5xl text-base-100 2xl:text-6xl">
            Извиднички центри и одреди
          </h1>
        </section>

        <section className="relative flex h-[279px] items-center justify-end">
          <div className="absolute left-1/2 top-1/2 w-11/12 max-w-2xl -translate-x-1/2 -translate-y-1/2 text-center text-lg">
            Извидничкото движење во Македонија е распространето во повеќе од 17
            градови во државата, во речиси сите региони. Најди го твојот локален
            извиднички одред / центар тука! 
          </div>

          <Image
            src="/img/izvidnicki-centri/pattern-izvidnicki-centri.svg"
            width={286}
            height={280.11}
            priority
            alt="Pattern"
            className="hidden lg:block"
          />
        </section>

        <ClenkiAndIzvidnici />
      </main>
    </>
  );
};

export default IzvidnickiCentri;
