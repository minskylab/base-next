import { Box, Heading } from "@chakra-ui/react";
import React from "react";

type HelloWorldProps = {
  name?: string;
};

const HelloWorld = ({ name = "World" }: HelloWorldProps) => {
  return (
    <Box textAlign={"center"}>
      <Heading>Hello {name}</Heading>
    </Box>
  );
};

export { HelloWorld };
