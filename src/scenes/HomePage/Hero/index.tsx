import React from 'react';
import s from './hero.module.scss';

import HeroBg from '@/public/assets/hero-bg.png';
import HeroImg from '@/public/assets/hero_img.png';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.hero_bg}>
        <Image src={HeroBg} alt="hero background" />
      </div>

      <div className={s.shapes}>
        {[...Array(7)].map((_, i) => (
          <div key={i} className={s.shape} />
        ))}
      </div>

      <div className={s.wrapper}>
        <div className={s.text}>
          <Typography variant="h2">
            <span className={s.thin}>Sharing Vitality</span> <br />
            Through Designing
          </Typography>

          <Typography variant="body1">
            clean design and advanced digital solutions
          </Typography>

          <div className={s.btns}>
            <Button variant="contained" className={s.btn}>
              Explore More
            </Button>
            <Button variant="outlined" className={s.btn}>
              See Live Demo
            </Button>
          </div>
        </div>

        <div className={s.hero_img}>
          <Image src={HeroImg} alt="hero background" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
