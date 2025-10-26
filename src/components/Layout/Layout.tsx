// src/components/Layout/Layout.tsx
import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;