import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";


const razvigorci = () => {
  return (
    <div>
      <div className="h-screen  bg-razvigorci-hero bg-contain bg-no-repeat ">
        <h1 className="flex h-96 items-center justify-center text-4xl font-semibold text-white">
          РАЗВИГОРЦИ
        </h1>
      </div>

      <div className="mx-28 -mt-48 mb-10 text-center text-black">
        <p >
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
        <div className="max-w-xl bg-primary rounded-3xl bg-group-left bg-contain bg-size-50">
          <Image src={"/img/razvigorci/section-two-one.png"} alt="img" width={848} height={558} />
          <p className="text-white text-center p-10">
            Програмата за развигорци се состои од општи работи и посебни знаења,
            кои се темелат на оргиналните идеи на основачот на извидничкото
            движење. Преку спроведување на оваа програма, развигорците
            остваруваат напредок на нивниот интелектуален, телесен, емоционален,
            социјален, духовен и карактен развој.
          </p>

          

          <Button variant={'secondary-underlined'} className="text-center my-5 ml-36 ">ПРОГРАМА ЗА РАЗВИГОРЦИ</Button>

        </div>
        <div className="max-w-xl  bg-primary rounded-3xl bg-group-right bg-contain">
          <Image src={"/img/razvigorci/section-two-two.png"} alt="img" width={848} height={558} />
          <p className="text-white text-center px-10 pt-16">
            Впушти се во една поинаква авантура!. Зачлени се во најголемото младинско движење во Македонија.
          </p>
          
          <Button variant={'secondary-underlined'} className="text-center mt-32 ml-52 ">СТАНИ ЧЛЕН</Button>
        </div>
      </div>
    </div>
  );
};

export default razvigorci;
