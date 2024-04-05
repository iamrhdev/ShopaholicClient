"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import "./navbar.scss";
import NavBtn from "./NavBtn/NavBtn";
import SearchBar from "../Search/SearchBar";
import NavIcons from "./NavIcons/NavIcons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navLinks = ["WOMEN", "MEN"];
  return (
    <>
      <Box className="container">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <NavBtn navLinks={navLinks} />
          <SearchBar />
          <NavIcons />
        </Flex>
      </Box>
    </>
  );
}
