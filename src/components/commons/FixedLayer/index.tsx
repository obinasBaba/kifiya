import React from 'react';
import s from './fixed.module.scss';

import { Typography } from '@mui/material';
import Link from 'next/link';

const FixedLayer = () => {
  const links = ['Home', 'About us', 'services', 'News', 'Resources'];

  return (
    <div className={s.container}>
      <nav className={s.nav_top}>
        <Link href={'/'}>
          <div className={s.logo}>
            <span />
            <span />
          </div>
        </Link>

        <div className={s.links}>
          {links.map((link) => (
            <Link href="/" key={link}>
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default FixedLayer;
