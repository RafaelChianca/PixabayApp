import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    text: '#000000',
    background: '#E0E0E0',
  },
};
