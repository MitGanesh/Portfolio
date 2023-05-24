import React from 'react'
import { styled } from 'styled-components';

const Section = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ListItem = styled.li`
  font-size: 84px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            <ListItem>WEB</ListItem>
            <ListItem>WEB</ListItem>
            <ListItem>WEB</ListItem>
            <ListItem>WEB</ListItem>
            <ListItem>WEB</ListItem>
          </List>
        </Left>
        <Right>3d Model</Right>
      </Container>
    </Section>
  )
}

export default Works;