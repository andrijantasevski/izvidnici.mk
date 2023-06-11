import { env } from "@/env.mjs";
import { SignUpFormInputs } from "@/pages/zacleni-se";
import { useMutation } from "@tanstack/react-query";

export default function useSignUpScout() {
  async function signUpScout(formData: SignUpFormInputs) {
    const response = await fetch(
      `${env.NEXT_PUBLIC_API_BASE_URL}/api/applicants`,
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

  return useMutation<SignUpFormInputs, Error, SignUpFormInputs>({
    mutationFn: (formData) => signUpScout(formData),
  });
}
