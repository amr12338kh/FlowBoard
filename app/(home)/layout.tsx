import Footer from "@/components/Home/Layouts/Footer/Footer";
import Header from "@/components/Home/Layouts/Header/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
