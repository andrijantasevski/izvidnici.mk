import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";

export default function Design() {
  return (
    <main className="gap-6 bg-black p-56">
      <div>
        <Button variant="primary" size="base" rounding="square" uppercase>
          Hello World!
        </Button>

        <Button
          asChild
          variant="secondary-underlined"
          rounding="none"
          fontWeight="bold"
        >
          <Link href="/">Home</Link>
        </Button>
      </div>

      <Input id="hi" errorMessage="hi" placeholder="hi" />
    </main>
  );
}
