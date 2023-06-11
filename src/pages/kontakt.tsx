import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { Label } from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import useSendContactMessage from "@/utils/useSendContactMessage";
import Head from "next/head";

export type ContactFormInputs = {
  full_name: string;
  email: string;
  message: string;
};

const Kontakt = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const { mutate, status } = useSendContactMessage();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
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
        <title>Контакт</title>
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
            Контакт
          </h1>
        </section>

        <section className="py-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-11/12 max-w-3xl flex-col gap-8 rounded-lg border-2 border-secondary bg-primary p-8"
          >
            <p className="text-center text-2xl font-bold text-base-100">
              Пишете ни
            </p>

            <div>
              <Label htmlFor="fullNameInput" srOnly>
                Име
              </Label>
              <Input
                {...register("full_name", { required: true })}
                type="text"
                id="fullNameInput"
                placeholder="Име"
                errorMessage="Внесете име"
                variant={errors.full_name ? "error" : "primary"}
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

            <div className="flex flex-col gap-2">
              <Label htmlFor="messageInput" srOnly>
                Порака
              </Label>
              <textarea
                {...register("message", { required: true })}
                id="messageInput"
                className={`w-full resize-none rounded-sm border bg-transparent p-3 text-base-100 focus:outline-none focus:ring-1 ${
                  errors.message
                    ? "border-error placeholder:text-error focus:ring-error"
                    : "border-base-100 placeholder:text-base-300 focus:ring-primary-content"
                }`}
                placeholder="Порака"
                rows={5}
                cols={5}
              ></textarea>

              {errors.message && (
                <p className="font-medium text-error">Внесете порака</p>
              )}
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
};

export default Kontakt;
