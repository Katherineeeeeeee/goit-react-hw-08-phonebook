import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'components/Header/Header';
import UserRoutes from '../UserRoutes';

export default function App() {
  return (
    <>
      <ToastContainer autoClose={3000} position="top-center" />
      <Header />
      <UserRoutes />
    </>
  );
}
