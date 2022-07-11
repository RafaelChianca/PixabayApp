import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      invertedText: string;
      background: string;
      placeholderText: string;
    };
  }
}

//TODO: add dark theme
export const theme: DefaultTheme = {
  colors: {
    text: '#000000',
    invertedText: '#FFFFFF',
    background: '#E0E0E0',
    placeholderText: '#E0E0E0',
  },
};
