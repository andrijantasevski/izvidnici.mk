import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Head from "next/head";
import { Label } from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/ui/Button";
import useSignUpScout from "@/utils/useSignUpScout";
import { toast } from "react-hot-toast";

export type SignUpFormInputs = {
  full_name: string;
  age: number;
  address: string;
  email: string;
};

const scoutTypes = [
  {
    title: "развигорци",
    image: "/img/zacleni-se/razvigorci.jpg",
  },
  {
    title: "извидници",
    image: "/img/zacleni-se/izvidnici.jpg",
  },
  {
    title: "истражувачи",
    image: "/img/zacleni-se/istrazhuvachi.jpg",
  },
  {
    title: "ровери",
    image: "/img/zacleni-se/roveri.jpg",
  },
  {
    title: "сениори",
    image: "/img/zacleni-se/seniori.jpg",
  },
];

function ZacleniSeVideoSection() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // TODO
  // FIX CLICKING ON IMAGES TO OPEN MODAL

  return (
    <>
      <section className="relative bg-primary py-40">
        <Image
          src="/img/zacleni-se/play-video-pattern.svg"
          width={319}
          height={205}
          alt="Pattern"
          className="absolute top-0 rotate-180"
          priority
        />

        <button
          onClick={openModal}
          className="flex h-full w-full items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-40 w-40 text-base-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </button>

        <Image
          src="/img/zacleni-se/play-video-pattern.svg"
          width={319}
          height={205}
          alt="Pattern"
          className="absolute bottom-0 right-0"
          priority
        />
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-full max-w-2xl transform flex-col gap-2 rounded-2xl bg-white p-6 shadow-xl transition-all">
                  <div className="flex w-full justify-end">
                    <button
                      title="Затвори видео"
                      aria-label="Затвори видео"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="text-primary-500 h-8 w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <iframe
                    className="w-full"
                    height="315"
                    src="https://www.youtube.com/embed/0KMPSo2AwZ4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default function ZacleniSe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const { mutate, status } = useSignUpScout();

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        reset(), toast.success("Успешно се пријавивте!");
      },
    });
  };

  return (
    <>
      <Head>
        <title>Зачлени се</title>
      </Head>
      <main>
        <section className="relative">
          <Image
            src="/img/zacleni-se/hero-image.jpg"
            width={1920}
            height={536}
            alt="Два извидника покажуваат знак со нивните раце."
            className="h-[50vh] w-full object-cover brightness-90 lg:h-[60vh]"
            priority
          />

          <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-5xl text-base-100 2xl:text-6xl">
            Зачлени се
          </h1>
        </section>

        <section className="relative flex h-[320px] items-center justify-end">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-lg">
            Впушти се во една поинаква авантура, стани дел од извидничкото
            семејство, најголемото младинско движење во светот!
          </div>

          <Image
            src="/img/zacleni-se/second-section-pattern.svg"
            width={320}
            height={320}
            priority
            alt="Pattern"
            className="hidden lg:block"
          />
        </section>

        <ZacleniSeVideoSection />

        <section className="flex justify-between pt-10">
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

        {/* TODO */}
        {/* CHANGE IMAGES FROM JPG TO PNG */}
        <section className="relative w-full bg-primary py-20">
          <Image
            className="absolute bottom-0"
            src="/img/zacleni-se/scout-types-pattern.svg"
            width={318}
            height={329}
            alt="Pattern"
          />

          <div className="relative z-10 mx-auto w-11/12 max-w-screen-xl">
            <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
              {scoutTypes.map((scoutType) => (
                <div key={scoutType.image} className="flex flex-col gap-4">
                  <Image
                    width={267}
                    height={424}
                    src={scoutType.image}
                    alt={scoutType.title}
                  />

                  <div className="text-center">
                    <p className="inline-block border-b border-secondary pb-1 text-lg font-semibold uppercase text-base-100">
                      {scoutType.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Image
            className="absolute right-0 top-0 rotate-180"
            src="/img/zacleni-se/scout-types-pattern.svg"
            width={318}
            height={329}
            alt="Pattern"
          />
        </section>

        <section className="flex flex-col items-center justify-center gap-10 py-20">
          <h2 className="text-3xl font-bold uppercase">Придружи се</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-11/12 max-w-lg flex-col gap-8 rounded-lg border-2 border-secondary bg-primary p-8"
          >
            <div>
              <Label htmlFor="fullNameInput" srOnly>
                Име
              </Label>
              <Input
                {...register("full_name", { required: true })}
                type="text"
                id="fullNameInput"
                placeholder="Име и презиме"
                errorMessage="Внесете име"
                variant={errors.full_name ? "error" : "primary"}
              />
            </div>

            <div>
              <Label htmlFor="ageInput" srOnly>
                Возраст
              </Label>
              <Input
                {...register("age", { required: true, valueAsNumber: true })}
                type="number"
                id="ageInput"
                placeholder="Возраст"
                errorMessage="Внесете возраст"
                variant={errors.age ? "error" : "primary"}
              />
            </div>

            <div>
              <Label htmlFor="addressInput" srOnly>
                Адреса
              </Label>
              <Input
                {...register("address", { required: true })}
                type="text"
                id="addressInput"
                placeholder="Адреса"
                errorMessage="Внесете адреса"
                variant={errors.address ? "error" : "primary"}
              />
            </div>

            <div>
              <Label htmlFor="emailInput" srOnly>
                Е-пошта
              </Label>
              <Input
                {...register("email", { required: true })}
                type="email"
                id="emailInput"
                placeholder="Е-пошта"
                errorMessage="Внесете е-пошта"
                variant={errors.email ? "error" : "primary"}
              />
            </div>

            <Button
              disabled={status === "loading"}
              variant={status === "loading" ? "disabled" : "secondary"}
            >
              {status !== "loading" && "Аплицирај"}
              {status === "loading" && "Пријавата се испраќа..."}
            </Button>
          </form>
        </section>
      </main>
    </>
  );
}
