import '@emotion/react';

import { CustomThemeType } from '@/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends CustomThemeType {}
}
