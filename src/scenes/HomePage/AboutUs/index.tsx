import React, { useState } from 'react';
import s from './aboutus.module.scss';

import AboutImage from '@/public/assets/about_img.png';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0.5;
    return {
      pathLength: i * 0.01,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const AboutUs = () => {
  const [data] = useState([
    { percent: 50, title: 'WEB DESIGN' },
    {
      percent: 75,
      title: 'DEVELOPMENT',
    },
    { percent: 20, title: 'WEB DESIGN' },
    { percent: 50, title: 'USER EXPERIENCE' },
  ]);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.about_us}>
          <div className={s.about_img}>
            <div className={s.about_shape} />
            <Image src={AboutImage} alt="about image" />
          </div>

          <div className={s.text}>
            <div className={s.about_text_small}>about us</div>

            <Typography variant="h5" gutterBottom color="rgba(0, 0, 0, .64)">
              Why hire use for your <br /> next project?
            </Typography>

            <Typography>
              We are Creative Director and UI/UX Designer from New York, working
              in web development and print media. We enjoy turning complex
              problems into simple, beautiful and intuitive designs.
            </Typography>

            <Typography>
              Our job is to build your website so that it is functional and
              user-friendly but at the same time attractive.
            </Typography>

            <Button variant="contained">Download Cv</Button>
          </div>
        </div>

        <div className={s.projects}>
          {data.map(({ percent, title }) => (
            <div className={s.project} key={title}>
              <div className={s.info}>
                <Typography variant="h5">{percent}%</Typography>
                <Typography variant="caption">{title}</Typography>
              </div>

              <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 278 279"
                fill="none"
                initial="hidden"
                animate="visible"
              >
                <motion.path
                  d="M138.962 2.9997L138.981 3.00007H139C214.663 3.00007 276 64.3371 276 140C276 215.663 214.663 277 139 277C63.337 277 2 215.663 2 140C2 64.2845 61.6475 1.52229 138.962 2.9997Z"
                  stroke="rgba(39, 222, 191, 0.29)"
                  strokeWidth="4"
                />
                <motion.path
                  d="M273 140C273 214.006 213.006 274 139 274C64.9938 274 5 214.006 5 140C5 66.2234 64.5477 9.44426 139.113 6.00005C213.067 6.06133 273 66.0317 273 140Z"
                  stroke="#27DEBF"
                  strokeWidth="10"
                  variants={draw}
                  custom={percent}
                />
              </motion.svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
