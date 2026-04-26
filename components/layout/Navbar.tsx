"use client";

import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  IconButton,
  Badge,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar: React.FC = () => {
  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={6}
        py={4}
        align="center"
        justify="space-between"
      >
        {/* LOGO */}
        <Flex align="center" gap={3}>
          <Box
            h="40px"
            w="40px"
            borderRadius="lg"
            bg="blue.600"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            color="white"
          >
            S
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="gray.800">
            ShopX
          </Text>
        </Flex>

        {/* SEARCH (DESKTOP) */}
        <Box flex="1" mx={10} display={{ base: "none", md: "block" }}>
          <InputGroup startElement={<SearchIcon color="gray.400" />}>
            <Input
              placeholder="Search products..."
              bg="gray.100"
              border="1px solid"
              borderColor="gray.200"
              _focus={{
                bg: "white",
                borderColor: "blue.500",
              }}
            />
          </InputGroup>
        </Box>

        {/* ACTIONS */}
        <Flex align="center" gap={4}>
          <Button
            variant="ghost"
            color="gray.700"
            display={{ base: "none", md: "block" }}
          >
            Products
          </Button>

          <Button
            variant="ghost"
            color="gray.700"
            display={{ base: "none", md: "block" }}
          >
            Categories
          </Button>

          {/* CART */}
          <Box position="relative">
            <IconButton aria-label="cart" variant="ghost">
              <span>🛒</span>
            </IconButton>

            <Badge
              position="absolute"
              top="-1"
              right="-1"
              borderRadius="full"
              bg="blue.600"
              color="white"
              fontSize="xs"
              px={2}
            >
              2
            </Badge>
          </Box>

          {/* MOBILE MENU */}
          <IconButton
            aria-label="menu"
            display={{ md: "none" }}
            variant="ghost"
          >
            <span>☰</span>
          </IconButton>
        </Flex>
      </Flex>

      {/* MOBILE SEARCH */}
      <Box px={6} pb={4} display={{ md: "none" }}>
        <InputGroup startElement={<SearchIcon color="gray.400" />}>
          <Input
            placeholder="Search products..."
            bg="gray.100"
            border="1px solid"
            borderColor="gray.200"
            _focus={{
              bg: "white",
              borderColor: "blue.500",
            }}
          />
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Navbar;
