import React from "react";
import { Box, Text, Badge, Button, Flex, Image } from "@chakra-ui/react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  stock: number;
  isFeatured?: boolean;
};

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
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
          <Badge
            position="absolute"
            top={3}
            left={3}
            colorScheme="purple"
            borderRadius="full"
            px={2}
            fontSize="xs"
          >
            Featured
          </Badge>
        )}

        <Flex h="full" align="center" justify="center">
          <Text color="gray.400" fontSize="sm">
            Product Image
          </Text>
        </Flex>
      </Box>

      {/* CONTENT */}
      <Box p={4}>
        <Text fontSize="md" fontWeight="semibold" noOfLines={1}>
          {product.name}
        </Text>

        <Text fontSize="sm" color="gray.500" textTransform="capitalize">
          {product.category}
        </Text>

        {/* RATING */}
        <Flex mt={2} align="center" gap={1}>
          <Text color="yellow.400">★</Text>
          <Text fontSize="sm" color="gray.600">
            {product.rating}
          </Text>
        </Flex>

        {/* PRICE + STOCK */}
        <Flex mt={3} justify="space-between" align="center">
          <Text fontSize="lg" fontWeight="bold" color="gray.800">
            ₱{product.price.toLocaleString()}
          </Text>

          <Badge
            colorScheme={product.stock > 0 ? "green" : "red"}
            variant="subtle"
            borderRadius="full"
            px={2}
            fontSize="xs"
          >
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </Badge>
        </Flex>

        {/* CTA */}
        <Button
          mt={4}
          w="full"
          colorScheme="blackAlpha"
          isDisabled={product.stock === 0}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
