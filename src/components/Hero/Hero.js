import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
        Hello! I'M  Shivani Vyas. Motivated and consistent to acquire knowledge and expand my skillset.
      </SectionText>
      <Button onClick={() => window.location.href = 'https://drive.google.com/file/d/1cW4Dj4hDLQeQHGVgkNL_1-zo4o_YH1yW/view?usp=sharing'}>
        Download Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
