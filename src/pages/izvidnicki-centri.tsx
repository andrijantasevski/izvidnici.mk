import React from 'react';
import Image from 'next/image';
import ClenkiAndIzvidnici from '@/components/ClenkiAndIzvidnici/ClenkiAndIzvidnici';

const IzvidnickiCentri = () => {
  return (
    <>
      <div className="bg-izvidnicki-centri-hero bg-contain bg-no-repeat text-center text-white ">
        <div className="flex h-96 flex-col items-center justify-center">
          <h1 className="pb-3 text-3xl font-semibold ">
            ИЗВИДНИЧКИ ЦЕНТРИ И ОДРЕДИ
          </h1>
        </div>
      </div>
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
