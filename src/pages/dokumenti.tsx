import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/Popover";
import { env } from "@/env.mjs";
import findUniqueElements from "@/utils/findUniqueElements";
import useDebounce from "@/utils/useDebounce";
import useGetDocumentCategories from "@/utils/useGetDocumentCategories";
import useGetDocuments, { DocumentType } from "@/utils/useGetDocuments";
import {
  IconSearch,
  IconChevronDown,
  IconFileDownload,
} from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type DocumentProps = {
  document: DocumentType;
};

function Document({ document }: DocumentProps) {
  return (
    <div className="flex bg-[#5D766D]">
      <div className="flex w-3/12 items-center justify-center py-4">
        <IconFileDownload className="h-10 w-10" />
      </div>

      <div className="flex w-6/12 flex-col items-center justify-center gap-2 border-l border-r border-l-base-100 border-r-white py-4">
        <p className="text-lg font-bold">{document.title}</p>

        <Button
          variant="secondary-underlined"
          rounding="none"
          size="sm"
          asChild
        >
          <a href={`${env.NEXT_PUBLIC_API_BASE_URL}/${document.link}`}>
            отвори документ
          </a>
        </Button>
      </div>

      <div className="flex w-3/12 items-center justify-center py-4">
        {document.pages} стр.
      </div>
    </div>
  );
}

export default function Dokumenti() {
  const router = useRouter();
  const [isInitialRender, setIsInitialRender] = useState(true);

  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500);

  const [selectedDocumentCategory, setSelectedDocumentCategory] = useState<
    null | number
  >(0);

  function selectDocumentCategory(category: number) {
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

    setSelectedDocumentCategory(0);
  }

  const { data: documents } = useGetDocuments(
    searchText,
    selectedDocumentCategory
  );

  const transformedDocuments =
    documents &&
    Object.entries(documents.docs).map(([categoryName, documents]) => {
      return {
        category: categoryName,
        documents: documents,
      };
    });

  console.log(transformedDocuments);

  const { data: categories } = useGetDocumentCategories();

  const uniqueCategories =
    categories &&
    findUniqueElements(categories.categories.map((category) => category.name));

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
        ? setSelectedDocumentCategory(Number(router.query.category))
        : setSelectedDocumentCategory(0);

      setIsInitialRender(false);
    }
  }, [router.isReady, isInitialRender]);

  return (
    <>
      <Head>
        <title>Документи</title>
      </Head>

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
                  {categories &&
                    categories.categories.map((category) => (
                      <button
                        key={category.id}
                        className="flex items-center gap-2"
                        onClick={() => selectDocumentCategory(category.id)}
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-base-content">
                          {category.id === selectedDocumentCategory && (
                            <div className="h-3 w-3 rounded-full bg-secondary" />
                          )}
                        </div>
                        <span className="capitalize">{category.name}</span>
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
          <div className="flex grid-cols-1 flex-col items-center gap-10 lg:grid lg:grid-cols-4">
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

        <section className="mx-auto w-11/12 max-w-screen-xl py-10 text-base-100">
          <div className="flex flex-col gap-6">
            {transformedDocuments &&
              transformedDocuments.map((category) => (
                <div key={category.category} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-lg uppercase">
                      {category.category}
                    </span>

                    <div>
                      <Image
                        src="/img/dokumenti/category-separator.svg"
                        width={1560}
                        height={19}
                        alt="Pattern"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {category.documents.map((document) => (
                      <Document key={document.id} document={document} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
