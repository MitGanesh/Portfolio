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
          <Screen src='./images/pr2.png' href='https://crypto-gm.netlify.app' target='_blank' />
          <Content>
            <Title>CRYPTO APP</Title>
            <Info>
              Crypto is a premier cryptocurrency listing website that provides a comprehensive platform for users to explore and engage with various cryptocurrencies. Additionally, Crypto understands the importance of personalization, offering both light and dark modes to cater to individual preferences. Crypto is the ultimate destination for crypto enthusiasts with real-time market data. Stay ahead of the market trends and unlock the potential of digital currencies with Crypto.</Info>
            <Links>
              <Icon href='https://github.com/MitGanesh/Crypto-App' target='_blank'>
                <FaGithub size={30} /> Code
              </Icon>
              <Icon href='https://crypto-gm.netlify.app' target='_blank'>
                <FaExternalLinkAlt size={25} /> Live
              </Icon>
            </Links>
          </Content>
        </Card>
        <Card>
          <Content>
            <Title>NOVOZ E-COM</Title>
            <Info>Novoz is a e-commerce website that offers a wide variety and range of apparels for fashion enthusiasts. With its user-friendly interface, Novoz provides a seamless and enjoyable shopping experience for customers. From trendy clothing to stylish accessories, Novoz caters to diverse fashion preferences, ensuring that customers can find the perfect items to suit their style.</Info>
            <Links>
              <Icon href='https://github.com/MitGanesh/Novoz-Ecom' target='_blank'>
                <FaGithub size={30} /> Code
              </Icon>
              <Icon href='https://novoz-ecom-gm.netlify.app' target='_blank'>
                <FaExternalLinkAlt size={25} /> Live
              </Icon>
            </Links>
          </Content>
          <Screen src='./images/pr3.png' href='https://novoz-ecom-gm.netlify.app' target='_blank' />
        </Card>
      </Container>
    </Section>
  )
}

export default Works;