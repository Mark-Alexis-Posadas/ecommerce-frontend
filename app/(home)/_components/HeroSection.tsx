"use client";

import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box py={24} px={6} textAlign="center" bg="gray.50">
      <Heading size="2xl" fontWeight="extrabold" lineHeight="1.2" mb={6}>
        Discover Better Living{" "}
        <Box as="span" color="blue.600">
          Through Smart Shopping
        </Box>
      </Heading>

      <Text maxW="600px" mx="auto" color="gray.600" fontSize="lg" mb={10}>
        Carefully selected products that bring quality, comfort, and value to
        your everyday life.
      </Text>

      <Stack direction="row" justify="center" gap={4}>
        <Button colorScheme="blue" size="lg">
          Shop Now
        </Button>
        <Button variant="outline" size="lg">
          Explore Categories
        </Button>
      </Stack>
    </Box>
  );
}
