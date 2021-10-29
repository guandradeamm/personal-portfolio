import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  TitleFocus,
  TitleText,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <TitleText>{`Hey There!`}</TitleText>
        <TitleText>
          {`My Name is `}
          <TitleFocus>{`Gustavo.`}</TitleFocus>
        </TitleText>
      </SectionTitle>
      <SectionText>
        {`I'm a FullStack Software Engineer & Attorney with passion for technology. Let's keep in touch!`}
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/gustavo-andrade-fullstack-developer/")
        }
      >
        Keep in Touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
