import {FC } from 'react';

import './LogoutButton.scss';

import { ReactComponent as LogoutIcon} from '../../assets/log-out-outline.svg';

interface DeauthoriseButtonProps {
  onClick: () => void;
}

const DeauthoriseButton: FC<DeauthoriseButtonProps > = ({ onClick }) => (
  <button className="logout__button" type="button" onClick={onClick}>
    <LogoutIcon width={24} />
  </button> 
);

export default DeauthoriseButton;
