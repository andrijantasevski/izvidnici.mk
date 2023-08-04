import React from "react";
import ClenkiAndIzvidnici from "@/components/ClenkiAndIzvidnici/ClenkiAndIzvidnici";
import Head from "next/head";
import HeroBanner from "@/components/common/HeroBanner";
import HeroDescription from "@/components/common/HeroDescription";

const IzvidnickiCentri = () => {
  return (
    <>
      <Head>
        <title>Извиднички центри</title>
      </Head>
      <main>
        <HeroBanner
          title="Извиднички центри и одреди"
          imageSrc="/img/background-images/izvidnicki-centri-hero.png"
          imageAlt="Тим од извидници."
        />

        <HeroDescription
          imageSrc="/img/izvidnicki-centri/izvidnicki-centri-patern.svg"
          imageAlt="Pattern"
          description=" Извидничкото движење во Македонија е распространето во повеќе од 17
          градови во државата, во речиси сите региони. Најди го твојот локален
          извиднички одред / центар тука! "
        />

        <ClenkiAndIzvidnici />
      </main>
    </>
  );
};

export default IzvidnickiCentri;
