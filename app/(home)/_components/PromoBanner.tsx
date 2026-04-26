"use client";

import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

export default function PromoBanner() {
  return (
    <Box px={6} py={16}>
      <Box
        borderRadius="2xl"
        bgGradient="linear(to-r, blue.500, purple.500)"
        p={16}
        textAlign="center"
        color="white"
      >
        <VStack gap={4}>
          <Heading size="lg">Free Shipping on Orders Over ₱2,999</Heading>

          <Text opacity={0.9}>Shop more, save more — limited time only.</Text>

          <Button bg="white" color="black" _hover={{ bg: "gray.200" }}>
            Start Shopping
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
