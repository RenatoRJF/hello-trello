import { FC, ReactNode } from 'react';
import cx from 'classnames';

import './Button.scss';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  kind?: 'default' | 'primary' | 'secondary';
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children, disabled, onClick, type = "button", kind = 'default', className,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={cx('button', `button--${kind}`, className)}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
