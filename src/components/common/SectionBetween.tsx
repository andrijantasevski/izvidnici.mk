import Image from "next/image";

// TODO
// CHANGE COMPONENT NAME TO BE MORE IDIOMATIC AND CORRECT

export default function SectionBetween() {
  return (
    <section className="flex justify-center pt-10 lg:justify-between">
      <Image
        className="hidden lg:block"
        src="/img/zacleni-se/pattern-white-section-left.svg"
        width={78}
        height={136}
        alt="Pattern"
      />

      <Image
        src="/img/zacleni-se/pattern-white-section-centered.svg"
        width={314}
        height={136}
        alt="Pattern"
      />

      <Image
        className="hidden lg:block"
        src="/img/zacleni-se/pattern-white-section-right.svg"
        width={78}
        height={136}
        alt="Pattern"
      />
    </section>
  );
}
