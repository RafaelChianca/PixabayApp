import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Results, Details } from '../screens';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Results'} component={Results} />
      <Stack.Screen name={'Details'} component={Details} />
    </Stack.Navigator>
  );
};
