import React from "react";
import Image from "next/image";
import ClenkiAndIzvidnici from "@/components/ClenkiAndIzvidnici/ClenkiAndIzvidnici";
import Head from "next/head";
import HeaderSection from "@/components/header/Header";

const IzvidnickiCentri = () => {
  return (
    <>
      <Head>
        <title>Извиднички центри</title>
      </Head>
      <main>
      <HeaderSection
          title="Извиднички центри и одреди"
          imageSrc="/img/background-images/izvidnicki-centri-hero.png"
          imageAlt="Тим од извидници."
          optionalImageSrc="/img/izvidnicki-centri/izvidnicki-centri-patern.svg"
          optionalImageAlt="Pattern"
          optionalText=" Извидничкото движење во Македонија е распространето во повеќе од 17
          градови во државата, во речиси сите региони. Најди го твојот локален
          извиднички одред / центар тука! "
        />
       

        <ClenkiAndIzvidnici />
      </main>
    </>
  );
};

export default IzvidnickiCentri;
