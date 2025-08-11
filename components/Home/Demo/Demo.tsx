import { Button } from "@/components/ui/button";
import {
  SectionTitle,
  TitleGradient,
  Subtitle,
} from "@/components/Home/Layouts/Heading";
import Section from "../Layouts/Section";
import { Container } from "../Layouts/Container";
import Link from "next/link";
import DemoAnimation from "./DemoAnimation";

const Demo = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <SectionTitle containerClassName="sm:mb-0 mb-0">
          See <TitleGradient>FlowBoard AI</TitleGradient> in action
        </SectionTitle>
        <Subtitle>
          Watch how FlowBoard automates workflows, prioritizes tasks, and keeps
          your team aligned — effortlessly.
        </Subtitle>

        <DemoAnimation />

        <Link href="/login" className="mt-10">
          <Button variant="transparent" size="wide">
            Get Started For Free
          </Button>
        </Link>
      </Container>
    </Section>
  );
};

export default Demo;
