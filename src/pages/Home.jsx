import s from '../components/Home/Home.module.css';
import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';

// to do a profile
export default function Home() {
  const { name } = useSelector(getUser);
  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <p className={s.txt}>
          Hello, <span>{name}</span> :)
        </p>
      </div>
    </div>
  );
}
