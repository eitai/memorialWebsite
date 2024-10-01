import axios from 'axios';
import { EndPoints } from './endPoints';

const { VITE_API_KEY, VITE_API_URL } = import.meta.env;

export const updateProduct = async (currentProduct) =>
  (
    await axios.put(
      `${VITE_API_URL}/${EndPoints.PRODUCT}/upload`,
      { ...currentProduct },
      { headers: { apikey: VITE_API_KEY } }
    )
  )?.data?.product;

export const deleteProduct = async (serialNumber) => {
  (
    await axios.delete(
      `${VITE_API_URL}/${EndPoints.PRODUCT}/upload?serialNumber=${serialNumber}`,
      {
        headers: { apikey: VITE_API_KEY },
      }
    )
  )?.data;
};
