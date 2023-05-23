import React from 'react';
import { styled } from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`

const Right = styled.div`
  flex: 3;
  position: relative;
`

const Img = styled.img`
  width: 550px;
  height: 650px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }
`

const Title = styled.h1`
  font-size: 74px;
`

const InfoBox = styled.div`
  
`

const InfoText = styled.h2`
  color: hotpink;
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`

const Button = styled.button`
  width: 140px;
  padding: 12px 18px;
  border: none;
  color: white;
  background: hotpink;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <InfoBox>
            <InfoText>What I Do</InfoText>
          </InfoBox>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolorum mollitia! In dolores maiores laboriosam.</Desc>
          <Button>Know More</Button>
        </Left>
        <Right>
          {/* 3D Model */}
          <Img src="./images/men.png" />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero;