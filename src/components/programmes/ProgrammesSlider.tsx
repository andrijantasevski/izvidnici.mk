import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import programmesPDFsParsed from "../../../data/programmes";

export default function ProgrammesSlider() {
  const splideOptions = {
    type: "loop",
    perPage: 4,

    breakpoints: {
      768: {
        perPage: 1,
      },
    },
    pagination: false,
    // autoWidth: true,
  };

  return (
    <section className="bg-primary bg-programi-up-right py-10">
      <div className="container mx-auto">
        <Splide options={splideOptions}>
          {programmesPDFsParsed.map((programme) => (
            <SplideSlide key={programme.id}>
              <a href="/">
                <img
                  src={programme.pdfImageSrc}
                  alt={`Programme ${programme.id}`}
                  className="mx-auto h-auto w-56 rounded-md object-fill shadow-lg transition-shadow hover:shadow-xl"
                />
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
