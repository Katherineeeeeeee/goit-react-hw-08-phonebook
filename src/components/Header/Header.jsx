import s from './Header.module.css';
import useAuth from 'helpers/hooks/useAuth';

import HeaderMenu from './HeaderMenu/HeaderMenu';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  const isLogin = useAuth();
  return (
    <header className={s.header}>
      <div className={s.row}>
        <HeaderMenu isLogin={isLogin} />
        {isLogin && <UserMenu />}
      </div>
    </header>
  );
};

export default Header;
