import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import store from './store';
import { theme } from './global/theme';
import { AppStack } from './routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppStack />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
