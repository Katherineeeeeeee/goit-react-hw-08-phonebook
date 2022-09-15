import s from './UserMenu.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

export default function UserMenu() {
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
}

UserMenu.propTypes = {
  onLogout: PropTypes.func,
};
