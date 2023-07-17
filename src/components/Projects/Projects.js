import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectDemo=[{
  title:'project 1',
  description:' this is HostelManagement website using HTML,CSS,JavaScript,PHP,MySQL'},{
    title:'project 2',
    description:' this is HostelManagement website using HTML,CSS,JavaScript,PHP,MySQL'},
    {
      title:'project 3',
      description:' this is HostelManagement website using HTML,CSS,JavaScript,PHP,MySQL'},
      {
        title:'project 4',
        description:' this is HostelManagement website using HTML,CSS,JavaScript,PHP,MySQL'
}];

const Projects = () => (
  <section nopadding id= "pro">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>

    {projects.map(({id,image,title,description,tags,source,visit}) => (
  <BlogCard key={id}>
    <Img src={image}/>
    <TitleContent>
      <HeaderThree title>{title}</HeaderThree>
      <Hr/>
    </TitleContent>
    <CardInfo>{description}</CardInfo>
    <div>
    <TitleContent>Stack</TitleContent>
<TagList>
  {tags && tags.map((tag, i) => (
    <Tag key={i}>{tag}</Tag>
  ))}
</TagList>


    </div>
<UtilityList>
  <ExternalLinks href ={visit}>Code</ExternalLinks>
  <ExternalLinks href ={source}>Source</ExternalLinks>
</UtilityList>
  </BlogCard>
))}

    </GridContainer>

  </section>
);

export default Projects;