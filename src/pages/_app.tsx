import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { FC } from "react";

import { theme } from "@/styles/theme";
import globalStyles from "@/styles/global";

const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
