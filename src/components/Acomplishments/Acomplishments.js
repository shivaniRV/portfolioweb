import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {  text: 'web-development '},
  { number: 250, text: 'C++ (250+ question solved on Leetcode and GFG)', },
  {  text: 'Machine Learning', },
  {  text: 'HTML', },
  {  text: 'CSS', },
  {  text: 'React', },
  {  text: 'Bootstrap', },
  {  text: 'Php', },
  {  text: ' Nodejs', },
 

];

const Acomplishments = () => (
  <section>
    <SectionTitle>
      Skills
    </SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
      <Box key ={index}>
        {/* <BoxNum>{card.number}</BoxNum> */}
        <BoxText>{card.text}</BoxText>


      </Box>
      ))}
    </Boxes>
  </section>
);

export default Acomplishments;
