import React, { useEffect } from 'react';
import { Wrap } from './styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../Hero';
import ContentWithTestimonial from '../Content';

export const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Wrap>
      <Hero />
      <ContentWithTestimonial />
    </Wrap>
  );
};

export default Landing;
