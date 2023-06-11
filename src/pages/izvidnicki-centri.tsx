import React from "react";
import Image from "next/image";

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
        <Image
          src={"/img/izvidnicki-centri/Group 429.png"}
          alt="img"
          width={200}
          height={100}
        />
      </div>

      <div className="flex items-center justify-center bg-primary bg-izvidnicki-centri-map-left bg-no-repeat  py-10">
        <Image
          src={"/img/izvidnicki-centri/Component 1.png"}
          alt="img"
          width={700}
          height={700}
        />
      </div>
      <div className="flex justify-center mb-5">
      <Image
          src={"/img/izvidnicki-centri/Group 352 (1).png"}
          alt="img"
          width={200}
          height={200}
        />
      </div>

      <h2>Полноправни членки</h2>
    </>
  );
};

export default IzvidnickiCentri;
