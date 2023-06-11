import React from 'react';
import Image from 'next/image';
import ClenkiAndIzvidnici from '@/components/ClenkiAndIzvidnici/ClenkiAndIzvidnici';

const IzvidnickiCentri = () => {
  return (
    <>
      <section className="relative">
        <Image
          src="/img/background-images/izvidnicki-centri-hero.png"
          width={1920}
          height={536}
          alt="Тим од извидници."
          className="h-[50vh] w-full object-cover brightness-90 lg:h-[60vh]"
          priority
        />

        <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-5xl text-base-100 2xl:text-6xl">
          Извиднички центри и одреди
        </h1>
      </section>
      <div className="flex">
        <p className="px-24 py-10 text-center">
          Извидничкото движење во Македонија е распострането во повеќе од 17
          градови во државата, во речиси сите региони. Најди го твојот локален
          извиднички одред/центар тука!
        </p>
      </div>
      <ClenkiAndIzvidnici />
    </>
  );
};

export default IzvidnickiCentri;
