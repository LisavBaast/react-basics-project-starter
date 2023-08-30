import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, Center } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => (
  <Center>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="pink.300" />
      </InputLeftElement>
      <Input
        bg={"pink.50"}
        focusBorderColor="pink.200"
        placeholder="search"
        onChange={changeFn}
        {...props}
      />
    </InputGroup>
  </Center>
);
