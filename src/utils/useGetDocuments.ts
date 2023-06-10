import { env } from "@/env.mjs";
import { useQuery } from "@tanstack/react-query";

type Document = {
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
  [category: string]: Document[];
};

export type DocumentCategoryType = {
  id: number;
  name: string;
  created_at: Date | null;
  updated_at: Date | null;
};

type Data = {
  docs: DocumentsByCategory;
  categories: DocumentCategoryType;
};

export default function useGetDocuments(
  searchText?: string,
  selectedDocumentCategory?: string
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

  async function fetchStudents() {
    const response = await fetch(
      `${env.NEXT_PUBLIC_API_BASE_URL}/api/documents`
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error("There was an error fetching events!");
    }

    return responseData;
  }

  return useQuery<{ categories: DocumentCategoryType[] }>({
    queryFn: fetchStudents,
    queryKey,
  });
}
