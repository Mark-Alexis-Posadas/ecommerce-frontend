"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

export default function FeaturedProducts() {
  return (
    <Box py={20} px={6} bg="gray.50">
      <Heading textAlign="center" mb={4}>
        Featured Products
      </Heading>

      <Text textAlign="center" color="gray.500" mb={10}>
        Handpicked favorites our customers love
      </Text>

      {/* Replace this with your product grid */}
    </Box>
  );
}
