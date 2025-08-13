import { auth } from "@/auth";
import HomeProjects from "@/components/Dashboard/Home/HomeProjects";
import HomeSummary from "@/components/Dashboard/Home/HomeSummary";
import HomeTasks from "@/components/Dashboard/Home/HomeTasks";
import { Container } from "@/components/Home/Layouts/Container";
import Section from "@/components/Home/Layouts/Section";

const page = async () => {
  const session = await auth();

  return (
    <main>
      <Section>
        <Container className="flex flex-col items-center space-y-10">
          <HomeSummary />
          <HomeTasks session={session} />
          <HomeProjects />
        </Container>
      </Section>
    </main>
  );
};

export default page;
