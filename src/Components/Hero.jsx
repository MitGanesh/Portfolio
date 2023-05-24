import React from 'react';
import { styled } from 'styled-components';
import Navbar from './Navbar';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 85vh;
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
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  /* animation: animate 2s infinite ease alternate; */

  /* @keyframes animate {
    to{
      transform: translateY(20px);
    }
  } */
`

const Title = styled.h1`
  font-size: 74px;
  font-weight: bold;
  color: transparent;
  text-transform: uppercase;
  -webkit-text-stroke: 1px white;
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
          <Title>Front End Developer</Title>
          <InfoBox>
            {/* <InfoText>What I Do</InfoText> */}
          </InfoBox>
          <Desc>Hi, I'm Ganesh Mittha. A passionate Front-end React Developer based in Pune, India. </Desc>
          <Button>Know More</Button>
        </Left>
        <Right>
          {/* 3D Model */}
          <Canvas style={{ width: '100%', height: '600px' }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 200, 400]} scale={2.5}>
              <MeshDistortMaterial
                color="hotpink"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./images/hero.png" />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero;