import { useListUsersQuery } from "integration/graphql";
import { useEffect } from "react";
import { List } from "@mantine/core";

type ListUsersProps = {};

const ListUsers = ({}: ListUsersProps) => {
  const [{ data, fetching, error }] = useListUsersQuery();

  useEffect(() => {
    error && console.log(error.message);
  }, [error]);

  return (
    <>
      <List>
        {data?.users?.data?.map(user => (
          <List.Item key={user?.id}>Hello {user?.name}</List.Item>
        ))}
      </List>
    </>
  );
};

export { ListUsers };
