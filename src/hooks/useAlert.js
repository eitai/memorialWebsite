import { toast } from 'react-toastify';

const useAlert = () => {
  const addAlert = (text) => toast.success(text);

  return { addAlert };
};

export default useAlert;
