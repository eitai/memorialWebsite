import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AlertStack = () => (
  <ToastContainer
    position='bottom-right'
    autoClose={3000}
    hideProgressBar={false}
    closeOnClick
    rtl
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='light'
  />
);
