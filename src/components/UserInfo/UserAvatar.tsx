import { FC } from 'react';
import cx from 'classnames';

import './UserAvatar.scss';

interface UserAvatarProps {
  url: string;
  size?: 'small' | 'medium' | 'large';
}

const UserAvatar: FC<UserAvatarProps> = ({ url, size = 'small' }) => (
  <div className={cx('user__avatar', `user__avatar${size}`)}>
    <img src={`${url}/50.png`} alt="user avatar" />
  </div>
);

export default UserAvatar;