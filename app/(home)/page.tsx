import Companies from "@/components/Companies";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
export default function Home() {
  return (
    <main className="min-h-[6000px]">
      <Hero />
      <Companies />
      <UseCases />
      <Features />
    </main>
  );
}
