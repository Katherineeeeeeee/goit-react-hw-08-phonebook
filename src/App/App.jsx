// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { getCurrentUser } from '../redux/auth/auth-operations';

import Header from 'components/Header/Header';
import UserRoutes from '../UserRoutes';

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, []);

  return (
    <div>
      <Header />
      <UserRoutes />
    </div>
  );
}
