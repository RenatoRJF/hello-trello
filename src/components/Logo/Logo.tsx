import { FC } from 'react';
import cx from 'classnames';

import './Logo.scss';

import LogoImage from '../../assets/trello.svg'

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: FC<LogoProps> = ({ size = 'small' }) => (
  <div className={cx('app__logo', `app__logo--${size}`)}>
    <img src={LogoImage} alt="app logo" />
  </div>
);

export default Logo;
