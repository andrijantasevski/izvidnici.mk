import React, { useEffect, useState } from "react";
import {
  PolnoPravniClenkiData,
  PridruzniClenkiData,
  PolnoPravniClenkiInterface,
} from "../Map/MapData";
import SingleItemCard from "./SingleItemCard";
import Map from "../Map/Map";
import Image from "next/image";

const ClenkiAndIzvidnici = () => {
  const [PolnoPravniClenki, setPolnoPravniClenki] = useState<
    PolnoPravniClenkiInterface[]
  >([]);
  const [PridruzniPravniClenki, setPridruzniPravniClenki] = useState<
    PolnoPravniClenkiInterface[]
  >([]);
  const [filteredPolnoPravniClenki, setFilteredPolnoPravniClenki] = useState<
    PolnoPravniClenkiInterface[]
  >([]);
  const [filteredPridruzniPravniClenki, setFilteredPridruzniPravniClenki] =
    useState<PolnoPravniClenkiInterface[]>([]);

  const HandleOnCityClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const city = e.currentTarget.getAttribute("title");

    if (city) {
      const filteredPolnoPravniClenki = PolnoPravniClenki.filter(
        (item) => item.city == city
      );
      const filteredPridruzniPravniClenki = PridruzniPravniClenki.filter(
        (item) => item.city == city
      );

      setFilteredPolnoPravniClenki(filteredPolnoPravniClenki);
      setFilteredPridruzniPravniClenki(filteredPridruzniPravniClenki);
    }
  };

  useEffect(() => {
    setPolnoPravniClenki(PolnoPravniClenkiData);
    setPridruzniPravniClenki(PridruzniClenkiData);
  }, []);

  useEffect(() => {
    setFilteredPolnoPravniClenki(PolnoPravniClenki);
    setFilteredPridruzniPravniClenki(PridruzniPravniClenki);
  }, [PolnoPravniClenki, PridruzniPravniClenki]);

  return (
    <div className="w-full">
      <Map HandleOnCityClick={HandleOnCityClick} />
      <div className="flex items-center justify-center">
        <Image
          src="/img/programi/Group 352.png"
          width={266}
          height={136}
          alt=""
        />
      </div>
      <div className="mx-auto w-11/12 max-w-screen-xl pb-10">
        <h1 className="my-10 text-left text-2xl font-bold">
          Полноправни членки
        </h1>

        {filteredPolnoPravniClenki.length !== 0 ? (
          filteredPolnoPravniClenki.map((item, index) => (
            <SingleItemCard
              key={index}
              title={item.title}
              city={item.city}
              number={item.number}
              email={item.email}
              imgUrl={item.imgUrl}
            />
          ))
        ) : (
          <p className="text-center font-semibold">
            Филтрираните членки што ги пребарувате не постојат
          </p>
        )}
        <h1 className="my-10 text-center text-xl font-bold">
          Придружни членки
        </h1>
        <div className="card-content">
          {filteredPridruzniPravniClenki.length !== 0 ? (
            filteredPridruzniPravniClenki.map((item, index) => (
              <SingleItemCard
                key={index}
                title={item.title}
                city={item.city}
                number={item.number}
                email={item.email}
                imgUrl={item.imgUrl}
              />
            ))
          ) : (
            <p className="text-center font-semibold">
              Филтрираните членки што ги пребарувате не постојат
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClenkiAndIzvidnici;
