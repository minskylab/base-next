import { ListUsersDocument } from "integration/graphql";
import { useEffect } from "react";
import { List } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import { useQuery } from "urql";

type ListUsersProps = {};

const ListUsers = ({}: ListUsersProps) => {
  const [{ data: usersData, fetching: isFetchingUsers }] = useQuery({
    query: ListUsersDocument,
  });
  const { t, lang } = useTranslation("home");

  return (
    <>
      <List>
        {usersData?.users?.data?.map(user => (
          <List.Item key={user?.id}>
            {t("greeting")} {user?.name}
          </List.Item>
        ))}
      </List>
    </>
  );
};

export { ListUsers };
