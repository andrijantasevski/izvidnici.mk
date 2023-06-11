import React from 'react';
import { PolnoPravniClenkiInterface } from '../Map/MapData';
const SingleItemCard = ({
  title,
  city,
  number,
  email,
}: PolnoPravniClenkiInterface) => {
  return (
    <div className="card-container mx-auto my-10 w-9/12 rounded-lg bg-emerald-950	p-5">
      <p className="mb-5 ml-10 font-semibold text-slate-50">{title}</p>
      <ul>
        <li className="text-slate-50">Град: {city}</li>
        <li className="text-slate-50">Телефон: {number}</li>
        <li className="text-slate-50">E-mail: {email}</li>
      </ul>
    </div>
  );
};

export default SingleItemCard;
