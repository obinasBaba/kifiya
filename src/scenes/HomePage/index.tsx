import React from 'react';
import s from './homepage.module.scss';
import Hero from '@/scenes/HomePage/Hero';
import AboutUs from '@/scenes/HomePage/AboutUs';

const HomePage = () => {
  return (
    <div className={s.container}>
      <Hero />
      <AboutUs />
    </div>
  );
};

export default HomePage;
