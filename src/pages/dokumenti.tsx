import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/Popover";
import { IconSearch } from "@tabler/icons-react";

export default function Dokumenti() {
  return (
    <main className="bg-primary">
      <section className="mx-auto flex w-11/12 max-w-screen-xl flex-col items-center justify-center gap-10 py-56 text-center text-base-100">
        <h1 className="text-6xl uppercase">Документи</h1>

        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                rounding="pill"
                size="lg"
                variant="secondary"
                className="w-72 text-base-100"
              >
                Истражи по категорија
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start">hi</PopoverContent>
          </Popover>

          <Input
            leadingIcon={<IconSearch />}
            placeholderOffset="pl-10"
            id=""
            errorMessage=""
            className="w-72 rounded-2xl bg-white text-base-content"
          />
        </div>
      </section>
    </main>
  );
}
