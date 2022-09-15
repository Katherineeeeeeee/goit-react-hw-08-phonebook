import s from './HeaderMenu.module.css';
import { NavLink } from 'react-router-dom';

import { items } from './items';

const isActive = ({ isActive }) => {
  return isActive ? s.active : s.link;
};

const HeaderMenu = ({ isLogin }) => {
  const selectItems = isLogin ? items : items.filter(item => !item.private);
  const elements = selectItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={isActive} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={s.menu}>{elements}</ul>;
};
export default HeaderMenu;
