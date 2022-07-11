import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import store from './store';
import { AppStack } from './routes';
import { darkTheme, lightTheme } from './global/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppStack />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
