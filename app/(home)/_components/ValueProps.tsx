"use client";

import { Box, SimpleGrid, Heading, Text, VStack } from "@chakra-ui/react";

const items = [
  {
    title: "Fast Delivery",
    desc: "Reliable shipping across the Philippines.",
  },
  {
    title: "Secure Payments",
    desc: "Your transactions are always protected.",
  },
  {
    title: "Quality Products",
    desc: "Only the best items make it to our store.",
  },
  {
    title: "Customer Support",
    desc: "We’re here whenever you need help.",
  },
];

export default function ValueProps() {
  return (
    <Box py={20} px={6} bg="gray.100">
      <SimpleGrid columns={{ base: 1, md: 4 }} gap={10}>
        {items.map((item) => (
          <VStack key={item.title} textAlign="center">
            <Heading size="md">{item.title}</Heading>
            <Text color="gray.600" fontSize="sm">
              {item.desc}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
