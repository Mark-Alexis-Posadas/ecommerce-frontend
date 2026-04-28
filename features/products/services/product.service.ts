import { api } from "@/lib/axios";

export const getProducts = async () => {
  const res = await api.get("/api/products");
  return res.data;
};
