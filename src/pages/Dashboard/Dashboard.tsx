import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/useStore';

import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import UserInfo from '../../components/UserInfo/UserInfo';
import Loader from '../../components/Loader/Loader';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import Card from '../../components/Card/Card';

import { fetchUserData } from '../../store/actions/user';
import { fetchUserBoards } from '../../store/actions/boards';
import useAuthorise from '../../hooks/useAuthorise';

const Dashboard = () => {
  const { deauthoriseUser } = useAuthorise();
  const dispatch = useAppDispatch();
  const { user, isFetchingUserData, boards, isFetchingBoards } = useAppSelector(state => ({
    user: state.user.data,
    isFetchingUserData: state.user.isFetching,
    boards: state.boards.data,
    isFetchingBoards: state.boards.isFetching,
  }));

  useEffect(() => {
    if (!user) dispatch(fetchUserData());
  }, [dispatch, user]);

  useEffect(() => {
    if (user && !boards) dispatch(fetchUserBoards());
  }, [dispatch, boards, user]);

  if (isFetchingUserData || !user) {
    return <Loader />;
  }
  
  return (
    <>
      <Header>
        <Logo size="small" />
        <h1 className="app__header__title">HelloTrello</h1>

        <div className="app__header__right__content">
          <UserInfo {...user} />
          <div>
            <LogoutButton onClick={() => deauthoriseUser()} />
          </div>
        </div>
      </Header> 

      <div className="app__dashboard">
        <h2 className="app__dashboard__title">My boards</h2>
        
        {isFetchingBoards ? <Loader /> : (
          <div className="app__dashboard__boards">
            {boards?.map((board: any) => (
              <Link key={board?.id} to={`/boards/${board?.id}`}>
                <Card title={board?.name} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
 
 export default Dashboard;
 