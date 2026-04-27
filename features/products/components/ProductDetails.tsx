"use client";
import { useQuery } from "@tanstack/react-query";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "@/features/products/components/ProductCard";

export default function ProductList({ initialData }: any) {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      return res.json();
    },
    initialData: {
      products: initialData,
    },
  });

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
      {data?.products?.map((product: any) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </SimpleGrid>
  );
}
