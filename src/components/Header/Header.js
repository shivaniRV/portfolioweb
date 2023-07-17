import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import dynamic from 'next/dynamic';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () => (


  <Container>
    <Div1>
      <Link href="/" passHref>
        <div style={{ display: 'flex', alignItems: 'center', color: 'white',marginBottom:'20px' }}>
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </div>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#pro">
          <NavLink>Projects</NavLink>
        </Link>
      </li>


      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>

      <SocialIcons href="https://github.com/shivaniRV">
        <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/shivani-vyas-4689b4227/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://www.instagram.com/shivanivyas433/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>

      
    </Div3>

  </Container>
);

export default dynamic (() => Promise.resolve(Header), {ssr: false})

