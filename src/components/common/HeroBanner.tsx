import Image from "next/image";

type HeroBannerProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  subtitle?: string;
};

export default function HeroBanner({
  title,
  imageSrc,
  imageAlt,
  subtitle,
}: HeroBannerProps) {
  return (
    <>
      <section className="relative">
        <Image
          src={imageSrc}
          width={1920}
          height={536}
          alt={imageAlt}
          className="h-[50vh] w-full object-cover brightness-75 lg:h-[60vh]"
          priority
        />

        <div className="absolute left-1/2 top-1/2 flex w-full max-w-screen-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-8 text-center text-base-100">
          <h1 className="text-5xl uppercase leading-5 2xl:text-6xl">{title}</h1>

          {subtitle && <p className="text-lg">{subtitle}</p>}
        </div>
      </section>
    </>
  );
}
