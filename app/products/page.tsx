import { Container, Box } from "@chakra-ui/react";

import ProductList from "@/features/products/components/ProductDetails";

export default async function ProductsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: "no-store",
  });

  const json = await res.json();

  return (
    <Box as="section" py={10}>
      <Container maxW="7xl">
        <ProductList initialData={json.data} />
      </Container>
    </Box>
  );
}
