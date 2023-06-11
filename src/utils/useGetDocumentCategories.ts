import { env } from "@/env.mjs";
import { useQuery } from "@tanstack/react-query";

export type DocumentCategoryType = {
  id: number;
  name: string;
  created_at: Date | null;
  updated_at: Date | null;
};

export default function useGetDocumentCategories() {
  async function fetchCategories() {
    const response = await fetch(
      `${env.NEXT_PUBLIC_API_BASE_URL}/api/document-categories`
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error("There was an error fetching the categories!");
    }

    return responseData;
  }

  return useQuery<{ categories: DocumentCategoryType[] }>({
    queryFn: fetchCategories,
    queryKey: ["categories"],
  });
}
