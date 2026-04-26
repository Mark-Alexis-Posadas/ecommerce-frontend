"use client";

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const categories = ["Electronics", "Fashion", "Home Essentials", "Furniture"];

export default function CategoriesSection() {
  return (
    <Box py={20} px={6}>
      <Heading textAlign="center" mb={12}>
        Shop by Category
      </Heading>

      <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
        {categories.map((cat) => (
          <Box
            key={cat}
            p={10}
            borderRadius="xl"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            textAlign="center"
            fontWeight="semibold"
            cursor="pointer"
            _hover={{
              shadow: "md",
              transform: "translateY(-4px)",
              borderColor: "blue.400",
            }}
            transition="all 0.2s"
          >
            <Text>{cat}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
