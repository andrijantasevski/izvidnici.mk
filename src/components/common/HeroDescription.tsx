import Image from "next/image";

type HeroDescriptionProps = {
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function HeroDescription({
  description,
  imageAlt,
  imageSrc,
}: HeroDescriptionProps) {
  return (
    <section className="relative my-10 flex w-full items-center  justify-center md:my-0 md:h-[300px]">
      <div className="mx-auto w-11/12 max-w-screen-xl text-center text-lg md:w-7/12">
        {description}
      </div>

      <div className="absolute right-0 hidden lg:block">
        <Image
          src={imageSrc}
          width={300}
          height={300}
          priority
          alt={imageAlt}
          className="bg-blend-darken"
        />
      </div>
    </section>
  );
}
