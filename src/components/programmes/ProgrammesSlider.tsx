import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import programmesPDFsParsed from "../../../data/programmes";

export default function ProgrammesSlider() {
  const splideOptions = {
    type: "loop",
    perPage: 4,
    gap: "1rem",
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
    pagination: false,
  };

  return (
    <section className="bg-primary bg-programi-up-right py-10">
      <div className="container mx-auto">
        <Splide options={splideOptions}>
          {programmesPDFsParsed.map((programme) => (
            <SplideSlide
              key={programme.id}
              className="md:px-12 lg:px-14 xl:px-16"
            >
              <a
                href={programme.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={programme.pdfImageSrc}
                  alt={`Programme ${programme.id}`}
                  //TODO check the sizes of images on mobile
                  className="mx-auto  h-auto w-64 cursor-pointer rounded-md object-cover shadow-lg transition-shadow hover:shadow-xl md:h-full md:w-full"
                />
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
