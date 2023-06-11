import Button from "@/components/ui/Button";
import useSignUpScout from "@/utils/useSignUpScout";
import { toast } from "react-hot-toast";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Label } from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import Image from "next/image";
import useSendDonation from "@/utils/useSendDonation";

export type DonateFormInputs = {
  fullName: string;
  age: string;
  address: string;
  email: string;
  city: string;
  country: string;
  project: string;
  amount: string;
  cardName: string;
  cardNumber: string;
  cardExpiryDate: string;
  cardCVV: string;
};

export default function Donacija() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<DonateFormInputs>();

  const { mutate, status } = useSendDonation();

  const onSubmit: SubmitHandler<DonateFormInputs> = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset(), toast.success("Успешно испративте донација!");
      },
    });
  };
  return (
    <main className="pb-40">
      <section className="pb-20 pt-40">
        <div className="mx-auto flex w-11/12 max-w-screen-xl items-center justify-center text-center">
          {/* TODO */}
          {/* FIX LINE HEIGHT */}
          <h1 className="text-5xl uppercase 2xl:text-6xl">
            придонеси за македонското извидништво
          </h1>
        </div>
      </section>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-14 lg:flex-row"
      >
        <div className="mx-auto flex w-full flex-col gap-8 rounded-lg border-2 border-secondary bg-primary p-10 lg:w-6/12">
          <p className="text-center text-2xl font-bold text-base-100">
            Моја донација
          </p>
          <div>
            <Label htmlFor="fullNameInput" srOnly>
              Име
            </Label>
            <Input
              {...register("fullName", { required: true })}
              type="text"
              id="fullNameInput"
              placeholder="Име и презиме"
              errorMessage="Внесете име"
              variant={errors.fullName ? "error" : "primary"}
            />
          </div>

          <div>
            <Label htmlFor="ageInput" srOnly>
              Возраст
            </Label>
            <Input
              {...register("age", { required: true })}
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

          <Controller
            control={control}
            name="city"
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <div className="flex flex-col gap-2.5">
                <Label srOnly fontWeight="bold" htmlFor="cityGroup">
                  Град
                </Label>
                <Select
                  isError={errors.city}
                  errorMessage="Одбери град"
                  onValueChange={onChange}
                >
                  <SelectTrigger
                    id="cityGroup"
                    variant={errors.city ? "error" : "primary"}
                  >
                    <SelectValue placeholder="Град" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Битола</SelectItem>
                    <SelectItem value="2">Прилеп</SelectItem>
                    <SelectItem value="3">Охрид</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          />

          <Controller
            control={control}
            name="country"
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <div className="flex flex-col gap-2.5">
                <Label srOnly fontWeight="bold" htmlFor="countryGroup">
                  Држава
                </Label>
                <Select
                  isError={errors.country}
                  errorMessage="Одбери држава"
                  onValueChange={onChange}
                >
                  <SelectTrigger
                    id="countryGroup"
                    variant={errors.country ? "error" : "primary"}
                  >
                    <SelectValue placeholder="Држава" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Македонија</SelectItem>
                    <SelectItem value="2">Шпанија</SelectItem>
                    <SelectItem value="3">Хрватска</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          />

          <Controller
            control={control}
            name="project"
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <div className="flex flex-col gap-2.5">
                <Label srOnly fontWeight="bold" htmlFor="projectGroup">
                  Проект
                </Label>
                <Select
                  isError={errors.project}
                  errorMessage="Одбери проект"
                  onValueChange={onChange}
                >
                  <SelectTrigger
                    id="projectGroup"
                    variant={errors.project ? "error" : "primary"}
                  >
                    <SelectValue placeholder="Одбери проект" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Проект 1</SelectItem>
                    <SelectItem value="2">Проект 2</SelectItem>
                    <SelectItem value="3">Проект 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          />

          <Controller
            control={control}
            name="amount"
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <div className="flex flex-col gap-2.5">
                <Label srOnly fontWeight="bold" htmlFor="amountSelect">
                  Сума
                </Label>
                <Select
                  isError={errors.amount}
                  errorMessage="Одбери сума"
                  onValueChange={onChange}
                >
                  <SelectTrigger
                    id="amountSelect"
                    variant={errors.amount ? "error" : "primary"}
                  >
                    <SelectValue placeholder="Одбери сума" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1000</SelectItem>
                    <SelectItem value="2">5000</SelectItem>
                    <SelectItem value="3">10 000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          />
        </div>

        <div className="mx-auto flex w-full flex-col justify-between gap-8 rounded-lg border-2 border-secondary bg-primary p-10 lg:w-6/12">
          <p className="text-center text-2xl font-bold text-base-100">
            Начин на плаќање
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center gap-6">
              <Image src="/img/logos/visa.png" width={80} height={63} alt="" />

              <Image
                src="/img/logos/mastercard.png"
                width={80}
                height={63}
                alt=""
              />

              <Image
                src="/img/logos/paypal.png"
                width={80}
                height={63}
                alt=""
              />
            </div>

            <div>
              <Label htmlFor="cardNameInput" srOnly>
                Име
              </Label>
              <Input
                {...register("cardName", { required: true })}
                type="text"
                id="cardNameInput"
                placeholder="Име"
                errorMessage="Внесете име"
                variant={errors.cardName ? "error" : "primary"}
              />
            </div>

            <div>
              <Label htmlFor="cardNumberInput" srOnly>
                Број на картичка
              </Label>
              <Input
                {...register("cardNumber", { required: true })}
                type="number"
                id="cardNumberInput"
                placeholder="Број на картичка"
                errorMessage="Внесете број на картичка"
                variant={errors.cardNumber ? "error" : "primary"}
              />
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col gap-4">
                <Label
                  htmlFor="cardExpiryInput"
                  fontWeight="bold"
                  className="text-base-100"
                >
                  MM/YY
                </Label>
                <Input
                  {...register("cardExpiryDate", { required: true })}
                  type="text"
                  id="cardExpiryInput"
                  errorMessage="Внесете рок"
                  variant={errors.cardExpiryDate ? "error" : "primary"}
                />
              </div>

              <div className="flex flex-col gap-4">
                <Label
                  htmlFor="cardCVVInput"
                  className="text-base-100"
                  fontWeight="bold"
                >
                  CVV
                </Label>
                <Input
                  {...register("cardCVV", { required: true })}
                  type="text"
                  id="cardCVVInput"
                  errorMessage="Внесете CVV"
                  variant={errors.cardCVV ? "error" : "primary"}
                />
              </div>
            </div>
          </div>

          <Button
            disabled={status === "loading"}
            variant={status === "loading" ? "disabled" : "secondary"}
          >
            {status !== "loading" && "Потврди"}
            {status === "loading" && "Донацијата се испраќа..."}
          </Button>
        </div>
      </form>
    </main>
  );
}
