import React from 'react';
import { styled } from 'styled-components';
import { SiHtml5, SiCss3, SiJavascript, SiRedux, SiTypescript, SiMui, SiStyledcomponents } from 'react-icons/si'
import { FaReact } from 'react-icons/fa';
import { mobile } from '../responsive';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    width: '90%',
    flexDirection: 'column',
  })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`

const Right = styled.div`
  flex: 1;
  position: relative;
`

const Title = styled.h1`
  font-size: 36px;
  color: #fda5d6;
  text-transform: uppercase;

  ${mobile({
    fontSize: '24px',
  })}
`

const InfoBox = styled.div`
  
`

const InfoText = styled.h2`
  color: #fda5d6;

  ${mobile({
    fontSize: '16px',
  })}
`

const Desc = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: lightgray;

  ${mobile({
    fontSize: '14px',
  })}
`

const Button = styled.button`
  width: 140px;
  padding: 12px 18px;
  border: none;
  color: white;
  background: #ffb7df;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`

const Img = styled.img`
  width: 95%;
  position: absolute;
  top: 0;
  left: -90px;
  bottom: 0;
  right: 0;
  margin: auto;

  ${mobile({
    width: 'unset',
    scale: '0.5',
    // position: 'relative',
    left: '-320px',
  })}
`

const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${mobile({
    flexDirection: 'column',
    gap: '16px',
  })}
`

const Icons = styled.div`
  padding: 24px 0px;
  display: flex;
  gap: 26px;

  ${mobile({
    gap: '14px',
  })}
`
const Icon = styled.div`
  cursor: grab;
`

const About = () => {
  return (
    <Section>
      <Container id='about'>
        <Right>
          <Img src="./images/work.png" />
        </Right>
        <Left>
          <Title>About Me</Title>
          {/* <InfoBox>
            <InfoText>What I Do</InfoText>
          </InfoBox> */}
          <Desc>As a front-end developer with a focus on reliability and scalability, I specialise in React, Redux, JavaScript, TypeScript, HTML, and CSS. I specialize in crafting visually appealing and highly functional websites that leave a lasting impression. I take pride in writing clean and easily maintainable code. Proficient in using editor and prototyping tools, I am always looking for opportunities to enhance my skills and stay up-to-date with the latest industry trends.</Desc>
          <SkillsContainer>
            <InfoText>Tech Stack &nbsp;|</InfoText>
            <Icons>
              <Icon>
                <SiHtml5 size={30} />
              </Icon>
              <Icon>
                <SiCss3 size={30} />
              </Icon>
              <Icon>
                <SiJavascript size={30} />
              </Icon>
              <Icon>
                <FaReact size={30} />
              </Icon>
              <Icon>
                <SiRedux size={30} />
              </Icon>
              <Icon>
                <SiTypescript size={30} />
              </Icon>
              <Icon>
                <SiMui size={30} />
              </Icon>
            </Icons>
          </SkillsContainer>
        </Left>
      </Container>
    </Section>
  )
}

export default About;