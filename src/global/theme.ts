import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      text: string;
      background: string;
      placeholderText: string;
      searchBar: string;
    };
  }
}

const lightTheme: DefaultTheme = {
  colors: {
    main: '#FFFFFF',
    text: '#000000',
    background: '#E0E0E0',
    placeholderText: '#E0E0E0',
    searchBar: '#FFFFFF',
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    main: '#000000',
    text: '#FFFFFF',
    background: '#000000',
    placeholderText: '#363434',
    searchBar: '#0F0F0F',
  },
};

export { lightTheme, darkTheme };
