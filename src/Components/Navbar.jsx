import React from 'react';
import { styled } from 'styled-components';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { mobile } from '../responsive';

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 80%;
  padding: 34px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    width: '90%',
  })}
`
const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(40deg, #896aef, #ffb7df);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  cursor: pointer;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`
const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  ${mobile({
    display: 'none',
  })}
`
const ListItems = styled.a`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;

  &:hover{
    color: #f7b8db;
    scale: 1.1;
  }
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const Icon = styled.a`
  color: white;

  &:hover{
    scale: 1.2;
  }
`

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo>Web.dev</Logo>
          <List>
            <ListItems href='#'>Home</ListItems>
            <ListItems href='/#about'>About</ListItems>
            <ListItems href='/#projects'>Projects</ListItems>
            <ListItems href='/#connect'>Connect</ListItems>
          </List>
        </Links>
        <Icons>
          <Icon href='https://github.com/MitGanesh' target='_blank'>
            <FaGithub size={25} />
          </Icon>
          <Icon href='https://twitter.com/GaneshMittha3' target='_blank'>
            <FaTwitter size={25} />
          </Icon>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar;
