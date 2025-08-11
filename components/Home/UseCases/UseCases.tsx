import { Container } from "../Layouts/Container";
import Section from "../Layouts/Section";
import { useCases } from "@/data/data";
import Carousel from "../../ui/carousel";
import { SectionTitle, TitleGradient } from "../Layouts/Heading";
import UseCaseCard from "./UseCaseCard";

const UseCases = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          See how <TitleGradient>FlowBoard</TitleGradient> keeps work moving
          across use cases
        </SectionTitle>
      </Container>

      <Carousel gap={30}>
        {useCases.map((useCase, i) => (
          <UseCaseCard key={i} useCase={useCase} />
        ))}
      </Carousel>
    </Section>
  );
};

export default UseCases;
