import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import React from "react";

export default function NavIcons() {
  return (
    <Box>
      <Flex>
        <IconButton
          aria-label="User"
          icon={<FaUser />}
          variant="ghost"
          mr={2}
          color={"white"}
          _hover={{ backgroundColor: "white", color: "rgb(45,45,45)" }}
        />
        <IconButton
          aria-label="Wishlist"
          icon={<FaHeart />}
          variant="ghost"
          mr={2}
          color={"white"}
          _hover={{ backgroundColor: "white", color: "rgb(45,45,45)" }}
        />
        <IconButton
          aria-label="Cart"
          icon={<FaShoppingCart />}
          variant="ghost"
          color={"white"}
          _hover={{ backgroundColor: "white", color: "rgb(45,45,45)" }}
        />
      </Flex>
    </Box>
  );
}
