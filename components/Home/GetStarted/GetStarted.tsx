import { Container } from "@/components/Home/Layouts/Container";
import { SectionTitle, Subtitle } from "../Layouts/Heading";
import { getStarted } from "@/data/data";
import GetStartedCard from "./GetStartedCard";
import SectionBackgroundWrapper from "../Layouts/SectionBackgroundWrapper";

const GetStarted = () => {
  return (
    <SectionBackgroundWrapper variant="secondary" color="gary">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:gap-10 xl:gap-0 xl:grid-cols-2">
          <div>
            <SectionTitle containerClassName="mb-2! sm:mb-4! md:mb-5!">
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
    </SectionBackgroundWrapper>
  );
};

export default GetStarted;
