import { SignUpFormInputs } from "@/pages/zacleni-se";
import { useMutation } from "@tanstack/react-query";

export default function useSignUpScout() {
  async function signUpScout(formData: SignUpFormInputs) {
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

  return useMutation<SignUpFormInputs, Error, SignUpFormInputs>({
    mutationFn: (formData) => signUpScout(formData),
  });
}
