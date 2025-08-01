import { PageContainer } from "@/components/Layouts/Container";
import { auth } from "@/auth";
export default async function Home() {
  const session = await auth();

  console.log(session?.user);

  return (
    <PageContainer>
      <h1>Home</h1>
    </PageContainer>
  );
}
