import Image from "next/image";

type HeaderSectionProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  subtitle?: string;
  optionalImageSrc?: string;
  optionalImageAlt?: string;
  optionalText?: string;
};

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  imageSrc,
  imageAlt,
  subtitle,
  optionalImageSrc,
  optionalImageAlt,
  optionalText,
}) => {
  return (
    <>
      <section className="relative">
        <Image
          src={imageSrc}
          width={1920}
          height={536}
          alt={imageAlt}
          className="h-[60vh] w-full object-cover brightness-90 lg:h-[60vh]"
          priority
        />

        <div className="absolute left-1/2 top-1/2 flex w-full max-w-screen-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-8 text-center text-base-100">
          <h1 className="text-2xl lg:text-5xl 2xl:text-6xl uppercase"  style={{ lineHeight: "1.2" }}>{title}</h1>

          <p className="text-lg">{subtitle}</p>
        </div>
      </section>
      <section className="relative my-10 flex md:h-[300px] w-full  items-center justify-center md:my-0">
        <div className="mx-auto w-11/12 max-w-screen-xl text-center text-lg md:w-7/12">
          {optionalText}
        </div>
        <div className="absolute right-0 hidden lg:block">
        {optionalImageSrc && optionalImageAlt && (
            <Image
              src={optionalImageSrc}
              width={300}
              height={300}
              priority
              alt={optionalImageAlt as string}
              className="bg-blend-darken"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default HeaderSection;
