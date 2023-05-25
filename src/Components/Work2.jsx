import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
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
  flex-direction: column;
  align-items: center;
  gap: 32px;
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
`
const Screen = styled.a`
  width: 350px;
  height: 280px;
  flex: 1;
  border-radius: 10px;
  background: ${props => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`
const Content = styled.div`
  flex: 1;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`
const Info = styled.div`
  padding: 10px 24px;
  font-size: 16px;
  line-height: 1.5;
`
const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`


const Works = () => {
  return (
    <Section>
      <Container>
        <Card>
          <Screen src='https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          <Content>
            <Title>CRYPTO APP</Title>
            <Info>
              Crypto is a premier cryptocurrency listing website that provides a comprehensive platform for users to explore and engage with various cryptocurrencies. Additionally, Crypto understands the importance of personalization, offering both light and dark modes to cater to individual preferences. Crypto is the ultimate destination for crypto enthusiasts with real-time market data. Stay ahead of the market trends and unlock the potential of digital currencies with Crypto.</Info>
            <Links>
              <Icon>
                <FaGithub size={30} /> Code
              </Icon>
              <Icon>
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
              <Icon>
                <FaGithub size={30} /> Code
              </Icon>
              <Icon>
                <FaExternalLinkAlt size={25} /> Live
              </Icon>
            </Links>
          </Content>
          <Screen src='https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        </Card>
      </Container>
    </Section>
  )
}

export default Works;