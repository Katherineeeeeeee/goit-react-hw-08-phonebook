import s from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

// import { getUser } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';

const UserMenu = () => {
  // const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.wrap}>
      {/* <p className={s.txt}>{name}</p> */}
      <button className={s.btn} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
