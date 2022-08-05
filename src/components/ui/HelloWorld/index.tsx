import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";
import { Title, Group } from "@mantine/core";

type HelloWorldProps = {
  name?: string;
};

const HelloWorld = ({ name = "World" }: HelloWorldProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Group>
      <Title>Hello {name}</Title>
      <ActionIcon onClick={() => toggleColorScheme()} size="lg" variant="default">
        {colorScheme === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
      </ActionIcon>
    </Group>
  );
};

export { HelloWorld };
