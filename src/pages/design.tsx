import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Design() {
  return (
    <main className="gap-6 bg-gray-200 p-10">
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
    </main>
  );
}
