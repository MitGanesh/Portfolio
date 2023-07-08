import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { styled } from 'styled-components';
import './overlay.css';

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  z-index: 100;
  box-sizing: border-box;
  position: absolute;
  display: ${prop => prop.flag ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  background: url("./images/bg.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: ease-out;
`

const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const fadeOutVariants = {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 2.8
      }
    },
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setShowOverlay(true);
    }, 4000);

    return () => {
      clearTimeout(id);
    }
  }, [])

  return (
    <Container
      flag={showOverlay}
      initial="visible"
      animate="hidden"
      variants={fadeOutVariants}
    >
      <section class="animation">
        <div class="first"><div>Hola</div></div>
        <div class="second"><div>नमस्ते</div></div>
        <div class="third"><div>こんにちは</div></div>
        <div class="fourth"><div>Ciao</div></div>
        <div class="fourth"><div>Hello</div></div>
      </section>
    </Container>
  )
}

export default Overlay;