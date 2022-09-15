import s from './UserMenu.module.css';
import { useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.wrap}>
      <button className={s.btn} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
