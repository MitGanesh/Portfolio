import React from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  
`

const Right = styled.div`
  
`

const ContactSection = styled.div`
  
`

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <ContactSection>
            Contact Form
          </ContactSection>
        </Left>
        <Right>
          Map Here
        </Right>
      </Container>
    </Section>
  )
}

export default Contact;