import Companies from "@/components/Home/Companies";
import Demo from "@/components/Home/Demo/Demo";
import Features from "@/components/Home/Features/Features";
import GetStarted from "@/components/Home/GetStarted/GetStarted";
import Hero from "@/components/Home/Hero";
import CTA from "@/components/Home/Layouts/Footer/CTA";
import Pricing from "@/components/Home/Pricing/Pricing";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import UseCases from "@/components/Home/UseCases/UseCases";
export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <UseCases />
      <Features />
      <Demo />
      <Pricing />
      <Testimonials />
      <GetStarted />
      <CTA />
    </main>
  );
}
