import React, { useRef } from 'react';
import s from './layout.module.scss';
import FixedLayer from '@/components/commons/FixedLayer';

interface Props {
  children: React.ReactNode;
  pageProps: Record<string, any>;
}

const Layout: React.FC<Props> = ({ children }) => {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <FixedLayer />
      <div className={s.root} ref={container}>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
