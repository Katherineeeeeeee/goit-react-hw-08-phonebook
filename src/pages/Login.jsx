import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useAuth from 'helpers/hooks/useAuth';

import LoginForm from 'components/Login/LoginForm';
import { login } from 'redux/auth/auth-operations';

export default function Login() {
  const isLogin = useAuth();

  const dispatch = useDispatch();
  const onLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <main>
      <div>
        <LoginForm onSubmit={onLogin} />
      </div>
    </main>
  );
}
