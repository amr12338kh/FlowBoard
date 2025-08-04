import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
export default function Home() {
  return (
    <main className="min-h-[3000px]">
      <Hero />
      <Companies />
      <UseCases />
    </main>
  );
}
