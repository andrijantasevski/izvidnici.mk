import React from "react";
import { Splide, SplideSlide, Options } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import programmesPDFsParsed from "../../../data/programmes";

const splideOptions: Options = {
  type: "loop",
  perPage: 4,
  gap: "1rem",
  breakpoints: {
    1280: {
      perPage: 3,
    },
    768: {
      perPage: 1,
    },
  },
  pagination: false,
} satisfies Options;

export default function ProgrammesSlider() {
  return (
    <section className="bg-primary bg-programi-up-right py-10">
      <div className="mx-auto w-11/12 max-w-screen-2xl">
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
                  // TODO
                  // MORE DESCRIPTIVE ALT
                  alt={`Programme ${programme.id}`}
                  className="mx-auto h-auto w-64 cursor-pointer rounded-md object-cover shadow-lg transition-shadow hover:shadow-xl md:h-full md:w-full"
                />
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
