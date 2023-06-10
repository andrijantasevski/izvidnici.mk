import React, { useState } from "react";
import { motion } from "framer-motion";

type CardData = {
  id: number;
  frontImgSrc: string;
  frontTitle: string;
  frontText: string;
  backImgSrc: string;
  backTitle: string;
  backText: string;
};

const cards: CardData[] = [
  {
    id: 1,
    frontImgSrc: "img/cards/front-1.png",
    frontTitle: "ШТО",
    frontText:
      "Извидничкото движење е доброволно, неполитичко, образовно движење за деца и млади, отворено за сите без разлика на пол, потекло, раса или вера, во согласност со целта, принципите и методот замислени од основачот (Баден Пауел) .",
    backImgSrc: "img/cards/front-1.png",
    backTitle: "ШТО",
    backText:
      "Мисијата на извидништвото е да придонесе во образованието на младите, преку систем на вредности заснован на извидничкиот завет и закони, да помогне во изградба на подобар свет во кој луѓето се остварени како поединци и имаат конструктивна улога во општеството.",
  },
  {
    id: 2,
    frontImgSrc: "img/cards/front-2.png",
    frontTitle: "КАКО",
    frontText:
      "Преку систем на прогресивно само-образование, со интеракција на елементите од извидничкиот метод. Извидничкиот метод има осум составни елементи, подеднакво важни во образованието на децата и младите, а претставуваат клучен пристап и специфичност за извидништвото наспрема останатите образовни движења / организации.",
    backImgSrc: "img/cards/back-2.png",
    backTitle: "КАКО",
    backText:
      "Преку систем на прогресивно само-образование, со интеракција на елементите од извидничкиот метод. Извидничкиот метод има осум составни елементи, подеднакво важни во образованието на децата и младите, а претставуваат клучен пристап и специфичност за извидништвото наспрема останатите образовни движења / организации.",
  },
  {
    id: 3,
    frontImgSrc: "img/cards/front-3.png",
    frontTitle: "ЗОШТО",
    frontText:
      "Целта на извидничкото движење е да придонесе во развојот на младите во постигнување на нивниот целосен физички, интелектуален, емоционален, социјален и духовен потенцијал како поединци, како одговорни граѓани и како членови на нивнителокални, национални и интернационални заедници. ",
    backImgSrc: "img/cards/front-3.png",
    backTitle: "ЗОШТО",
    backText:
      " Извидничката програма која ја уживаат децата, младите и возрасните волонтери се заснова на три широки принципи кои ги претставуваат основните верувања на движењето.Обврска кон себе - Развој на личниот целосен потенцијал, односно достигнување на потполните физички, интелектуални, општествени и духовни можности како поединец",
  },
];

interface CardProps {
  cardData: CardData;
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  const {
    id,
    frontImgSrc,
    frontTitle,
    frontText,
    backImgSrc,
    backTitle,
    backText,
  } = cardData;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div
        className="mx-4 my-4 flex w-full flex-col items-center justify-start md:w-80"
        onClick={handleCardClick}
      >
        <motion.div
          className={`relative flex flex-col items-center justify-start rounded-[17px] bg-primary pb-4 text-center shadow-lg ${
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
          <motion.div className="z-50 px-3 py-10">
            <h2 className="text-2xl font-bold text-white">{frontTitle}</h2>
            <hr className="mx-auto my-2 h-[2px] w-2/6 border-0 bg-secondary" />
            <h5 className="h-64 overflow-hidden text-base text-white">
              {frontText}
            </h5>
            <hr className="mx-auto my-2 h-[2px] w-2/6 border-0 bg-secondary" />
          </motion.div>
          <motion.div className="absolute bottom-0 left-0">
            <motion.img
              src="./img/cards/svg/svg-cards.svg"
              alt={frontTitle}
              className="z-0 h-44 w-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className={`relative flex flex-col items-center justify-start rounded-[17px] bg-primary pb-4 text-center shadow-lg ${
            isFlipped ? "" : "hidden"
          }`}
          initial={{ rotateY: 180 }}
          animate={{ rotateY: isFlipped ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={backImgSrc}
            alt={backText}
            className="mb-2 h-64 w-full rounded-lg object-cover"
          />
          <motion.div className="z-50 px-3 py-10">
            <h2 className="text-2xl font-bold text-white">{backTitle}</h2>
            <hr className="mx-auto my-2 h-[2px] w-2/6 border-0 bg-secondary" />
            <h5 className="h-64 overflow-hidden text-base text-white">
              {backText}
            </h5>
            <hr className="mx-auto my-2 h-[2px] w-2/6 border-0 bg-secondary" />
          </motion.div>
          <motion.div className="absolute bottom-0 right-0">
            <motion.img
              src="./img/cards/svg/back-card.svg"
              alt={frontTitle}
              className="z-0 h-44 w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

const CardGrid: React.FC = () => {
  return (
    <div className=" flex flex-wrap justify-center">
      {cards.map((card) => (
        <Card key={card.id} cardData={card} />
      ))}
    </div>
  );
};

export default CardGrid;
