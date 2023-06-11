import { DonateFormInputs } from "@/pages/donacija";
import { useMutation } from "@tanstack/react-query";

export default function useSendDonation() {
  async function sendDonation(formData: DonateFormInputs) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("There was an error signing up!");
    }

    const dataResponse = await response.json();

    return dataResponse;
  }

  return useMutation<DonateFormInputs, Error, DonateFormInputs>({
    mutationFn: (formData) => sendDonation(formData),
  });
}
