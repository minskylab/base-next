import { Box, Text } from "@chakra-ui/react";
import React from "react";

type HelloWorldProps = {
  name?: string;
};

const HelloWorld = ({ name = "World" }: HelloWorldProps) => {
  return (
    <Box>
      <Text>Hello {name}</Text>
    </Box>
  );
};

export { HelloWorld };
