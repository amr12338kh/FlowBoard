import { Container } from "@/components/Layouts/Container";
import { SectionTitle, Subtitle } from "../Layouts/Heading";
import Section from "../Layouts/Section";
import { getStarted } from "@/data/data";
import GetStartedCard from "./GetStartedCard";

const GetStarted = () => {
  return (
    <Section>
      <Container className="bg-[var(--primary-basic)]/2 xl:rounded-2xl">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 xl:gap-0 xl:grid-cols-2 px-2 sm:px-10 py-8 xl:py-28">
          <div>
            <SectionTitle containerClassName="mb-2! sm:mb-4! md:mb-6!">
              Get started easily
            </SectionTitle>
            <Subtitle>
              Tour the platform, read a few deep dives, or kickstart your work
              management journey with the right template.
            </Subtitle>
          </div>

          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {getStarted.map((getStarted) => (
              <GetStartedCard key={getStarted.title} getStarted={getStarted} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default GetStarted;
