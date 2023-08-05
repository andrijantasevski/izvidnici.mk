import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import programmesPDFsParsed from "../../../data/programmes";

export default function ProgrammesSlider() {
  const splideOptions = {
    type: "loop",
    perPage: 4,
    gap: "2rem",
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
    pagination: false,
  };

  const handleImageClick = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <section className="bg-primary bg-programi-up-right py-10">
      <div className="container mx-auto">
        <Splide options={splideOptions}>
          {programmesPDFsParsed.map((programme) => (
            <SplideSlide key={programme.id}>
              <img
                src={programme.pdfImageSrc}
                alt={`Programme ${programme.id}`}
                className="mx-auto h-auto w-56 cursor-pointer rounded-md shadow-lg transition-shadow hover:shadow-xl"
                onClick={() => handleImageClick(programme.pdfUrl)}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
