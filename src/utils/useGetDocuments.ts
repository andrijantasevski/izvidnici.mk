import { env } from "@/env.mjs";
import { useQuery } from "@tanstack/react-query";

export type DocumentType = {
  id: number;
  cat_id: number;
  title: string;
  link: string;
  pages: number;
  created_at: null | string;
  updated_at: null | string;
  category: {
    id: number;
    name: string;
    created_at: null | string;
    updated_at: null | string;
  };
};

type DocumentsByCategory = {
  [category: string]: DocumentType[];
};

type Documents = {
  docs: DocumentsByCategory;
};

export default function useGetDocuments(
  searchText?: string,
  selectedDocumentCategory?: number | null
) {
  let queryKey = [
    "documents",
    ...(searchText ? [searchText] : []),
    ...(selectedDocumentCategory ? [selectedDocumentCategory] : []),
  ];

  let query = "/api/documents";

  if (searchText) {
    query += `?search=${searchText}`;
  }

  if (selectedDocumentCategory) {
    if (searchText) {
      query += `&category=${selectedDocumentCategory}`;
    } else {
      query += `?category=${selectedDocumentCategory}`;
    }
  }

  console.log(`${env.NEXT_PUBLIC_API_BASE_URL}/api/documents${query}`);

  async function fetchDocuments() {
    const response = await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}${query}`);

    if (!response.ok) {
      throw new Error("There was an error fetching the documents!");
    }

    const responseData = await response.json();

    return responseData;
  }

  return useQuery<Documents>({
    queryFn: fetchDocuments,
    queryKey,
  });
}
