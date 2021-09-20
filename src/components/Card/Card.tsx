import { FC, ReactNode } from 'react';
import './Card.scss';

interface CardProps {
  children?: ReactNode;
  title?: string;
}

const Card: FC<CardProps> = ({ children, title }) => (
  <div className="card">
    {title && <span className="card__title">{title}</span>}
    {children}
  </div>
);

export default Card;