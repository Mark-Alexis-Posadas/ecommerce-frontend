import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addToCartAPI = async (productId: string, quantity: number) => {
  return axios.post(`${API_URL}/api/cart`, {
    productId,
    quantity,
  });
};
