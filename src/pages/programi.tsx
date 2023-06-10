import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Programi = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const images = [
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
    "/img/programi/image 173.png",
    "/img/programi/image 173.png",
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
    "/img/programi/image 172.png",
    "/img/programi/image 172.png",
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
    "/img/programi/image 172.png",
    "/img/programi/image 173.png",
  ];

  const onNext = () => {
    if (currentCard + 4 < images.length) {
      setCurrentCard(currentCard + 4);
    } else {
      setCurrentCard(0);
    }
  };

  const onPrev = () => {
    if (currentCard - 4 >= 0) {
      setCurrentCard(currentCard - 4);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentCard + 4 < images.length) {
        setCurrentCard(currentCard + 4);
      } else {
        setCurrentCard(0);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentCard, images.length]);

  const displayedBlogs = images.slice(currentCard, currentCard + 4);

  return (
    <>
      <div className="bg-programi-hero bg-contain bg-no-repeat text-center text-white ">
        <div className="flex h-96 flex-col items-center justify-center">
          <h1 className="pb-3 text-3xl font-semibold ">ИЗВИДНИЧКА ПРОГРАМА</h1>
          <p>Програма за деца и млади базирана на нивните потреби и стремежи</p>
        </div>
      </div>

      <div className="px-52 py-14 text-center">
        <p>
          Програмата за деца и млади во извидништвото е збир на образовни
          можности од кои младите имаат корист (Што), создадени за придонес кон
          постигнување на целта на извидништвото (Зошто), а се искусени преку
          извидничкиот метод (Како).
        </p>
      </div>

      <div className="bg-primary bg-programi-up-right py-5">
        <div className="flex items-center justify-around">
          <div onClick={onPrev}>
            <Image
              src={"/img/programi/Mask group.png"}
              alt="prev"
              width={50}
              height={50}
            />
          </div>
          {displayedBlogs.map((img, index) => {
            return (
              <Image
                key={index}
                src={img}
                alt="blog"
                width={250}
                height={200}
              />
            );
          })}
          <div onClick={onNext}>
            <Image
              src={"/img/programi/Mask group (1).png"}
              alt="next"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="mb-3 flex justify-center">
        <Image
          src={"/img/programi/Group 352.png"}
          alt="img"
          width={150}
          height={150}
        />
      </div>

      <div className="my-10 flex justify-center">
        <div className="-mr-10 w-1/2 rounded-2xl bg-primary text-white">
          <h2 className="pb-10 pt-20 text-center font-semibold">
            РАЗВИГОРЦИ 7-10 години
          </h2>
          <p className="px-20">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            officia, incidunt tempore perferendis, totam recusandae ea
            voluptatum nostrum rerum sed provident fugiat sunt exercitationem
            saepe iure temporibus fugit accusantium velit enim reiciendis?
            Recusandae velit placeat molestias omnis nihil officiis illum. Porro
            voluptates minima sunt numquam rem ipsam, magnam voluptatem ut
            deserunt consequuntur dicta aut incidunt saepe, laudantium
            laboriosam placeat at suscipit eveniet ea quisquam, commodi
            praesentium! Tempore voluptatem pariatur, reprehenderit iste
            voluptatum ad praesentium quod excepturi officiis porro, blanditiis
            perferendis. Illum animi odio asperiores consequuntur ea
            necessitatibus nesciunt magnam numquam officia reprehenderit maxime,
            velit cumque delectus natus odit ad rerum.
          </p>
          <div className="py-10 text-center">
            <Button variant={"secondary-underlined"}>
              ПРОГРАМА ЗА РАЗВИГОРЦИ
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={"/img/programi/Rectangle 301.png"}
            alt="img"
            width={847}
            height={1032}
          />
        </div>
      </div>

      <div className="my-10 flex justify-center">
        <div className="w-1/2">
          <Image
            src={"/img/programi/Rectangle 303.png"}
            alt="img"
            width={847}
            height={1032}
          />
        </div>
        <div className="-ml-10 w-1/2 rounded-2xl bg-primary text-white">
          <h2 className="pb-10 pt-20 text-center font-semibold">
            ИЗВИДНИЦИ 11-14 години
          </h2>
          <p className="px-20">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            officia, incidunt tempore perferendis, totam recusandae ea
            voluptatum nostrum rerum sed provident fugiat sunt exercitationem
            saepe iure temporibus fugit accusantium velit enim reiciendis?
            Recusandae velit placeat molestias omnis nihil officiis illum. Porro
            voluptates minima sunt numquam rem ipsam, magnam voluptatem ut
            deserunt consequuntur dicta aut incidunt saepe, laudantium
            laboriosam placeat at suscipit eveniet ea quisquam, commodi
            praesentium! Tempore voluptatem pariatur, reprehenderit iste
            voluptatum ad praesentium quod excepturi officiis porro, blanditiis
            perferendis. Illum animi odio asperiores consequuntur ea
            necessitatibus nesciunt magnam numquam officia reprehenderit maxime,
            velit cumque delectus natus odit ad rerum.
          </p>
          <div className="py-10 text-center">
            <Button variant={"secondary-underlined"}>
              ПРОГРАМА ЗА ИЗВИДНИЦИ
            </Button>
          </div>
        </div>
      </div>

      <div className="my-10 flex justify-center">
        <div className="-mr-10 w-1/2 rounded-2xl bg-primary text-white">
          <h2 className="pb-10 pt-20 text-center font-semibold">
            ИСТРАЖУВАЧИ 15-17 години
          </h2>
          <p className="px-20">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            officia, incidunt tempore perferendis, totam recusandae ea
            voluptatum nostrum rerum sed provident fugiat sunt exercitationem
            saepe iure temporibus fugit accusantium velit enim reiciendis?
            Recusandae velit placeat molestias omnis nihil officiis illum. Porro
            voluptates minima sunt numquam rem ipsam, magnam voluptatem ut
            deserunt consequuntur dicta aut incidunt saepe, laudantium
            laboriosam placeat at suscipit eveniet ea quisquam, commodi
            praesentium! Tempore voluptatem pariatur, reprehenderit iste
            voluptatum ad praesentium quod excepturi officiis porro, blanditiis
            perferendis. Illum animi odio asperiores consequuntur ea
            necessitatibus nesciunt magnam numquam officia reprehenderit maxime,
            velit cumque delectus natus odit ad rerum.
          </p>
          <div className="py-10 text-center">
            <Button variant={"secondary-underlined"}>
              ПРОГРАМА ЗА ИСТРАЖУВАЧИ
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={"/img/programi/Rectangle 302.png"}
            alt="img"
            width={847}
            height={1032}
          />
        </div>
      </div>

      <div className="my-10 flex justify-center">
        <div className="w-1/2">
          <Image
            src={
              "/img/programi/307129506_5653441804717661_7339693875923801490_n 1.png"
            }
            alt="img"
            width={847}
            height={1032}
          />
        </div>
        <div className="-ml-10 w-1/2 rounded-2xl bg-primary text-white">
          <h2 className="pb-10 pt-20 text-center font-semibold">
            РОВЕРИ 18-29 години
          </h2>
          <p className="px-20">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            officia, incidunt tempore perferendis, totam recusandae ea
            voluptatum nostrum rerum sed provident fugiat sunt exercitationem
            saepe iure temporibus fugit accusantium velit enim reiciendis?
            Recusandae velit placeat molestias omnis nihil officiis illum. Porro
            voluptates minima sunt numquam rem ipsam, magnam voluptatem ut
            deserunt consequuntur dicta aut incidunt saepe, laudantium
            laboriosam placeat at suscipit eveniet ea quisquam, commodi
            praesentium! Tempore voluptatem pariatur, reprehenderit iste
            voluptatum ad praesentium quod excepturi officiis porro, blanditiis
            perferendis. Illum animi odio asperiores consequuntur ea
            necessitatibus nesciunt magnam numquam officia reprehenderit maxime,
            velit cumque delectus natus odit ad rerum.
          </p>
          <div className="py-10 text-center">
            <Button variant={"secondary-underlined"}>ПРОГРАМА ЗА РОВЕРИ</Button>
          </div>
        </div>
      </div>

      <div className="my-10 flex justify-center">
        <div className="-mr-10 w-1/2 rounded-2xl bg-primary text-white">
          <h2 className="pb-10 pt-20 text-center font-semibold">
            СЕНИОРИ - +29 години
          </h2>
          <p className="px-20">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            officia, incidunt tempore perferendis, totam recusandae ea
            voluptatum nostrum rerum sed provident fugiat sunt exercitationem
            saepe iure temporibus fugit accusantium velit enim reiciendis?
            Recusandae velit placeat molestias omnis nihil officiis illum. Porro
            voluptates minima sunt numquam rem ipsam, magnam voluptatem ut
            deserunt consequuntur dicta aut incidunt saepe, laudantium
            laboriosam placeat at suscipit eveniet ea quisquam, commodi
            praesentium! Tempore voluptatem pariatur, reprehenderit iste
            voluptatum ad praesentium quod excepturi officiis porro, blanditiis
            perferendis. Illum animi odio asperiores consequuntur ea
            necessitatibus nesciunt magnam numquam officia reprehenderit maxime,
            velit cumque delectus natus odit ad rerum.
          </p>
          <div className="py-10 text-center">
            <Button variant={"secondary-underlined"}>
              АПЛИЦИРАЈ КАКО СЕНИОР
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={"/img/programi/Rectangle 304.png"}
            alt="img"
            width={847}
            height={1032}
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-1/2 px-20">
          <h2 className="py-10 font-semibold">ИЗВИДНИЧКИ ВЕШТАРСТВА</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            rerum dolor eveniet enim saepe consequuntur nisi modi quia nobis at
            sunt unde ab odio natus ea animi illum provident sequi voluptatem
            perferendis cupiditate architecto debitis delectus excepturi? Cum
            repellendus placeat, tenetur ex, distinctio saepe fugiat ipsam
            officia incidunt necessitatibus cumque?
          </p>

          <div className="py-10 text-center ">
            <Button variant={"secondary-underlined"} className="text-black">
              ПОВЕЌЕ ЗА ВЕШТАРСТВАТА
            </Button>
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap ">
          <Image
            src={"/img/programi/Mask group (2).png"}
            alt="img"
            width={40}
            height={40}
            className="w-1/3 "
          />
          <Image
            src={"/img/programi/Mask group (3).png"}
            alt="img"
            width={40}
            height={40}
            className="w-1/3"
          />
          <Image
            src={"/img/programi/Mask group (4).png"}
            alt="img"
            width={40}
            height={40}
            className="w-1/3"
          />
          <Image
            src={"/img/programi/Mask group (5).png"}
            alt="img"
            width={40}
            height={40}
            className="w-1/3"
          />
          <Image
            src={"/img/programi/Mask group (6).png"}
            alt="img"
            width={40}
            height={40}
            className="w-1/3"
          />
          <Image
            src={"/img/programi/Mask group (7).png"}
            alt="img"
            width={40}
            height={40}
            className="w-1/3"
          />
          <Image
            src={"/img/programi/Mask group (8).png"}
            alt="img"
            width={40}
            height={40}
            className="w-1/3"
          />
          <Image
            src={"/img/programi/Mask group (9).png"}
            alt="img"
            width={40}
            height={40}
            className="w-1/3"
          />
          <Image
            src={"/img/programi/Mask group (10).png"}
            alt="img"
            width={40}
            height={40}
            className="w-1/3"
          />
        </div>
      </div>
    </>
  );
};

export default Programi;
