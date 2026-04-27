export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  stock: number;
  isFeatured: boolean;
};
