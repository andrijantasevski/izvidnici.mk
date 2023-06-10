import CardAnimation from '@/components/CardAnimation';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Button variant="error" size="lg" uppercase>
        Hello World!
      </Button>

      <Button asChild variant="error">
        <Link href="/">Home</Link>
      </Button>
      <CardAnimation />
      <Footer />
    </main>
  );
}
