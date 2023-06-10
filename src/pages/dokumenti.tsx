import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/Popover";
import findUniqueElements from "@/utils/findUniqueElements";
import useDebounce from "@/utils/useDebounce";
import useGetDocuments from "@/utils/useGetDocuments";
import { IconSearch, IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dokumenti() {
  const router = useRouter();
  const [isInitialRender, setIsInitialRender] = useState(true);

  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500);

  // const transformedData = Object.entries(data.docs).map(([categoryName, documents]) => {
  //   return {
  //     category: categoryName,
  //     categories: documents.map((doc) => doc.category),
  //   };
  // });

  const [selectedDocumentCategory, setSelectedDocumentCategory] = useState("");

  function selectDocumentCategory(category: string) {
    setSelectedDocumentCategory(category);

    router.push({
      query: {
        ...router.query,
        category: category,
      },
    });
  }

  function emptyCategories() {
    const updatedQuery = { ...router.query };

    if (router.query.category) {
      delete updatedQuery.category;
    }

    router.push({
      query: updatedQuery,
    });

    setSelectedDocumentCategory("");
  }

  const { data: documents } = useGetDocuments(
    searchText,
    selectedDocumentCategory
  );

  const uniqueDocumentCategories =
    documents &&
    findUniqueElements(documents.categories.map((category) => category.name));

  useEffect(() => {
    if (router.isReady) {
      const updatedQuery = { ...router.query };

      if (debouncedSearchText) {
        updatedQuery.search = debouncedSearchText;
      } else {
        delete updatedQuery.search;
      }

      router.push({
        query: updatedQuery,
      });
    }
  }, [debouncedSearchText]);

  useEffect(() => {
    if (router.isReady && isInitialRender) {
      router.query.search
        ? setSearchText(String(router.query.search))
        : setSearchText("");
      router.query.category
        ? setSelectedDocumentCategory(String(router.query.category))
        : setSelectedDocumentCategory("");

      setIsInitialRender(false);
    }
  }, [router.isReady, isInitialRender]);

  return (
    <main className="bg-primary">
      <section className="mx-auto flex w-11/12 max-w-screen-xl flex-col items-center justify-center gap-10 pb-20 pt-56 text-center text-base-100">
        <h1 className="text-5xl uppercase lg:text-6xl">Документи</h1>

        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                rounding="pill"
                size="lg"
                variant="secondary"
                className="w-72 items-center gap-2 text-base-100"
              >
                Истражи по категорија
                <IconChevronDown className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <div className="flex flex-col gap-2">
                {uniqueDocumentCategories &&
                  uniqueDocumentCategories.map((category) => (
                    <button
                      key={category}
                      className="flex items-center gap-2"
                      onClick={() => selectDocumentCategory(category)}
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-base-content">
                        {category === selectedDocumentCategory && (
                          <div className="h-3 w-3 rounded-full bg-secondary" />
                        )}
                      </div>
                      <span className="capitalize">{category}</span>
                    </button>
                  ))}
                <Button
                  onClick={emptyCategories}
                  variant={router.query.category ? "secondary" : "disabled"}
                  size="sm"
                >
                  Изпразни категории
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Input
            value={searchText}
            onChange={(e) => setSearchText(e.currentTarget.value)}
            leadingIcon={<IconSearch />}
            placeholderOffset="pl-10"
            id=""
            errorMessage=""
            className="w-72 rounded-2xl bg-white text-base-content"
          />
        </div>
      </section>

      <section className="mx-auto w-11/12 max-w-screen-xl pb-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <Image
            src="/img/dokumenti/kompas-razvigorci.jpg"
            width={412}
            height={576}
            alt="Компас Развигорци"
          />

          <Image
            src="/img/dokumenti/kompas-razvigorci.jpg"
            width={412}
            height={576}
            alt="Компас Развигорци"
          />

          <Image
            src="/img/dokumenti/kompas-rover.jpg"
            width={412}
            height={576}
            alt="Компас Ровери"
          />

          <Image
            src="/img/dokumenti/kompas-avantura.jpg"
            width={412}
            height={576}
            alt="Компас Авантура"
          />
        </div>
      </section>
    </main>
  );
}
