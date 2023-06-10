import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

const razvigorci = () => {
  return (
    <div>
      <div className="h-screen  bg-razvigorci-hero bg-contain bg-no-repeat ">
        <h1 className="flex h-96 items-center justify-center text-4xl font-semibold text-white">
          РАЗВИГОРЦИ
        </h1>
      </div>

      <div className="mx-28 -mt-48 mb-10 text-center text-black">
        <p>
          Ја запознаваат природата, учат да ја сакаат и се грижат за неа. Учат
          како да се снајдат во природата и да станат свесни за нејзините
          вредности и опасности. Ги познаваат своите права и обврски и развиваат
          чувство за правда и еднаквост. Го запознаваат, почитуваат и
          соработуваат со светот во кој што живеат. Слободно ги истражуваат
          своите мисли и чувства. Се грижат за своето здравје и дух. Се снаоќаат
          во времето и просторот, креативно истражуваат, ги користат основните
          технички уреди и средства за комуникација. Ја ценат својата и
          културата на другите, го прифаќаат кодексот на фино однесување и
          етиката. Се запознаваат со работата и принципите на организацијата,
          учествувајќи во изградба на својата патрола, учејќи да го почитуваат,
          ценат и сакат извидништвото, знаејќи ги своите права и должности во
          организацијата.
        </p>
      </div>

      <div className="flex justify-around">
        <div className="bg-size-50 max-w-xl rounded-3xl bg-primary bg-group-left bg-contain">
          <Image
            src={"/img/razvigorci/section-two-one.png"}
            alt="img"
            width={848}
            height={558}
          />
          <p className="p-10 text-center text-white">
            Програмата за развигорци се состои од општи работи и посебни знаења,
            кои се темелат на оргиналните идеи на основачот на извидничкото
            движење. Преку спроведување на оваа програма, развигорците
            остваруваат напредок на нивниот интелектуален, телесен, емоционален,
            социјален, духовен и карактен развој.
          </p>

          <Button
            variant={"secondary-underlined"}
            className="my-5 ml-36 text-center "
          >
            ПРОГРАМА ЗА РАЗВИГОРЦИ
          </Button>
        </div>
        <div className="max-w-xl  rounded-3xl bg-primary bg-group-right bg-contain">
          <Image
            src={"/img/razvigorci/section-two-two.png"}
            alt="img"
            width={848}
            height={558}
          />
          <p className="px-10 pt-16 text-center text-white">
            Впушти се во една поинаква авантура!. Зачлени се во најголемото
            младинско движење во Македонија.
          </p>

          <Button
            variant={"secondary-underlined"}
            className="ml-52 mt-32 text-center "
          >
            СТАНИ ЧЛЕН
          </Button>
        </div>
      </div>

      <div className="mt-20 flex justify-around">
        <div className="max-w-xl ">
          <Image
            src={"/img/razvigorci/Polygon 2.png"}
            alt="img"
            width={444}
            height={445}
          />
        </div>

        <div className="ml-28 max-w-xl rounded-3xl bg-primary text-center text-white">
          <h2 className="px-5 pb-28 pt-20">
            ОБЛАСТИ ЗА ЛИЧЕН РАЗВОЈ НА РАЗВИГОРЦИТЕ ВО ИЗВИДНИЧКАТА ПРОГРАМА
          </h2>
          <p className="px-24">
            Преку внимателно дизајнирани активности и методи за учење, на
            развигорците им е овозможен напредок во овие 6 развојни полиња. Нови
            вештини и пријателства се на повидок.
          </p>
        </div>
      </div>

      <h2 className="my-20 text-center text-xl font-semibold">СВЕДОШТВА</h2>

      <div className="flex justify-around">
        <div className="w-1/5 rounded-3xl">
          <Image
            src={"/img/razvigorci/8 1.png"}
            alt="img"
            width={400}
            height={400}
          />
          <div className="bg-primary p-10 text-center text-xs text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              nesciunt est facilis odit tempora doloribus aperiam ex laboriosam
              placeat unde, eligendi ipsum harum laborum magnam, doloremque sunt
              aut? Quibusdam, numquam ratione repudiandae molestias debitis
              molestiae consectetur iusto, fugiat fugit delectus expedita?
              Quidem odio omnis placeat perspiciatis ipsum! Placeat, excepturi
              vel?
            </p>
            <p className="pt-5">Ана, 10 години</p>
          </div>
          <Image
            src={"/img/razvigorci/Group 534.png"}
            alt="img"
            width={100}
            height={100}
            className="ml-20"
          />
        </div>

        <div className="w-1/5 rounded-3xl">
          <Image
            src={"/img/razvigorci/8 2.png"}
            alt="img"
            width={400}
            height={400}
          />
          <div className="bg-primary p-10 text-center text-xs text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              nesciunt est facilis odit tempora doloribus aperiam ex laboriosam
              placeat unde, eligendi ipsum harum laborum magnam, doloremque sunt
              aut? Quibusdam, numquam ratione repudiandae molestias debitis
              molestiae consectetur iusto, fugiat fugit delectus expedita?
              Quidem odio omnis placeat perspiciatis ipsum! Placeat, excepturi
              vel?
            </p>
            <p className="pt-5">Ена, 9 години</p>
          </div>
          <Image
            src={"/img/razvigorci/Group 534.png"}
            alt="img"
            width={100}
            height={100}
            className="ml-20"
          />
        </div>

        <div className="w-1/5 rounded-3xl">
          <Image
            src={"/img/razvigorci/8 3.png"}
            alt="img"
            width={400}
            height={400}
          />
          <div className="bg-primary p-10 text-center text-xs text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              nesciunt est facilis odit tempora doloribus aperiam ex laboriosam
              placeat unde, eligendi ipsum harum laborum magnam, doloremque sunt
              aut? Quibusdam, numquam ratione repudiandae molestias debitis
              molestiae consectetur iusto, fugiat fugit delectus expedita?
              Quidem odio omnis placeat perspiciatis ipsum! Placeat, excepturi
              vel?
            </p>
            <p className="pt-5">Лена, 6 години</p>
          </div>
          <Image
            src={"/img/razvigorci/Group 534.png"}
            alt="img"
            width={100}
            height={100}
            className="ml-20"
          />
        </div>

        <div className="w-1/5 rounded-3xl">
          <Image
            src={"/img/razvigorci/8 4.png"}
            alt="img"
            width={400}
            height={400}
          />
          <div className="bg-primary p-10 text-center text-xs text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              nesciunt est facilis odit tempora doloribus aperiam ex laboriosam
              placeat unde, eligendi ipsum harum laborum magnam, doloremque sunt
              aut? Quibusdam, numquam ratione repudiandae molestias debitis
              molestiae consectetur iusto, fugiat fugit delectus expedita?
              Quidem odio omnis placeat perspiciatis ipsum! Placeat, excepturi
              vel?
            </p>
            <p className="pt-5">Ненеад, 11 години</p>
          </div>
          <Image
            src={"/img/razvigorci/Group 534.png"}
            alt="img"
            width={100}
            height={100}
            className="ml-20"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          variant={"secondary-underlined"}
          className=" mt-20 text-center text-black "
        >
          СТАНИ ЧЛЕН!
        </Button>
      </div>

      <h2 className="mb-20 mt-36 text-center font-semibold">НАСТАНИ</h2>

      <div className="flex justify-center">
        <div className="relative bg-opacity-10">
          <Image
            src={"/img/razvigorci/nastan-1.png"}
            alt="img"
            width={400}
            height={800}
          />
          <div className="absolute inset-0 mt-96 text-center text-white">
            <Button variant={"secondary-underlined"} className=" text-center ">
              СЛЕДЕН НАСТАН
            </Button>
            <p>02.03.2023 | Велес</p>
          </div>
        </div>

        <div>
          <div className="relative mb-2 ml-2 bg-opacity-10">
            <Image
              src={"/img/razvigorci/nastan-2.png"}
              alt="img"
              width={400}
              height={400}
              
            />
            <div className="absolute inset-0 mt-40  text-center text-white">
              <Button
                variant={"secondary-underlined"}
                className=" text-center "
              >
                СЛЕДЕН НАСТАН
              </Button>
            </div>
          </div>
          <div className="relative ml-2 bg-opacity-10">
            <Image
              src={"/img/razvigorci/nastan-3.png"}
              alt="img"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 mt-40  text-center text-white">
              <Button
                variant={"secondary-underlined"}
                className=" text-center "
              >
                СЛЕДЕН НАСТАН
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default razvigorci;
