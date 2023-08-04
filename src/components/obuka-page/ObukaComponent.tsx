import React from "react";
import Image from "next/image";
import { TrainingSchema } from "../../../data/training";

type Training = {
  /** A background color for the section. It has to be in the format of: bg-[#HEX] */
  backgroundColor: `bg-[${string}]`;

  /** What is learnt with the training. */
  whatWeLearn: string;

  /** For whom is the training intended. */
  forWhom: { id: number; description: string }[];

  /** How can the skills be acquired. */
  howItIsAcquired: { id: number; description: string }[];

  /** Type of training, e.g. Обука за обучувачи. */
  typeOfTraining: string;

  /** Image for the type of training. It should be provided as svg. */
  typeOfTrainingImageSrc: `${string}.svg`;
};

export type TrainingComponentProps = {
  training: TrainingSchema;
};

export default function TrainingComponent({
  training,
}: TrainingComponentProps) {
  return (
    <section className={`relative ${training.backgroundColor}`}>
      <div className="absolute bottom-0 right-0 hidden md:block">
        <Image
          src="./img/cards/svg/back-card.svg"
          width={474}
          height={490}
          className="z-0 w-full object-cover"
          // TODO
          // IMPROVE ALT DESC
          alt="image svg"
        />
      </div>

      <div className="absolute bottom-0 left-0 hidden md:block">
        <Image
          src="./img/cards/svg/svg-cards.svg"
          width={474}
          height={490}
          className="z-0 w-full object-cover"
          // TODO
          // IMPROVE ALT DESC
          alt="image svg"
        />
      </div>

      <div className="py-10">
        <div className=" relative mx-auto w-10/12 max-w-screen-xl rounded-3xl border border-base-100 px-7 py-10 text-white">
          <div className="ml-7">
            <h2 className="mb-4 text-xl font-semibold uppercase">
              што се изучува
            </h2>
          </div>

          <div className="flex gap-5">
            <div className=" mt-2 h-2 w-2 rounded-full bg-white md:block"></div>
            <div className=" w-11/12">
              <p>{training.whatWeLearn}</p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid w-10/12 max-w-screen-xl gap-10 py-10 md:grid-cols-3 md:gap-40">
          <div className="relative z-40 mx-auto flex w-11/12  flex-col justify-center space-y-10 rounded-3xl border border-base-100 px-7 py-4 text-white ">
            <div className="ml-4">
              <h2 className="mb-4 text-xl font-semibold uppercase">
                за кого е наменета
              </h2>
            </div>

            <div className="flex gap-5">
              <div className="mt-2 h-2 w-2 rounded-full bg-white md:block"></div>
              <div className="w-11/12">
                {training.forWhom.map((trainingForWhom) => (
                  <p key={trainingForWhom.id}>{trainingForWhom.description}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="z-40 flex flex-col items-center justify-between  rounded-3xl px-4 py-4 text-white">
            <Image
              src={training.typeOfTrainingImageSrc}
              alt="SVG Icon"
              width={348}
              height={320}
            />
            <p className="mt-5 text-center text-xl font-semibold uppercase">
              {training.typeOfTraining}
            </p>
          </div>
          <div className=" relative mx-auto flex w-11/12 flex-col justify-center space-y-10 rounded-3xl border border-base-100 px-7 py-4 text-white">
            <div className="ml-4">
              <h2 className="mb-4 text-xl font-semibold uppercase">
                како се освојува
              </h2>
            </div>

            <ul className="flex flex-col gap-5">
              {training.howItIsAcquired.map((howItIsAcquiredSingle) => (
                <li key={howItIsAcquiredSingle.id}>
                  {howItIsAcquiredSingle.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
