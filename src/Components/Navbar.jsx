import React from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 80%;
  padding: 18px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  font-size: 26px;
  text-transform: uppercase;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`
const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`
const ListItems = styled.li`

`
const Icons = styled.div``
const Icon = styled.div``

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo>Web.dev</Logo>
          <List>
            <ListItems>Home</ListItems>
            <ListItems>About</ListItems>
            <ListItems>Projects</ListItems>
            <ListItems>Contact</ListItems>
          </List>
        </Links>
        <Icons>
          Icons
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar;
