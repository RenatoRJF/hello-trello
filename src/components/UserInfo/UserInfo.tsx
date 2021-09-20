import { FC } from 'react';

import './UserInfo.scss';

import './UserInfo.scss';

import { User } from '../../interfaces/user';
import UserAvatar from './UserAvatar';

const UserInfo: FC<User> = ({ fullName, avatarUrl, trelloUrl, username }) => (
  <a href={trelloUrl} target="_blank" rel="noreferrer"  className="user__info">
    <UserAvatar url={avatarUrl} />

    <div className="user__info__details">
      <span className="user__info__details__fullname">
        {fullName}
      </span>

      <span className="user__info__details__username">
        {username}
      </span>
    </div>
  </a>
);

export default UserInfo;
