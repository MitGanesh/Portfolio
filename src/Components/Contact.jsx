import React from 'react';
import { SiLinkedin, SiTwitter } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { styled } from 'styled-components';
import { FaGithub } from 'react-icons/fa';

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`

const Title = styled.h1`
  font-size: 62px;
`
const InfoText = styled.p`
  font-size: 32px;
`
const ContactSection = styled.div`
`
const Box = styled.div`
  display: flex;
  gap: 30px;
`

const Icon = styled.a`
  color: white;
`

const RightsText = styled.p`
  padding: 30px 0px;
  position: absolute;
  bottom: 0;
  left: 50;
`

const Contact = () => {
  return (
    <Section>
      <Container>
        <Title>Let's Connect</Title>
        <InfoText>Don't be shy! Hit me up!</InfoText>
        <ContactSection>
          <Box>
            <Icon href='https://www.linkedin.com/in/ganesh-mittha'>
              <SiLinkedin size={30} />
            </Icon>
            <Icon href='https://twitter.com/GaneshMittha3'>
              <SiTwitter size={30} />
            </Icon>
            <Icon href='mailto:ganeshmittha88@gmail.com'>
              <MdEmail size={30} />
            </Icon>
            <Icon href='https://github.com/MitGanesh'>
              <FaGithub size={30} />
            </Icon>
          </Box>
        </ContactSection>
      </Container>
      <RightsText>All rights are reserved &copy; <b>WEB.DEV</b></RightsText>
    </Section>
  )
}

export default Contact;