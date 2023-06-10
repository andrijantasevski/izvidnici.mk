import React, { useState } from "react";
import { motion } from "framer-motion";

type CardData = {
  id: number;
  frontImgSrc: string;
  frontTitle: string;
  frontText: string;
  backImgSrc: string;
  backText: string;
};

const cards: CardData[] = [
  {
    id: 1,
    frontImgSrc: "img/cards/front-1.png",
    frontTitle: "ШТО",
    frontText:
      "Извидничкото движење е доброволно, неполитичко, образовно движење за деца и млади, отворено за сите без разлика на пол, потекло, раса или вера, во согласност со целта, принципите и методот замислени од основачот (Баден Пауел) .",
    backImgSrc: "path/to/backImage1.jpg",
    backText: "Back Card 1",
  },
  {
    id: 2,
    frontImgSrc: "img/cards/front-2.png",
    frontTitle: "КАКО",
    frontText:
      "Преку систем на прогресивно само-образование, со интеракција на елементите од извидничкиот метод. Извидничкиот метод има осум составни елементи, подеднакво важни во образованието на децата и младите, а претставуваат клучен пристап и специфичност за извидништвото наспрема останатите образовни движења / организации.",
    backImgSrc: "path/to/backImage2.jpg",
    backText: "Back Card 2",
  },
  {
    id: 3,
    frontImgSrc: "img/cards/front-3.png",
    frontTitle: "ЗОШТО",
    frontText:
      "Целта на извидничкото движење е да придонесе во развојот на младите во постигнување на нивниот целосен физички, интелектуален, емоционален, социјален и духовен потенцијал како поединци, како одговорни граѓани и како членови на нивнителокални, национални и интернационални заедници. ",
    backImgSrc: "path/to/backImage3.jpg",
    backText: "Back Card 3",
  },
];

const Card: React.FC<CardData> = ({
  frontImgSrc,
  frontTitle,
  frontText,
  backImgSrc,
  backText,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative mx-4 my-4 h-96 w-80" onClick={handleCardClick}>
      <motion.div
        className={`card-front flex flex-col items-center justify-start rounded-[17px] bg-primary pb-4 text-center shadow-lg ${
          isFlipped ? "hidden" : ""
        }`}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={frontImgSrc}
          alt={frontTitle}
          className="mb-2 h-64 w-full rounded-lg object-cover"
        />
        <div className="px-3 py-10">
          <h2 className="text-2xl font-bold text-white">{frontTitle}</h2>
          <hr className="mx-auto my-2 h-[2px] w-2/6 border-0 bg-secondary" />
          <h5 className=" h-64 overflow-hidden text-base text-white">
            {frontText}
            <hr className="mx-auto my-2 h-[2px] w-2/6 border-0 bg-secondary" />
          </h5>
        </div>
      </motion.div>
      <motion.div
        className={`card-back absolute flex flex-col items-center justify-center rounded-lg bg-white p-2 text-center shadow-lg ${
          isFlipped ? "" : "hidden"
        }`}
        initial={{ rotateY: 180 }}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={backImgSrc}
          alt={backText}
          className="mb-2 h-40 w-full object-cover"
        />
        <span className="text-lg">{backText}</span>
      </motion.div>
    </div>
  );
};
const CardGrid: React.FC = () => {
  return (
    <div className=" flex flex-wrap justify-center">
      {cards.map((card) => (
        <Card
          id={card.id}
          key={card.id}
          frontImgSrc={card.frontImgSrc}
          frontTitle={card.frontTitle}
          frontText={card.frontText}
          backImgSrc={card.backImgSrc}
          backText={card.backText}
        />
      ))}
    </div>
  );
};

export default CardGrid;
