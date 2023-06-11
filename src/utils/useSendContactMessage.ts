import { env } from "@/env.mjs";
import { ContactFormInputs } from "@/pages/kontakt";
import { useMutation } from "@tanstack/react-query";

export default function useSendContactMessage() {
  async function sendContactMessage(formData: ContactFormInputs) {
    const response = await fetch(
      `${env.NEXT_PUBLIC_API_BASE_URL}/api/contacts`,
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("There was an error signing up!");
    }

    const dataResponse = await response.json();

    return dataResponse;
  }

  return useMutation<ContactFormInputs, Error, ContactFormInputs>({
    mutationFn: (formData) => sendContactMessage(formData),
  });
}
