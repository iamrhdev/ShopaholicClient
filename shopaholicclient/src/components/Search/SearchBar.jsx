import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import React from "react";

export default function SearchBar() {
  return (
    <Stack>
      <InputGroup>
        <Input
          backgroundColor={"white"}
          borderRadius={"19px"}
          variant="outline"
          placeholder="Search for items and brands"
          fontSize={"13px"}
          paddingLeft={"16px"}
          paddingRight={"38px"}
          height={"38px"}
        />
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.500" />}
          paddingRight="12px"
        />
      </InputGroup>
    </Stack>
  );
}
