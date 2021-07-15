import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider as URQLProvider } from "urql";

import { customTheme } from "theming";
import { URQLClient } from "lib/client";

const client = URQLClient();

const FairpayApp = ({ Component, pageProps }: AppProps) => {
  return (
    <URQLProvider value={client}>
      <ChakraProvider resetCSS theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </URQLProvider>
  );
};

export default FairpayApp;
