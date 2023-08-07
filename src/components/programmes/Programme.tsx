import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { ProgrammeSchema } from "../../../data/programmes";

type ProgrammeProps = {
  programme: ProgrammeSchema;
  direction: "left" | "right";
};

export default function Programme({ programme, direction }: ProgrammeProps) {
  return (
    <div
      className={`relative flex rounded-lg bg-primary text-base-100 ${
        direction === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <Image
        className={`absolute ${
          direction === "left" ? "top-0" : "right-0 top-0 -rotate-180"
        }`}
        src="/img/programi/info-container-pattern.svg"
        width={402}
        height={414}
        alt="Pattern"
      />

      <div className="z-10 flex w-full flex-col justify-between gap-6 rounded-2xl p-12 text-white lg:w-1/2">
        <h2 className="text-center text-3xl font-semibold">
          <span className="uppercase">
            {programme.scoutCategory.macedonian}
          </span>{" "}
          {programme.minimumAge}
          {programme.maximumAge ? (
            <span>-{programme.maximumAge} години</span>
          ) : (
            <span>+ години</span>
          )}
        </h2>

        <div className="flex flex-col gap-4">
          {programme.description.map((descriptionText, idx) => (
            <p key={idx} className="text-center leading-loose lg:text-left">
              {descriptionText}
            </p>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            rounding="none"
            variant={"secondary-underlined"}
            uppercase
          >
            <Link href={`/programi/${programme.scoutCategory.macedonianLatin}`}>
              програма за {programme.scoutCategory.macedonian}
            </Link>
          </Button>
        </div>
      </div>

      <div className="hidden w-1/2 lg:block">
        <Image
          src={programme.imageSrc}
          alt="img"
          width={847}
          height={1032}
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}
