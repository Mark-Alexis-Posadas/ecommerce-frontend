import { Container, Box } from "@chakra-ui/react";
import ProductList from "@/features/products/components/ProductDetails";
import { api } from "@/lib/axios";

export default async function ProductsPage() {
  const res = await api.get("/api/products");

  const data = res.data;

  return (
    <Box as="section" py={10}>
      <Container maxW="7xl">
        <ProductList initialData={data.data} />
      </Container>
    </Box>
  );
}
