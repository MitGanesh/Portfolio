import React from 'react';
import { SiLinkedin, SiTwitter } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { styled } from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { mobile } from '../responsive';

const Section = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  ${mobile({
  width: '90%',
  flexDirection: 'column',
})}
`

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`

const Title = styled.h1`
  font-size: 58px;

  ${mobile({
  textAlign: 'center',
  fontSize: '40px',
})}
`
const InfoText = styled.p`
  font-size: 32px;
  color: #fda5d6;

  ${mobile({
  textAlign: 'center',
  fontSize: '18px',
})}
`
const ContactSection = styled.div`
`
const Box = styled.div`
  display: flex;
  gap: 30px;
`

const Icon = styled.a`
  color: white;

  &:hover{
    scale: 1.2;
  }
`

const RightsText = styled.p`
  padding: 30px 0px;
  position: absolute;
  bottom: 0;
  left: 50;

  ${mobile({
  fontSize: '12px',
})}
`

const ImgContainer = styled.img`
  flex: 1;

  ${mobile({
    flex: '0',
    width: '280px',
  })}
`

const Contact = () => {
  return (
    <Section>
      <Container id='connect'>
        <ImgContainer src='./images/team.png' />
        <Wrapper>
          <Title>Let&apos;s Connect</Title>
          <InfoText>Don&apos;t be shy! Hit me up!</InfoText>
          <ContactSection>
            <Box>
              <Icon href='https://www.linkedin.com/in/ganesh-mittha' target='_blank'>
                <SiLinkedin size={30} />
              </Icon>
              <Icon href='https://twitter.com/GaneshMittha3' target='_blank'>
                <SiTwitter size={30} />
              </Icon>
              <Icon href='mailto:ganeshmittha88@gmail.com' target='_blank'>
                <MdEmail size={30} />
              </Icon>
              <Icon href='https://github.com/MitGanesh' target='_blank'>
                <FaGithub size={30} />
              </Icon>
            </Box>
          </ContactSection>
        </Wrapper>
      </Container>
      <RightsText>All rights are reserved | &copy; <b>WEB.DEV</b></RightsText>
    </Section>
  )
}

export default Contact;