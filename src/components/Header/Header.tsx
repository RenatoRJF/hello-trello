import { FC, ReactNode } from 'react';

import './Header.scss';

interface HeaderProps {
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => (
  <header className="app__header">
    {children}
  </header>
);

export default Header;
