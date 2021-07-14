import { devtoolsExchange } from "@urql/devtools";
import {
  cacheExchange,
  CombinedError,
  createClient,
  dedupExchange,
  errorExchange,
  fetchExchange
} from "urql";


export const URQLClient = () => {
  return createClient({
    url: "https://fairpay.dev.minsky.cc/v1/graphql",
    exchanges: [
      devtoolsExchange,
      dedupExchange,
      cacheExchange,
      errorExchange({
        onError: (error: CombinedError) => {
          console.log({ error });
        },
      }),
      fetchExchange,
    ],
  });
};