import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText> 

      I've Worked With range of web development projects from back-end-to Design and skilled in C++ language and good Knowledge of DSA
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle> Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
           Technology like HTML,CSS,React.JS,Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle> Back-End</ListTitle>
          <ListParagraph>
           Good Knowledge of  <br/>
         Php,Nodejs,Nextjs
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle> c++ Language</ListTitle>
          <ListParagraph>
           Solved 250+ problems on Leetcode and Gfg platforms
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>

  </section>
);

export default Technologies;
