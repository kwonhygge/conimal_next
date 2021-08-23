import "@emotion/react";

declare module "@emotion/react" {
  export interface DefaultTheme {
    colors: {
      white: string;
    };

    fontSizes: {
      size16: string;
    };
  }
}
