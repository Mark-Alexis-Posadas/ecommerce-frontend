import ProductCard from "@/features/products/components/ProductCard";
import { useQuery } from "@tanstack/react-query";

type ApiProduct = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  stock: number;
  isFeatured?: boolean;
};

export default function Products() {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data: ApiProduct[] = await res.json();

      // 🔥 transform dito
      return data.map((item) => ({
        id: item.id,
        name: item.title,
        price: item.price * 60, // convert to PHP (optional)
        category: item.category,
        rating: item.rating.rate,
        stock: item.rating.count, // fake stock 😄
        isFeatured: item.rating.rate > 4,
      }));
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
