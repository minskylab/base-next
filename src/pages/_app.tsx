import type { AppProps } from "next/app";
import { Provider as URQLProvider } from "urql";
import { URQLClient } from "lib/client";
import { MantineProvider } from '@mantine/core';
import Fonts from "theming/fonts";

const client = URQLClient();

const FairpayApp = ({ Component, pageProps }: AppProps) => {
  return (
    <URQLProvider value={client}>
      <Fonts />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </URQLProvider>
  );
};

export default FairpayApp;
