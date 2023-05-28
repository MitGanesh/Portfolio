import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { styled } from 'styled-components';
import { mobile } from '../responsive';

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
  flex-direction: column;
  align-items: center;
  gap: 32px;

  ${mobile({
  width: '90%',
})}
`;

const Card = styled.div`
  width: 100%;
  padding: 18px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  display: flex;
  gap: 16px;
  /* border: 1px solid #DCD0FF; */
  -webkit-filter: blur(0.8);

  ${mobile({
  flexDirection: 'column',
  padding: '6px'
})}
`
const Screen = styled.a`
  width: 350px;
  height: 280px;
  flex: 1;
  border-radius: 10px;
  background: ${props => `url(${props.src})`};
  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  &:hover{
    scale: 1.03;
  }

  ${mobile({
  display: 'none',
})}
`
const Content = styled.div`
  flex: 1;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mobile({
    padding: '12px 0px',
  })}
`
const Title = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: bold;

  ${mobile({
  fontSize: '18px'
})}
`
const Info = styled.div`
  padding: 10px 24px;
  font-size: 16px;
  line-height: 1.5;

  ${mobile({
  fontSize: '12px',
})}
`
const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`

const Icon = styled.a`
  display: flex;
  color: white;
  text-decoration: none;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover{
    scale: 1.05;
  }
`


const Works = () => {
  return (
    <Section>
      <Container id='projects'>
        <Card>
          <Screen src='./images/pr1.png' href='https://cads-gm.netlify.app' target='_blank' />
          <Content>
            <Title>CAD&apos;s PRO</Title>
            <Info>
              CAD&apos;s a Architectural Firm, where they specialize in end-to-end design, planning, and execution across multiple sectors with user-friendly interface allows you to explore our extensive portfolio of architectural projects and discover how we bring visions to life. From residential to commercial, industrial to institutional, team of experts is dedicated to delivering exceptional designs that surpass expectations.
            </Info>
            <Links>
              <Icon href='https://github.com/MitGanesh/CAD-PRO' target='_blank'>
                <FaGithub size={30} /> Code
              </Icon>
              <Icon href='https://cads-gm.netlify.app' target='_blank'>
                <FaExternalLinkAlt size={25} /> Live
              </Icon>
            </Links>
          </Content>
        </Card>
        <Card>
          <Content>
            <Title>TEXTIN APP</Title>
            <Info>Unlock the Power of TextIn, Your Ultimate Text Editor for Effortless Styling, Formatting, and Operations. Seamlessly manipulate your text with ease, from converting cases to removing whitespace and much more, all within a user-friendly interface designed for convenience and productivity.</Info>
            <Links>
              <Icon href='https://github.com/MitGanesh/Textin-Text.Editor-React' target='_blank'>
                <FaGithub size={30} /> Code
              </Icon>
              <Icon href='https://textin-text-gm.netlify.app' target='_blank'>
                <FaExternalLinkAlt size={25} /> Live
              </Icon>
            </Links>
          </Content>
          <Screen src='./images/pr4.png' href='https://textin-text-gm.netlify.app' target='_blank' />
        </Card>
      </Container>
    </Section>
  )
}

export default Works;