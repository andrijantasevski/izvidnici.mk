import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
