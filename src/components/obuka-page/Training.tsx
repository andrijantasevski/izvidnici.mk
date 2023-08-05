import React from "react";
import Image from "next/image";
import { TrainingSchema } from "../../../data/training";

export type TrainingComponentProps = {
  training: TrainingSchema;
};

export default function Training({ training }: TrainingComponentProps) {
  return (
    <section
      className="relative py-10"
      style={{ backgroundColor: training.backgroundColor }}
    >
      <div className="absolute bottom-0 left-0 hidden md:block">
        <Image
          // TODO
          // INCLUDE IMAGE FROM DIFF FOLDER
          src="./img/cards/svg/svg-cards.svg"
          width={474}
          height={490}
          className="z-0 w-full object-cover"
          // TODO
          // IMPROVE ALT DESC
          alt="image svg"
        />
      </div>

      <div className="absolute bottom-0 right-0 hidden md:block">
        <Image
          // TODO
          // INCLUDE IMAGE FROM DIFF FOLDER
          src="./img/cards/svg/back-card.svg"
          width={474}
          height={490}
          className="z-0 w-full object-cover"
          // TODO
          // IMPROVE ALT DESC
          alt="image svg"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-11/12 max-w-screen-xl flex-col gap-10">
        <div className="flex flex-col gap-4 rounded-3xl border border-base-100 p-8 text-white">
          <h2 className="text-xl font-semibold uppercase">што се изучува</h2>

          <div className="flex items-baseline gap-4">
            <div className="h-2 w-2 shrink-0 rounded-full bg-base-100" />
            <p>{training.whatWeLearn}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-40">
          <div className="relative flex w-full flex-col justify-start gap-4 rounded-3xl border border-base-100 p-8 text-base-100 lg:w-5/12">
            <h2 className="text-xl font-semibold uppercase">
              за кого е наменета
            </h2>

            <div className="flex items-baseline gap-4">
              <div className="h-2 w-2 shrink-0 rounded-full bg-base-100" />

              <ul className="flex flex-col gap-2">
                {training.forWhom.map((trainingForWhom) => (
                  <li key={trainingForWhom.id}>
                    {trainingForWhom.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 self-center text-white lg:w-2/12">
            <Image
              src={training.typeOfTrainingImageSrc}
              // TODO
              // IMPROVE ALT DESC
              alt="SVG Icon"
              width={348}
              height={320}
            />
            <p className="text-center text-xl font-semibold uppercase">
              {training.typeOfTraining}
            </p>
          </div>

          <div className="z-10 flex w-full flex-col justify-center gap-4 rounded-3xl border border-base-100 p-8 text-base-100 lg:w-5/12">
            <h2 className="text-xl font-semibold uppercase">
              како се освојува
            </h2>

            <div className="flex items-baseline gap-4">
              <ul className="flex flex-col gap-2">
                {training.howItIsAcquired.map((howItIsAcquiredSingle) => (
                  <li
                    key={howItIsAcquiredSingle.id}
                    className="flex items-baseline gap-4"
                  >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-base-100" />
                    <span>{howItIsAcquiredSingle.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
