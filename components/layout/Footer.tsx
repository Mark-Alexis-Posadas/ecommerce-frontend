import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      px={10}
      py={10}
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      textAlign="center"
    >
      <Text fontSize="sm" color="gray.400">
        © {new Date().getFullYear()} ShopX. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
