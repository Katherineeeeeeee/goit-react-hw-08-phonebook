import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useAuth from 'helpers/hooks/useAuth';

import RegisterForm from '../components/Register/RegisterForm';
import { signup } from 'redux/auth/auth-operations';

export default function Register() {
  const isLogin = useAuth();

  const dispatch = useDispatch();
  const onSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <main>
      <div>
        <RegisterForm onSubmit={onSignup} />
      </div>
    </main>
  );
}
