import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>Call
    </LinkTitle>
    <LinkItem href="tel:+91-97305-50541">+91-97305-50541</LinkItem>
    </LinkColumn>

    <LinkColumn>
    <LinkTitle>Email
    </LinkTitle>
    <LinkItem href="mailto:contact@gmail.com">shivanivyas1908@gmail.com</LinkItem>
    </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>
        “The best way to predict the future is to invent it.”
        </Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/shivaniRV">
        <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/shivani-vyas-4689b4227/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://www.instagram.com/shivanivyas433/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
