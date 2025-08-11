/* eslint-disable @next/next/no-img-element */
import React from "react";
import { companiesData } from "@/data/data";
import { Container } from "./Layouts/Container";
import { InfiniteScrollX } from "./InfiniteScrollX";
import Section from "./Layouts/Section";

const Companies = () => {
  return (
    <Section className="pt-16 pb-0">
      <Container>
        <InfiniteScrollX
          speed="slow"
          pauseOnHover={false}
          listClassName="gap-16 sm:gap-32"
        >
          {companiesData.map((company) => (
            <li key={company.name} className="w-full ">
              <img
                src={company.image}
                alt={company.name}
                className="h-[85px] w-[85px] lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-contain"
              />
            </li>
          ))}
        </InfiniteScrollX>
      </Container>
    </Section>
  );
};

export default Companies;
