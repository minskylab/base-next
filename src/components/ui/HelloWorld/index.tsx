import { Title } from "@mantine/core";

type HelloWorldProps = {
  name?: string;
};

const HelloWorld = ({ name = "World" }: HelloWorldProps) => {
  return (
    <>
      <Title>Hello {name}</Title>
    </>
  );
};

export { HelloWorld };
