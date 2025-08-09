import Companies from "@/components/Companies";
import Demo from "@/components/Demo/Demo";
import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted/GetStarted";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import UseCases from "@/components/UseCases/UseCases";
export default function Home() {
  return (
    <main className="min-h-[6000px]">
      <Hero />
      <Companies />
      <UseCases />
      <Features />
      <Demo />
      <Testimonials />
      <GetStarted />
      <Pricing />
    </main>
  );
}
