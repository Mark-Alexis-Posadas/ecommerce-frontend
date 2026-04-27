import React from "react";
import { Box, Text, Badge, Button, Flex, Image } from "@chakra-ui/react";
import { useCartStore } from "@/store/useCartStore";
import { Product } from "@/types/product";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Box
      borderRadius="xl"
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
      transition="all 0.25s ease"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "lg",
      }}
      overflow="hidden"
    >
      {/* IMAGE */}
      <Box h="180px" bg="gray.100" position="relative">
        {product.isFeatured && (
          <Badge position="absolute" top={3} left={3} colorScheme="purple">
            Featured
          </Badge>
        )}

        <Image
          src={product.image}
          alt={product.title}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>

      {/* CONTENT */}
      <Box p={4}>
        <Text fontSize="md" fontWeight="semibold" lineClamp={1}>
          {product.title}
        </Text>

        <Text fontSize="sm" color="gray.500" textTransform="capitalize">
          {product.category}
        </Text>

        {/* RATING */}
        <Flex mt={2} align="center" gap={1}>
          <Text color="yellow.400">★</Text>
          <Text fontSize="sm" color="gray.600">
            {product.rating.rate} ({product.rating.count})
          </Text>
        </Flex>

        {/* PRICE + STOCK */}
        <Flex mt={3} justify="space-between" align="center">
          <Text fontSize="lg" fontWeight="bold">
            ₱{product.price.toLocaleString()}
          </Text>

          <Badge colorScheme={product.stock > 0 ? "green" : "red"}>
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </Badge>
        </Flex>

        <Button
          mt={4}
          w="full"
          colorScheme="blackAlpha"
          disabled={product.stock === 0}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
