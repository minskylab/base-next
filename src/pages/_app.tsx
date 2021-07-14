import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import {Provider as URQLProvider} from "urql";


import {customTheme} from "theming";
import { URQLClient } from "lib/client";


const client = URQLClient();

const FairpayApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // @ts-ignore
  const Layout = Component.Layout ? Component.Layout : Fragment;

  return (
    <URQLProvider value={client}>
      <ChakraProvider resetCSS theme={customTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </URQLProvider>
  );
};

export default FairpayApp;
