import Companies from "@/components/Companies";
import Demo from "@/components/Demo/Demo";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";
import UseCases from "@/components/UseCases";
export default function Home() {
  return (
    <main className="min-h-[6000px]">
      <Hero />
      <Companies />
      <UseCases />
      <Features />
      <Demo />
      <Testimonials />
    </main>
  );
}
