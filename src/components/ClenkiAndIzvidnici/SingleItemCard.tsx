import React from "react";
import { PolnoPravniClenkiInterface } from "../Map/MapData";
import Image from "next/image";

const SingleItemCard = ({
  title,
  city,
  number,
  email,
  imgUrl,
}: PolnoPravniClenkiInterface) => {
  return (
    <div className="card-container mx-auto my-10 flex justify-between rounded-md border-2 border-secondary bg-primary p-6">
      <div className="w-3/4">
        <p className="mb-5 font-semibold text-slate-50">{title}</p>
        <ul className="flex flex-col gap-2">
          <li className="text-slate-50">Град: {city}</li>
          <li className="text-slate-50">Телефон: {number}</li>
          <li className="text-slate-50">E-mail: {email}</li>
        </ul>
      </div>
      {imgUrl && (
        <div className=" align-center flex w-auto content-center items-center">
          <Image
            alt="Image"
            src={imgUrl}
            className="rounded-md"
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default SingleItemCard;
